import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { Cloud, Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

import { AppDownloadModal } from '../ui/AppDownloadModal';

export const Header = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                        <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Tenbox
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {['Features', 'How it Works', 'Pricing', 'Security'].map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm">Sign In</Button>
                    <Button size="sm" onClick={() => setIsDownloadModalOpen(true)}>Get App</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-4"
                >
                    {['Features', 'How it Works', 'Pricing', 'Security'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col gap-2 mt-4">
                        <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                        <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); setIsDownloadModalOpen(true); }}>Get App</Button>
                    </div>
                </motion.div>
            )}

            <AppDownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
        </motion.header>
    );
};
