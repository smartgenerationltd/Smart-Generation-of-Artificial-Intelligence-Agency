
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GearIcon, BrainIcon, ChatIcon } from '../components/icons/Icons';
import { NAV_LINKS } from '../constants';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string; }> = ({ icon, title, description, link }) => (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-brand-green hover:-translate-y-1 transition-all duration-300 shadow-lg flex flex-col">
        <div>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-brand-green-darker to-brand-green rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
             <p className="text-xl font-bold">$100<span className="text-base font-normal text-gray-400">/month</span></p>
            <Link to={link} className="text-brand-green font-semibold hover:underline">
                Learn More &rarr;
            </Link>
        </div>
    </div>
);


const Home: React.FC = () => {
    const portfolioLink = NAV_LINKS.find(link => link.name === 'Portfolio');
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const shortDescription = `We are SG_AI_Agency, an AI agency dedicated to building custom artificial intelligence solutions that drive growth, efficiency, and innovation. As a new force driving Africa’s digital future, our mission is to empower businesses, schools, and governments to understand, adopt, and leverage the power of Artificial Intelligence.`;

    const fullDescription = `We are SG_AI_Agency, an AI agency dedicated to building custom artificial intelligence solutions that drive growth, efficiency, and innovation.
    
🌍✨ I’m proud to introduce Smart Generation of AI Agency — a new force driving Africa’s digital future. Our mission is to empower businesses, schools, and governments to understand, adopt, and leverage the power of Artificial Intelligence through consulting, training, and custom-built AI solutions. 🚀

Why is this important? Because across Africa, many organizations want to embrace technology but lack access to the right tools, skills, and guidance. Smart Generation of AI Agency bridges that gap — helping institutions transform knowledge into opportunity and innovation into impact. 💡

Through AI Consulting & Training, Chatbots & Virtual Assistants, Automation Tools, AI-Powered Educational Apps, and Predictive Analytics Solutions, we aim to make AI accessible, practical, and empowering for everyone.

We believe that the next generation should not only use technology but also shape it. Together, we can build a continent where innovation is local, intelligent, and inclusive. 🌐✨`;


    return (
        <div className="space-y-24">
            {/* Splash / Hero Section */}
            <section className="text-center pt-16 pb-8">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">
                    Empowering Your Business with AI Solutions
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-4 whitespace-pre-wrap transition-all duration-500">
                    {isDescriptionExpanded ? fullDescription : shortDescription}
                </p>
                <button 
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="text-brand-green font-semibold hover:underline mb-8 transition-colors"
                >
                    {isDescriptionExpanded ? 'Show Less' : 'Learn More'}
                </button>
                <div className="flex justify-center space-x-4">
                    <Link to="/services" className="px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                        Our Services
                    </Link>
                    <Link to="/demo" className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors shadow-lg">
                        Try AI Demo
                    </Link>
                </div>
            </section>

            {/* AI WEEK AFRICA 2025 Section */}
            <section className="bg-white/5 p-8 rounded-lg border border-brand-green/50 shadow-lg shadow-brand-green/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <span className="text-sm font-bold text-brand-green tracking-widest uppercase">Upcoming Flagship Event</span>
                    <h2 className="text-3xl font-bold mt-2 mb-3">AI WEEK AFRICA 2025</h2>
                    <p className="text-gray-300 max-w-2xl">
                        Join the largest gathering of AI experts, innovators, and enthusiasts in Africa. Explore the future of AI, network with industry leaders, and discover groundbreaking solutions.
                    </p>
                </div>
                <div className="text-center flex-shrink-0">
                    <Link to="/services/ai-week-africa" className="px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg whitespace-nowrap">
                        Learn More & Register
                    </Link>
                </div>
            </section>

            {/* NEW Trending Service Section */}
            <section className="bg-white/5 p-8 rounded-lg border border-brand-green/50 shadow-lg shadow-brand-green/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <span className="text-sm font-bold text-brand-green tracking-widest uppercase">New & Trending</span>
                    <h2 className="text-3xl font-bold mt-2 mb-3">AI Skill for Future Generation of Creatives</h2>
                    <p className="text-gray-300 max-w-2xl">
                        Unlock your creative potential with our new hands-on program. Master the latest AI tools and techniques for art, design, music, and more.
                    </p>
                    <p className="text-brand-green mt-2 font-semibold">Program Dates: January 2026 - June 2026</p>
                </div>
                <div className="text-center flex-shrink-0">
                    <p className="text-2xl font-bold mb-2">$100<span className="text-base font-normal text-gray-400">/month</span></p>
                    <Link to="/services/ai-creatives" className="px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg whitespace-nowrap">
                        Learn More & Apply
                    </Link>
                </div>
            </section>

            {/* Services Overview Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard 
                        icon={<BrainIcon className="w-6 h-6 text-white"/>} 
                        title="AI Consulting & Training" 
                        description="Strategic guidance and hands-on workshops to empower your team with AI knowledge." 
                        link="/services"
                    />
                    <ServiceCard 
                        icon={<GearIcon className="w-6 h-6 text-white"/>} 
                        title="AI Solutions Development" 
                        description="Custom-built AI applications, automations, and tools tailored to your specific business needs." 
                        link="/services"
                    />
                    <ServiceCard 
                        icon={<ChatIcon className="w-6 h-6 text-white"/>} 
                        title="AI-Powered Chatbots" 
                        description="Engage customers 24/7 with intelligent, human-like chatbots for support and sales."
                        link="/services" 
                    />
                </div>
            </section>
            
            {/* Portfolio CTA Section */}
            <section className="bg-gradient-to-r from-brand-green-darker to-brand-green rounded-lg p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">See Our Work in Action</h2>
                <p className="text-lg text-gray-200 mb-8">
                    Explore our portfolio of successful projects and see how we've helped businesses like yours leverage the power of AI.
                </p>
                {portfolioLink && (
                    <a 
                        href={portfolioLink.path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-10 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105 inline-block"
                    >
                        View Portfolio
                    </a>
                )}
            </section>
        </div>
    );
};

export default Home;
