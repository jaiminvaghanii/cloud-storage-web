import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TableOfContents } from '../components/legal/TableOfContents';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChevronRight, Search, Printer, Shield, Flag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ViolationModal } from '../components/legal/ViolationModal';

export const LegalLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathStruct = location.pathname.split('/').filter(Boolean);
    const currentPage = pathStruct[pathStruct.length - 1] || 'legal';

    const menuItems = [
        { path: '/legal/terms', label: 'Terms of Service' },
        { path: '/legal/privacy', label: 'Privacy Policy' },
        { path: '/legal/dmca', label: 'DMCA Policy' },
        { path: '/legal/transparency', label: 'Transparency' },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <ViolationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Header Banner */}
            <div className="pt-32 pb-12 bg-slate-900/50 border-b border-white/5">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="capitalize text-white">{currentPage}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-white capitalize mb-2">{currentPage.replace('-', ' ')}</h1>
                            <p className="text-gray-400">Last updated: December 26, 2025</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="outline" size="sm" onClick={() => window.print()}>
                                <Printer className="w-4 h-4 mr-2" />
                                Print
                            </Button>
                            <Button variant="ghost" size="sm" className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10" onClick={() => setIsModalOpen(true)}>
                                <Flag className="w-4 h-4 mr-2" />
                                Report
                            </Button>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search legal docs..."
                                    className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full md:w-64"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[250px_1fr_250px] gap-12">

                    {/* Left Sidebar: Navigation */}
                    <aside className="hidden lg:block">
                        <nav className="sticky top-24 space-y-1">
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider opacity-50">Legal Documents</h4>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === item.path
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
                                <Shield className="w-8 h-8 text-primary mb-3" />
                                <h5 className="font-bold text-white text-sm mb-1">Need help?</h5>
                                <p className="text-xs text-gray-400 mb-3">Contact our legal team for specific inquiries.</p>
                                <a href="mailto:legal@tenbox.com" className="text-xs text-primary hover:underline">legal@tenbox.com</a>
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="prose prose-invert prose-lg max-w-none">
                        {children}
                    </main>

                    {/* Right Sidebar: TOC */}
                    <aside>
                        <TableOfContents />
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};
