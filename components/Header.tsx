import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { UserIcon, MenuIcon, XIcon, LoginIcon, LogoutIcon } from './icons/Icons';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-green/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                         <div className="w-10 h-10 bg-gradient-to-tr from-brand-green-darker to-brand-green rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <span className="text-xl font-bold tracking-wider text-white">SG_AI_Agency</span>
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-base font-medium transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-gray-300 hover:text-white'}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            )
                        ))}
                        {isAuthenticated && (
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-gray-300 hover:text-white'}`
                                }
                            >
                                Dashboard
                            </NavLink>
                        )}
                    </nav>
                    
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-4">
                            {isAuthenticated ? (
                                <button onClick={logout} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-colors">
                                    <LogoutIcon className="w-5 h-5"/>
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</Link>
                                    <Link to="/signup" className="px-4 py-2 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-opacity-90 transition-colors">Sign Up</Link>
                                </>
                            )}
                        </div>
                       <div className="md:hidden">
                           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10">
                               {isMobileMenuOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
                           </button>
                       </div>
                    </div>
                </div>
            </div>
            
            {isMobileMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {NAV_LINKS.map((link) => (
                         link.external ? (
                            <a
                                key={link.name}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'bg-brand-green text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                    <hr className="border-white/10 my-2" />
                    {isAuthenticated ? (
                        <>
                            <NavLink to="/dashboard" onClick={closeMenu} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-brand-green text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                                Dashboard
                            </NavLink>
                            <button onClick={() => { logout(); closeMenu(); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                             <Link to="/login" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
                                Login
                            </Link>
                             <Link to="/signup" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium bg-brand-green text-white">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;