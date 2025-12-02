
import React, { useState, useCallback } from 'react';
import { summarizeText, generateImagesFromPrompt, generateVideoFromImage } from '../services/geminiService';

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
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);

    // State for Video Generation
    const [videoLoadingMap, setVideoLoadingMap] = useState<{[key: number]: boolean}>({});
    const [videoResultMap, setVideoResultMap] = useState<{[key: number]: string}>({});

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
        setGeneratedImages([]);
        setVideoResultMap({}); // Reset videos on new image generation
        const results = await generateImagesFromPrompt(imagePrompt);
        setGeneratedImages(results);
        setIsGeneratingImage(false);
    }, [imagePrompt]);

    const handleAnimateImage = async (base64Image: string, index: number) => {
        setVideoLoadingMap(prev => ({...prev, [index]: true}));
        try {
            const videoUrl = await generateVideoFromImage(base64Image);
            if (videoUrl) {
                setVideoResultMap(prev => ({...prev, [index]: videoUrl}));
            } else {
                alert("Video generation failed or returned no result.");
            }
        } catch (e) {
            console.error(e);
            alert("Failed to generate video. Please ensure you have selected a valid API key if prompted.");
        } finally {
            setVideoLoadingMap(prev => ({...prev, [index]: false}));
        }
    };

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
                        <h2 className="text-2xl font-bold mb-4">Generate Images from a Prompt</h2>
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
                        
                        <div className="mt-6">
                            {isGeneratingImage && (
                                <div className="w-full h-64 bg-brand-dark/50 rounded-md flex items-center justify-center border border-white/10">
                                    <LoadingSpinner />
                                </div>
                            )}

                            {!isGeneratingImage && generatedImages.length === 0 && (
                                <div className="w-full h-64 bg-brand-dark/50 rounded-md flex items-center justify-center border border-white/10">
                                    <p className="text-gray-400">Your generated images will appear here.</p>
                                </div>
                            )}

                            {generatedImages.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {generatedImages.map((imgUrl, index) => (
                                        <div key={index} className="flex flex-col gap-4 p-4 bg-brand-dark/30 rounded-lg border border-white/5">
                                            <div className="aspect-square bg-brand-dark/50 rounded-md border border-white/10 overflow-hidden relative group">
                                                <img src={imgUrl} alt={`${imagePrompt} ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500" />
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                <a 
                                                    href={imgUrl} 
                                                    download={`sg-ai-generated-${Date.now()}-${index + 1}.jpg`}
                                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-sm"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                    Download
                                                </a>
                                                
                                                <button
                                                    onClick={() => handleAnimateImage(imgUrl, index)}
                                                    disabled={videoLoadingMap[index] || !!videoResultMap[index]}
                                                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 font-semibold rounded-lg transition-colors text-sm ${videoResultMap[index] ? 'bg-gray-600 text-gray-300 cursor-default' : 'bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed'}`}
                                                >
                                                    {videoLoadingMap[index] ? (
                                                        <span className="flex items-center gap-2"><div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Animating...</span>
                                                    ) : videoResultMap[index] ? (
                                                        'Animated'
                                                    ) : (
                                                        <>
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                                            Animate
                                                        </>
                                                    )}
                                                </button>
                                            </div>

                                            {videoResultMap[index] && (
                                                <div className="mt-2">
                                                    <p className="text-xs text-gray-400 mb-1 uppercase font-bold tracking-wider">Video Result:</p>
                                                    <video controls src={videoResultMap[index]} className="w-full rounded-md border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.2)]" autoPlay loop />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Demo;
