
import React from 'react';

const AiWeekAfrica: React.FC = () => {
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
                        <p className="text-4xl font-bold text-brand-green mb-2">$20 <span className="text-lg font-normal text-gray-400">USD</span></p>
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
                <h2 className="text-2xl font-bold mb-6 text-center">Apply to Attend</h2>
                 <div className="bg-white/5 border border-white/10 rounded-lg p-8 shadow-2xl text-center">
                    <p className="text-gray-300 mb-6">Ready to be part of the future of AI in Africa? Click the button below to complete your application via our Google Form.</p>
                    <a 
                        href="https://forms.gle/16C7uD7aJniA84iZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
                    >
                        Apply Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AiWeekAfrica;
