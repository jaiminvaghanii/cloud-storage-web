import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Server, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';

const securityFeatures = [
    "End-to-End Encryption (AES-256)",
    "Zero-Knowledge Architecture",
    "GDPR & CCPA Compliant",
    "SOC 2 Type II Certified",
    "Two-Factor Authentication",
    "Ransomware Protection"
];

const badges = [
    { name: "ISO 27001", color: "bg-blue-500" },
    { name: "SOC 2", color: "bg-green-500" },
    { name: "GDPR", color: "bg-purple-500" },
    { name: "HIPAA", color: "bg-red-500" }
];

export const Security = () => {
    return (
        <section id="security" className="py-24 relative">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-cyan-400 font-medium mb-4">
                        <Shield className="w-5 h-5" />
                        <span>Uncompromised Security</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
                        Your secrets remain <span className="text-secondary">yours alone.</span>
                    </h2>

                    <p className="text-gray-400 mb-8 text-lg">
                        We don't sell your data because we can't see it. Our zero-knowledge architecture means you hold the only keys to your kingdom.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {securityFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Visuals */}
                <div className="relative">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <Card variant="glass" className="p-8 border-cyan-500/30 shadow-[0_0_50px_rgba(8,145,178,0.2)]">
                            <div className="flex justify-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                    <Lock className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-green-400"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    />
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Encryption Status</span>
                                    <span className="text-green-400 font-bold">Secure</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-white/5 rounded-lg p-4 text-center">
                                    <EyeOff className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-400">No Tracking</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 text-center">
                                    <Server className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-400">Decentralized</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Floating Badges */}
                    {badges.map((badge, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${badge.color} px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg z-20`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                            style={{
                                top: `${(i + 1) * 20}%`,
                                right: i % 2 === 0 ? '-20px' : 'auto',
                                left: i % 2 !== 0 ? '-20px' : 'auto',
                            }}
                        >
                            {badge.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
