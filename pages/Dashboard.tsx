import React from 'react';
import { UserIcon } from '../components/icons/Icons';
import { useAuth } from '../context/AuthContext';

const DashboardCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-brand-green">{title}</h2>
        {children}
    </div>
);

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-12">
            <header className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-green-darker to-brand-green flex items-center justify-center">
                    <UserIcon className="w-12 h-12 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Client Dashboard</h1>
                    <p className="text-lg text-gray-400">Welcome back, {user?.name || 'Client'}!</p>
                </div>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <DashboardCard title="Booked Sessions">
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center p-3 bg-brand-dark/50 rounded-md">
                            <div>
                                <p className="font-semibold">Prompt Engineering Workshop</p>
                                <p className="text-sm text-gray-400">Date: 2024-08-15</p>
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Confirmed</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-brand-dark/50 rounded-md">
                            <div>
                                <p className="font-semibold">AI Strategy Consulting</p>
                                <p className="text-sm text-gray-400">Date: 2024-09-01</p>
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Confirmed</span>
                        </li>
                    </ul>
                </DashboardCard>

                <DashboardCard title="AI Solution Requests">
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center p-3 bg-brand-dark/50 rounded-md">
                            <div>
                                <p className="font-semibold">E-commerce Chatbot</p>
                                <p className="text-sm text-gray-400">Submitted: 2024-07-20</p>
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">In Progress</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-brand-dark/50 rounded-md">
                            <div>
                                <p className="font-semibold">Invoice Automation Tool</p>
                                <p className="text-sm text-gray-400">Submitted: 2024-06-10</p>
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">Completed</span>
                        </li>
                    </ul>
                </DashboardCard>

                <DashboardCard title="Account Details">
                    <div className="space-y-2 text-gray-300">
                        <p><strong>Name:</strong> {user?.name}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Company:</strong> Example Corp</p>
                        <button className="mt-2 text-sm text-brand-green-darker hover:underline">Edit Profile</button>
                    </div>
                </DashboardCard>
                
                <DashboardCard title="Notifications">
                     <p className="text-gray-400">No new notifications.</p>
                </DashboardCard>
            </div>
        </div>
    );
};

export default Dashboard;