import React from 'react';
import { Link } from 'react-router-dom';
import { GearIcon, BrainIcon, ChatIcon } from '../components/icons/Icons';
import { NAV_LINKS } from '../constants';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string; }> = ({ icon, title, description, link }) => (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-brand-green hover:-translate-y-1 transition-all duration-300 shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-brand-green-darker to-brand-green rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link to={link} className="text-brand-green font-semibold hover:underline">
            Learn More &rarr;
        </Link>
    </div>
);


const Home: React.FC = () => {
    const portfolioLink = NAV_LINKS.find(link => link.name === 'Portfolio');

    return (
        <div className="space-y-24">
            {/* Splash / Hero Section */}
            <section className="text-center pt-16 pb-8">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">
                    Empowering Your Business with AI Solutions
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
                    We are SG_AI_Agency, an AI agency dedicated to building custom artificial intelligence solutions that drive growth, efficiency, and innovation.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/services" className="px-8 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                        Our Services
                    </Link>
                    <Link to="/demo" className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors shadow-lg">
                        Try AI Demo
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