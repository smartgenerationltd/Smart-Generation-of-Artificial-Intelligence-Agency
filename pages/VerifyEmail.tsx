import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as authService from '../services/authService';
import { EmailIcon } from '../components/icons/Icons';

const VerifyEmail: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const email = location.state?.email;

    if (!email) {
        return (
             <div className="text-center py-20">
                <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
                <p className="text-gray-400">No email address was provided. Please sign up again.</p>
                <Link to="/signup" className="mt-6 inline-block px-6 py-2 bg-brand-green text-white font-semibold rounded-lg">Go to Sign Up</Link>
            </div>
        );
    }

    const handleSimulateVerification = () => {
        try {
            authService.verifyUser(email);
            setMessage('Account verified successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Verification failed.');
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="w-full max-w-md p-8 text-center bg-white/5 border border-white/10 rounded-lg shadow-2xl">
                <div className="flex justify-center mb-6">
                    <EmailIcon className="w-16 h-16 text-brand-green"/>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight mb-2">
                    Verify Your Email
                </h1>
                <p className="text-gray-300">
                    A verification email has been sent to <span className="font-bold text-brand-green">{email}</span>. Please check your inbox and click the link to activate your account.
                </p>
                
                <div className="mt-8 p-4 bg-brand-dark/50 rounded-lg">
                    <p className="text-sm text-yellow-400">
                        This is a demo application. No email was actually sent.
                    </p>
                    <button 
                        onClick={handleSimulateVerification}
                        className="mt-4 w-full px-6 py-3 bg-brand-green-darker text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
                    >
                        Simulate Email Verification
                    </button>
                </div>

                {message && <p className="mt-4 text-sm text-green-400">{message}</p>}

                <p className="mt-8 text-center text-sm text-gray-400">
                    Wrong email?{' '}
                    <Link to="/signup" className="font-medium text-brand-green hover:underline">
                        Sign up again
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;