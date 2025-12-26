import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChevronRight, Globe, Users, Briefcase, Mail } from 'lucide-react';

export const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const pathStruct = location.pathname.split('/').filter(Boolean);
    const currentPage = pathStruct[pathStruct.length - 1] || 'company';

    const menuItems = [
        { path: '/company/about', label: 'About Us', icon: Users },
        { path: '/company/blog', label: 'Blog', icon: Globe },
        { path: '/company/careers', label: 'Careers', icon: Briefcase },
        { path: '/company/contact', label: 'Contact', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Header Banner */}
            <div className="pt-32 pb-12 bg-slate-900/50 border-b border-white/5">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="capitalize text-white">{currentPage}</span>
                    </div>

                    <h1 className="text-4xl font-bold text-white capitalize mb-2">{currentPage}</h1>
                    <p className="text-gray-400">Learn more about Tenbox and our mission.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[250px_1fr] gap-12">

                    {/* Left Sidebar: Navigation */}
                    <aside className="hidden lg:block">
                        <nav className="sticky top-24 space-y-1">
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider opacity-50">Company</h4>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${location.pathname === item.path
                                            ? 'bg-primary/10 text-primary font-medium'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="prose prose-invert prose-lg max-w-none min-h-[50vh]">
                        {children}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};
