
import React, { useState } from 'react';

const AiWeekAfrica: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a real application, you would handle form submission to a backend here.
        setSubmitted(true);
    };

    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">AI WEEK AFRICA 2025</h1>
                <p className="text-lg text-gray-300 mt-4">
                    The Premier Artificial Intelligence Conference in Africa.
                </p>
            </header>

            <section className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/10">
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">1.1. Background & Rationale</h3>
                    <p className="text-gray-300">
                        The global creative industry is evolving quickly due to the rise of Artificial Intelligence (AI). Tools for design, filmmaking, animation, writing, music production, branding, and content creation are now integrated into everyday creative work. Africa’s youth must gain these skills to stay competitive and relevant.
                    </p>
                    <p className="text-gray-300 mt-4">
                        Rwanda is prioritizing the digital economy, and empowering young creatives with AI aligns with the national agenda for innovation, skills development, and job creation.
                    </p>
                    <p className="text-gray-300 mt-4">
                        This workshop provides hands‑on AI skills, prepares young creators for the future of work, and sparks innovation within the local creative community.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">1.2. Problem Statement</h3>
                    <p className="text-gray-300">Most young creatives lack access to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
                        <li>Up‑to‑date AI tools and training</li>
                        <li>Affordable creative education</li>
                        <li>Digital production skills</li>
                        <li>Mentorship and collaboration opportunities</li>
                    </ul>
                     <p className="text-gray-300 mt-4">This limits their ability to compete in global creative, digital, and media markets.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">1.3. Goal of the Project</h3>
                    <p className="text-gray-300">
                        To equip young creatives with practical AI skills that enhance creativity, productivity, and income‑generation opportunities.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">1.4. Specific Objectives</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Train youth in 20+ AI creative tools.</li>
                        <li>Build capacity in AI-powered design, filmmaking, writing, and content creation.</li>
                        <li>Support youth to build an AI-powered creative business model.</li>
                        <li>Promote women’s participation in digital creativity.</li>
                        <li>Create a network of skilled AI creatives across Rwanda.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">1.5. Expected Outcomes</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>100+ youth trained in AI creative skills.</li>
                        <li>At least 60% female participants.</li>
                        <li>100 creative projects produced (videos, artworks, animations, blogs).</li>
                        <li>Strong creative portfolios for all participants.</li>
                        <li>Enhanced employability and creative entrepreneurship.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Event Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">Foreign Nationals</h3>
                        <p className="text-4xl font-bold text-brand-green mb-2">$15 <span className="text-lg font-normal text-gray-400">USD</span></p>
                        <p className="text-sm text-gray-400">Standard admission for international attendees.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">Rwandan & EAC Citizens</h3>
                        <p className="text-4xl font-bold text-brand-green mb-2">20,000 <span className="text-lg font-normal text-gray-400">RWF</span></p>
                        <p className="text-sm text-gray-400">For citizens of Rwanda and the East African Community.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Register Your Interest</h2>
                 <div className="bg-white/5 border border-white/10 rounded-lg p-8 shadow-2xl">
                    {submitted ? (
                        <div className="text-center py-8">
                            <h3 className="text-2xl font-bold text-brand-green mb-2">Thank You!</h3>
                            <p className="text-gray-300">Thanks for submitting your interest, we should inform you as soon as possible.</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Names</label>
                                    <input type="text" id="fullName" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                    <input type="email" id="email" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                 <div>
                                    <label htmlFor="originCountry" className="block text-sm font-medium text-gray-300 mb-1">Origin Country</label>
                                    <input type="text" id="originCountry" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="currentCountry" className="block text-sm font-medium text-gray-300 mb-1">Current Country</label>
                                    <input type="text" id="currentCountry" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City</label>
                                    <input type="text" id="city" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                 <div>
                                    <label htmlFor="district" className="block text-sm font-medium text-gray-300 mb-1">District</label>
                                    <input type="text" id="district" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">Tel number (which is on WhatsApp)</label>
                                <input type="tel" id="whatsapp" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                             <div>
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-1">Briefly, why do you need to attend this event? (100 words)</label>
                                <textarea id="reason" rows={4} maxLength={500} required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                                    Register Interest
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AiWeekAfrica;
