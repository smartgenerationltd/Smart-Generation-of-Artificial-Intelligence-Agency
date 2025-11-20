
import React, { useState } from 'react';
import { ChatIcon, EmailIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon } from '../components/icons/Icons';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => (
    <details className="bg-white/5 p-4 rounded-lg cursor-pointer border border-white/10">
        <summary className="font-semibold text-lg list-none flex justify-between items-center">
            {q}
            <span className="text-brand-green transform transition-transform duration-300 details-open:rotate-45">+</span>
        </summary>
        <p className="mt-2 text-gray-400">{a}</p>
    </details>
);


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Message from ${formData.name} - SG_AI_Agency`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:giniyomugabo@gmail.com?subject=${subject}&body=${body}`;
        
        setSuccessMessage("Thanks for your interested to support our programs. Thank You Once Again");
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="space-y-16">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">Get in Touch</h1>
                <p className="text-lg text-gray-400">We're here to help and answer any question you might have.</p>
            </header>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><ChatIcon className="w-8 h-8 text-brand-green" /> Send us a Message</h2>
                    
                    {successMessage && (
                        <div className="mb-6 p-4 bg-brand-green/20 border border-brand-green/50 rounded-lg text-white text-center">
                            {successMessage}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition" 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                rows={5} 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info & FAQ Section */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            <a href="mailto:giniyomugabo@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <EmailIcon className="w-7 h-7 text-brand-green" />
                                <span className="group-hover:underline">giniyomugabo@gmail.com</span>
                            </a>
                            <a href="https://wa.me/250781121179" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <WhatsAppIcon className="w-7 h-7 text-brand-green" />
                                <span className="group-hover:underline">0781121179</span>
                            </a>
                            <a href="https://www.linkedin.com/in/gilbert-niyomugabo-a71983b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <LinkedinIcon className="w-7 h-7 text-brand-green" />
                                <span className="group-hover:underline">LinkedIn Profile</span>
                            </a>
                            <a href="https://www.facebook.com/GILBERTSTAR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <FacebookIcon className="w-7 h-7 text-brand-green" />
                                <span className="group-hover:underline">/GILBERTSTAR</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <FAQItem 
                            q="What kind of businesses do you work with?"
                            a="We work with a wide range of businesses, from startups to large enterprises, across various industries. If you have a challenge that AI can solve, we're interested."
                        />
                        <FAQItem 
                            q="How long does it take to develop a custom AI solution?"
                            a="The timeline varies greatly depending on the project's complexity. A simple chatbot might take a few weeks, while a complex predictive analytics platform could take several months. We provide a detailed timeline after our initial consultation."
                        />
                        <FAQItem 
                            q="What is the cost of your services?"
                            a="Our pricing is project-based. For consulting and training, we have standard rates available upon request. For custom development, we provide a detailed quote after understanding your requirements."
                        />
                        <FAQItem 
                            q="Do you provide ongoing support and maintenance?"
                            a="Yes, we offer various support and maintenance packages to ensure your AI solutions continue to run smoothly and effectively after deployment."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
