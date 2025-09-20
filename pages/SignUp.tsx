import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await signup({ name, email, password });
        } catch (err) {
             setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="w-full max-w-md p-8 space-y-8 bg-white/5 border border-white/10 rounded-lg shadow-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-darker">
                        Create an Account
                    </h1>
                    <p className="text-gray-400">Join us to get started with AI.</p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                        />
                    </div>
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
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                        />
                    </div>
                     <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-brand-dark/50 border border-white/20 rounded-md px-3 py-2 text-white focus:ring-brand-green focus:border-brand-green transition"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    
                    <div>
                        <button type="submit" className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                            Create Account
                        </button>
                    </div>
                </form>
                 <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-brand-green hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;