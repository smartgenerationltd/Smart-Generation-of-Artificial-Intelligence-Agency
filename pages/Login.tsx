import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginIcon } from '../components/icons/Icons';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await login({ email, password });
            navigate(from, { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="w-full max-w-md p-8 space-y-8 bg-white/5 border border-white/10 rounded-lg shadow-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">Sign in to access your dashboard.</p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-brand-green-darker hover:underline">Forgot your password?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                            <LoginIcon className="w-5 h-5"/>
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-brand-green hover:underline">
                        Sign up now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;