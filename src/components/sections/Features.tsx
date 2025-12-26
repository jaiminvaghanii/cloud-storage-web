import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Database, Shield, Zap, Globe, GitBranch, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
    {
        icon: Database,
        title: "Unlimited Storage",
        description: "Store everything you need without worrying about limits. Our decentralized network scales with you."
    },
    {
        icon: Shield,
        title: "Military-Grade Security",
        description: "AES-256 encryption and zero-knowledge architecture ensure your data remains truly yours."
    },
    {
        icon: Zap,
        title: "Real-time Sync",
        description: "Changes reflect instantly across all your devices with our lightning-fast websocket protocol."
    },
    {
        icon: Globe,
        title: "Share Anywhere",
        description: "Create secure, time-limited download links for anyone, even if they don't have an account."
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description: "Go back in time. We keep infinite version history of your files, so you never lose work."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Our dedicated team of cloud experts is always available to help you with any issues."
    }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Card
            className="group relative border-white/10 bg-gray-900/50 hover:border-white/20 transition-colors"
            onMouseMove={handleMouseMove}
            variant="glass"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">{feature.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
        </Card>
    );
};

export const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    >
                        Features that Defy Gravity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to manage your digital life, packed into a beautiful antigravity interface.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FeatureCard feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
