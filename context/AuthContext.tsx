import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';
import { User, Credentials } from '../types';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (credentials: Credentials) => Promise<void>;
    signup: (userData: authService.SignUpData) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    const login = async (credentials: Credentials) => {
        const loggedInUser = await authService.login(credentials);
        setUser(loggedInUser);
        navigate('/dashboard');
    };

    const signup = async (userData: authService.SignUpData) => {
        await authService.signUp(userData);
        navigate('/verify-email', { state: { email: userData.email } });
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        navigate('/login');
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};