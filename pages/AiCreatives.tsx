
import React from 'react';

const AiCreatives: React.FC = () => {
    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">AI Skill for Future Generation of Creatives</h1>
                <p className="text-lg font-semibold text-brand-green mt-4">Program Dates: January 2026 - June 2026</p>
                <p className="text-lg text-gray-300 mt-4">
                    Welcome to a transformative learning experience designed for the next wave of innovators. This program is meticulously crafted to equip aspiring artists, designers, musicians, and writers with the cutting-edge AI tools and techniques that are reshaping the creative landscape. For a subscription of $100/month, you will gain hands-on experience, master powerful generative models, and learn how to integrate artificial intelligence into your creative workflow to unlock unprecedented possibilities and bring your most ambitious ideas to life.
                </p>
            </header>

            <section className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/10">
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">Purpose</h3>
                    <p className="text-gray-300">
                        To empower young people in the creative industry (ages 18–35, especially creatives, recent graduates, and young professionals) with AI knowledge and practical skills they can use in their work and careers.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">Focus Areas</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Training youth on AI tools and applications in creative fields.</li>
                        <li>Helping participants build creative projects using AI.</li>
                        <li>Encouraging innovation, collaboration, and entrepreneurship in the creative economy.</li>
                        <li>Making sure that 60% of participants are women and girls, aligning with your mission of inclusivity.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">Target Audience</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Creatives (designers, musicians, filmmakers, artists, writers, etc.).</li>
                        <li>Recent graduates.</li>
                        <li>Young professionals eager to integrate AI into their work.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-brand-green">Expected Outcomes</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Participants gain practical AI skills they can apply in their creative careers.</li>
                        <li>Creation of a youth network around AI and creativity.</li>
                        <li>Inspiring AI-driven creative projects that can grow into startups or initiatives.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
                 <div className="bg-white/5 border border-white/10 rounded-lg p-8 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                                <input type="text" id="firstName" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                            <div>
                                <label htmlFor="secondName" className="block text-sm font-medium text-gray-300 mb-1">Second Name</label>
                                <input type="text" id="secondName" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="creativeEmail" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                <input type="email" id="creativeEmail" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                            <div>
                                <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-1">Telephone Contact</label>
                                <input type="tel" id="telephone" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Home Location</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="country" className="block text-xs font-medium text-gray-400 mb-1">Country</label>
                                    <input type="text" id="country" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-xs font-medium text-gray-400 mb-1">City</label>
                                    <input type="text" id="city" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="district" className="block text-xs font-medium text-gray-400 mb-1">District</label>
                                    <input type="text" id="district" required className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="guardianName" className="block text-sm font-medium text-gray-300 mb-1">Parent/Guardian Name (if under 18)</label>
                            <input type="text" id="guardianName" className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AiCreatives;
