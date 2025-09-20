
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { PortfolioCategory, PortfolioItem } from '../types';


const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <div className="bg-white/5 rounded-lg overflow-hidden group border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-green/20">
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <span className="text-xs font-semibold px-2 py-1 bg-brand-green-darker/20 text-brand-green-darker rounded-full mb-2 inline-block">{item.category}</span>
            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.description}</p>
            <blockquote className="border-l-4 border-brand-green pl-4 text-sm italic text-gray-300">
                {item.clientTestimonial}
            </blockquote>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<PortfolioCategory | 'All'>('All');

    const filters: (PortfolioCategory | 'All')[] = ['All', ...Object.values(PortfolioCategory)];

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') {
            return PORTFOLIO_DATA;
        }
        return PORTFOLIO_DATA.filter(item => item.category === activeFilter);
    }, [activeFilter]);
    
    return (
        <div className="space-y-12">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">Our Portfolio</h1>
                <p className="text-lg text-gray-400">A showcase of our successful AI implementations and client partnerships.</p>
            </header>

            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                            activeFilter === filter
                                ? 'bg-brand-green text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;