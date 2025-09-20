import { PortfolioItem, TrainingSession, PortfolioCategory } from './types';

export const NAV_LINKS: { name: string; path: string; external?: boolean }[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: 'https://sites.google.com/view/ai-portifolio-gilbert/home?authuser=0', external: true },
    { name: 'AI Demo', path: '/demo' },
    { name: 'Contact', path: '/contact' },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        id: 1,
        title: 'E-commerce AI Chatbot',
        description: 'A sophisticated chatbot that increased customer engagement by 40% for an online retailer.',
        imageUrl: 'https://picsum.photos/seed/ecomm/600/400',
        category: PortfolioCategory.Chatbot,
        clientTestimonial: '"The AI chatbot transformed our customer service overnight. Simply incredible!"'
    },
    {
        id: 2,
        title: 'Workflow Automation for Finance',
        description: 'Automated invoice processing and data entry, saving over 200 hours of manual work per month.',
        imageUrl: 'https://picsum.photos/seed/finance/600/400',
        category: PortfolioCategory.Automation,
        clientTestimonial: '"Their automation solution was a game-changer for our finance department."'
    },
    {
        id: 3,
        title: 'AI Strategy Consulting for SaaS',
        description: 'Developed a comprehensive AI roadmap for a SaaS company to integrate machine learning into their product.',
        imageUrl: 'https://picsum.photos/seed/saas/600/400',
        category: PortfolioCategory.Consulting,
        clientTestimonial: '"SG_AI_Agency provided the clarity and direction we desperately needed."'
    },
    {
        id: 4,
        title: 'Predictive Analytics Mobile App',
        description: 'A mobile app for sales forecasting that improved prediction accuracy by 25%.',
        imageUrl: 'https://picsum.photos/seed/mobile/600/400',
        category: PortfolioCategory.App,
        clientTestimonial: '"The predictive app is now an indispensable tool for our sales team."'
    }
];

export const TRAINING_SESSIONS: TrainingSession[] = [
    {
        id: 1,
        title: 'Introduction to AI for Business Leaders',
        description: 'A high-level overview of AI concepts, opportunities, and strategic implementation.',
        duration: '3 Hours',
        level: 'Beginner',
    },
    {
        id: 2,
        title: 'Prompt Engineering Workshop',
        description: 'Hands-on training to master the art of crafting effective prompts for generative AI models.',
        duration: '1 Day',
        level: 'Intermediate',
    },
    {
        id: 3,
        title: 'Implementing AI Automation',
        description: 'A technical workshop on using AI tools to automate complex business workflows.',
        duration: '2 Days',
        level: 'Advanced',
    }
];