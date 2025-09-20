
import React, { useState, useCallback } from 'react';
import { summarizeText, generateImage } from '../services/geminiService';

enum DemoTab {
  Summarizer = 'Summarizer',
  ImageGenerator = 'ImageGenerator'
}

const LoadingSpinner: React.FC = () => (
    <div className="w-8 h-8 border-4 border-white/20 border-t-brand-green rounded-full animate-spin"></div>
);


const Demo: React.FC = () => {
    const [activeTab, setActiveTab] = useState<DemoTab>(DemoTab.Summarizer);
    
    // State for Summarizer
    const [textToSummarize, setTextToSummarize] = useState('');
    const [summary, setSummary] = useState('');
    const [isSummarizing, setIsSummarizing] = useState(false);

    // State for Image Generator
    const [imagePrompt, setImagePrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);

    const handleSummarize = useCallback(async () => {
        if (!textToSummarize.trim()) return;
        setIsSummarizing(true);
        setSummary('');
        const result = await summarizeText(textToSummarize);
        setSummary(result);
        setIsSummarizing(false);
    }, [textToSummarize]);

    const handleGenerateImage = useCallback(async () => {
        if (!imagePrompt.trim()) return;
        setIsGeneratingImage(true);
        setGeneratedImage(null);
        const result = await generateImage(imagePrompt);
        setGeneratedImage(result);
        setIsGeneratingImage(false);
    }, [imagePrompt]);

    return (
        <div className="space-y-12">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">Interactive AI Demo</h1>
                <p className="text-lg text-gray-400">Experience the power of our AI tools firsthand. Powered by Google Gemini.</p>
            </header>

            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center border-b border-white/20 mb-8">
                    <button
                        onClick={() => setActiveTab(DemoTab.Summarizer)}
                        className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === DemoTab.Summarizer ? 'border-b-2 border-brand-green text-brand-green' : 'text-gray-400 hover:text-white'}`}
                    >
                        Text Summarizer
                    </button>
                    <button
                        onClick={() => setActiveTab(DemoTab.ImageGenerator)}
                        className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === DemoTab.ImageGenerator ? 'border-b-2 border-brand-green text-brand-green' : 'text-gray-400 hover:text-white'}`}
                    >
                        AI Image Generator
                    </button>
                </div>
                
                {activeTab === DemoTab.Summarizer && (
                    <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-bold mb-4">Summarize Any Text</h2>
                        <textarea
                            value={textToSummarize}
                            onChange={(e) => setTextToSummarize(e.target.value)}
                            rows={8}
                            placeholder="Paste your text here..."
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md p-3 text-white focus:ring-brand-green focus:border-brand-green transition mb-4"
                        />
                        <button onClick={handleSummarize} disabled={isSummarizing} className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {isSummarizing ? <><LoadingSpinner /> Summarizing...</> : 'Summarize'}
                        </button>
                        {summary && (
                            <div className="mt-6 p-4 bg-brand-dark/50 rounded-md">
                                <h3 className="font-bold text-lg mb-2">Summary:</h3>
                                <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
                            </div>
                        )}
                    </div>
                )}
                
                {activeTab === DemoTab.ImageGenerator && (
                    <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                        <h2 className="text-2xl font-bold mb-4">Generate an Image from a Prompt</h2>
                        <div className="flex gap-4 mb-4">
                            <input
                                type="text"
                                value={imagePrompt}
                                onChange={(e) => setImagePrompt(e.target.value)}
                                placeholder="e.g., A futuristic city skyline at sunset"
                                className="flex-grow bg-brand-dark/50 border border-white/20 rounded-md p-3 text-white focus:ring-brand-green focus:border-brand-green transition"
                            />
                            <button onClick={handleGenerateImage} disabled={isGeneratingImage} className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                                {isGeneratingImage ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                        <div className="mt-6 w-full aspect-square bg-brand-dark/50 rounded-md flex items-center justify-center border border-white/10">
                            {isGeneratingImage && <LoadingSpinner />}
                            {generatedImage && <img src={generatedImage} alt={imagePrompt} className="w-full h-full object-contain rounded-md" />}
                            {!isGeneratingImage && !generatedImage && <p className="text-gray-400">Your generated image will appear here.</p>}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Demo;