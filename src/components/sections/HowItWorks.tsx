import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { UserPlus, Upload, Share2, Users } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up",
        description: "Create your secure account in seconds. No credit card required."
    },
    {
        icon: Upload,
        title: "Upload",
        description: "Drag & drop files to your encrypted vault. Supports any file type."
    },
    {
        icon: Share2,
        title: "Share",
        description: "Generate secure, time-limited links with password protection."
    },
    {
        icon: Users,
        title: "Collaborate",
        description: "Invite your team to work on files in real-time with full version control."
    }
];

export const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="how-it-works" className="py-24 relative" ref={containerRef}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    >
                        How Tenbox Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Simple, secure, and seamless. From upload to share in three simple steps.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 hidden md:block -translate-x-1/2">
                        <motion.div
                            className="w-full bg-cyan-400 origin-top"
                            style={{ scaleY: scrollYProgress, height: '100%' }}
                        />
                    </div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`flex flex-col gap-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                                        <p className="text-gray-400 max-w-sm">{step.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                                        <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center group hover:bg-slate-800 transition-colors">
                                            <step.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10 animate-pulse-glow" />
                                </div>

                                <div className="flex-1 flex justify-center md:justify-start">
                                    <div className={`hidden md:block w-32 h-[1px] bg-white/10 ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
