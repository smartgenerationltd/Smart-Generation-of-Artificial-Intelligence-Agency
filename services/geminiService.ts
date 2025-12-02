
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Declare window interface for AI Studio key selection
// We augment the AIStudio interface (which is referenced by the existing Window definition)
// rather than redeclaring the window property which causes a type conflict.
declare global {
    interface AIStudio {
        hasSelectedApiKey: () => Promise<boolean>;
        openSelectKey: () => Promise<void>;
    }
}

export const summarizeText = async (text: string): Promise<string> => {
    try {
        const prompt = `Summarize the following text into a concise paragraph, focusing on the key points:\n\n---\n\n${text}`;
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text || "";
    } catch (error) {
        console.error("Error summarizing text:", error);
        return "An error occurred while summarizing the text. Please try again.";
    }
};

export const generateImagesFromPrompt = async (prompt: string): Promise<string[]> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 3,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
        }
        return [];
    } catch (error) {
        console.error("Error generating images:", error);
        return [];
    }
};

export const generateVideoFromImage = async (imageBase64: string): Promise<string | null> => {
    try {
        // API Key Selection for Veo models
        if (typeof window !== 'undefined' && window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await window.aistudio.openSelectKey();
            }
        }

        // Create a new instance to ensure the latest key is used
        const veoAi = new GoogleGenAI({ apiKey: process.env.API_KEY });

        // Remove the data URL prefix to get raw base64 bytes
        const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

        let operation = await veoAi.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            image: {
                imageBytes: cleanBase64,
                mimeType: 'image/jpeg',
            },
            prompt: "Cinematic, high quality animation of this scene",
            config: {
                numberOfVideos: 1,
                resolution: '720p',
                aspectRatio: '1:1',
            }
        });

        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            operation = await veoAi.operations.getVideosOperation({ operation: operation });
        }

        const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (videoUri) {
            // Fetch the video content securely
            const response = await fetch(`${videoUri}&key=${process.env.API_KEY}`);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        }
        
        return null;
    } catch (error) {
        console.error("Error generating video:", error);
        throw error;
    }
};