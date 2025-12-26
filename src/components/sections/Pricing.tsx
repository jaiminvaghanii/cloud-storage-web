import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const plans = [
    {
        name: "Free",
        price: { monthly: 0, annual: 0 },
        features: ["5GB Secure Storage", "Basic Sharing", "2 Devices", "Community Support"],
        cta: "Start Free",
        popular: false
    },
    {
        name: "Pro",
        price: { monthly: 9.99, annual: 99 },
        features: ["1TB Secure Storage", "Advanced Sharing Controls", "Unlimited Devices", "Priority Support", "Version History (30 days)"],
        cta: "Start 7-Day Trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: { monthly: 24.99, annual: 249 },
        features: ["Unlimited Storage", "SSO & Admin Controls", "Audit Logs", "24/7 Phone Support", "Unlimited Version History"],
        cta: "Contact Sales",
        popular: false
    }
];

export const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Simple, Transparent Pricing
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-14 h-7 bg-white/10 rounded-full relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                className="w-5 h-5 bg-primary rounded-full absolute top-1"
                                animate={{ left: isAnnual ? 'calc(100% - 1.5rem)' : '0.25rem' }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-gray-400'}`}>
                            Annual <span className="text-primary text-xs font-normal">(Save 17%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                variant={plan.popular ? 'neon' : 'glass'}
                                className={`h-full relative ${plan.popular ? 'scale-105 z-10' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-b-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="p-4">
                                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                                        <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <span className="bg-primary/20 rounded-full p-1">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        variant={plan.popular ? 'primary' : 'outline'}
                                        className="w-full"
                                    >
                                        {plan.cta}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
