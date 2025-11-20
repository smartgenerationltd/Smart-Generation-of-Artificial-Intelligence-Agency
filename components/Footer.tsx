
import React from 'react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from './icons/Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark/50 border-t border-white/10 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SG_AI_Agency. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/GILBERTSTAR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/in/gilbert-niyomugabo-a71983b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
                        <a href="https://wa.me/250781121179" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><WhatsAppIcon className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;