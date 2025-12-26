import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedText } from '../ui/AnimatedText';
import { FloatingParticles } from '../ui/FloatingParticles';
import { Shield, HardDrive, Users, FileText, Folder, File } from 'lucide-react';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <FloatingParticles />

            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-cyan-400 font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Next Generation Cloud Storage
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <AnimatedText text="Tenbox," />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            <AnimatedText text="Defying Gravity" delay={0.2} />
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg">
                        Break free from limits with the world's most advanced decentralized storage. Zero-knowledge encryption, lightning speeds, and a design that floats above the rest.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <Button
                            size="lg"
                            className="shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Free
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Watch Demo
                        </Button>
                    </div>

                    <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                        {[
                            { label: 'Active Users', value: '50K+' },
                            { label: 'Data Secured', value: '10PB' },
                            { label: 'Uptime', value: '99.9%' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Floating Visual */}
                <motion.div
                    style={{ y: y2 }}
                    className="relative hidden lg:block"
                >
                    {/* Main Glass Card */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 1, 0, -1, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-20 glass-card p-8 rounded-3xl border border-white/20 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <HardDrive className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">My Cloud Drive</h3>
                                    <p className="text-xs text-gray-400">1.2 TB / 2 TB Used</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-green-500/50 flex items-center justify-center">
                                <span className="text-xs font-bold text-green-400">85%</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Project_Alpha_Specs.pdf', size: '2.4 MB', color: 'bg-red-500', icon: FileText },
                                { name: 'Marketing_Assets.zip', size: '156 MB', color: 'bg-yellow-500', icon: Folder },
                                { name: 'Q4_Financials.xlsx', size: '4.8 MB', color: 'bg-green-500', icon: File }
                            ].map((file, i) => (
                                <div key={i} className="h-16 rounded-xl bg-white/5 flex items-center px-4 gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className={`w-10 h-10 rounded-lg ${file.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <file.icon className={`w-5 h-5 ${file.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{file.name}</h4>
                                        <p className="text-xs text-gray-500">{file.size}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                                        <div className="w-1 h-1 bg-gray-500 rounded-full box-content border-l-[3px] border-r-[3px] border-transparent" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Elements behind */}
                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -top-10 -right-10 z-10 glass p-4 rounded-2xl w-48"
                    >
                        <div className="flex items-center gap-3">
                            <Shield className="text-green-400 w-5 h-5" />
                            <div>
                                <p className="text-xs font-bold">Encrypted</p>
                                <p className="text-[10px] text-gray-400">AES-256 Enabled</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-5 -left-5 z-30 glass p-4 rounded-2xl w-40"
                    >
                        <div className="flex items-center gap-3">
                            <Users className="text-purple-400 w-5 h-5" />
                            <div>
                                <p className="text-xs font-bold">Sharing</p>
                                <p className="text-[10px] text-gray-400">Active link</p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
