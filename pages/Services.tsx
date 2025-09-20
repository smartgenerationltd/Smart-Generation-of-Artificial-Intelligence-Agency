
import React, { useState } from 'react';
import { TRAINING_SESSIONS } from '../constants';
import { TrainingSession } from '../types';

const TrainingCard: React.FC<{ session: TrainingSession }> = ({ session }) => (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold mb-2 text-white">{session.title}</h3>
            <span className="text-xs font-semibold px-2 py-1 bg-brand-green/20 text-brand-green rounded-full">{session.level}</span>
        </div>
        <p className="text-gray-400 mb-4">{session.description}</p>
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Duration: {session.duration}</p>
            <button className="px-4 py-2 bg-brand-green-darker text-white font-semibold rounded-lg text-sm hover:bg-opacity-90 transition-colors">
                Book a Session
            </button>
        </div>
    </div>
);


const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState('consulting');

    return (
        <div className="space-y-16">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">Our Services</h1>
                <p className="text-lg text-gray-400">Tailored AI solutions to fit your unique business challenges.</p>
            </header>

            <div className="max-w-4xl mx-auto">
                {/* AI Consulting & Training */}
                <section>
                    <h2 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">AI Consulting & Training</h2>
                    <p className="text-center text-gray-400 mb-8">Equip your team with the skills and strategy to succeed with AI.</p>
                    <div className="space-y-6">
                        {TRAINING_SESSIONS.map(session => <TrainingCard key={session.id} session={session} />)}
                    </div>
                </section>
                
                {/* AI Solutions Development */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">AI Solutions Development</h2>
                    <p className="text-center text-gray-400 mb-8">Ready to build? Tell us about your project.</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-8 shadow-2xl">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="orgName" className="block text-sm font-medium text-gray-300 mb-1">Business/Organization Name</label>
                                <input type="text" id="orgName" className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                            </div>
                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">Project Type</label>
                                <select id="projectType" className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition">
                                    <option>Chatbot</option>
                                    <option>Automation</option>
                                    <option>Custom App</option>
                                    <option>Data Analysis</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description of Needs</label>
                                <textarea id="description" rows={4} className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-1">Deadline (Optional)</label>
                                    <input type="date" id="deadline" className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="documents" className="block text-sm font-medium text-gray-300 mb-1">Supporting Documents</label>
                                    <input type="file" id="documents" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-green file:text-white hover:file:bg-opacity-90 cursor-pointer" />
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;