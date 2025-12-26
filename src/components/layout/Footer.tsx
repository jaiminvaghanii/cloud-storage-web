import { Cloud, Github, Twitter, Linkedin, Disc as Discord } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
                            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-white">CloudVault</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            The next generation of cloud storage. Secure, fast, and beautiful. Built for the modern web with an antigravity design philosophy.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Discord].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Blog', 'Careers', 'Brand', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">© 2024 CloudVault Inc. All rights reserved.</p>

                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full pl-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-sm text-white placeholder:text-gray-500 outline-none w-48"
                        />
                        <Button size="sm" className="h-8 px-4 py-0 text-xs">Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
