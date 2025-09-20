

export enum PortfolioCategory {
    Chatbot = 'Chatbot',
    Automation = 'Automation',
    Consulting = 'Consulting',
    App = 'App',
}

export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: PortfolioCategory;
    clientTestimonial: string;
}

export interface TrainingSession {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Fix: Add User and Credentials types for authentication context.
export interface User {
    name: string;
    email: string;
}

export interface Credentials {
    email: string;
    password: string;
}
