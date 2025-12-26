import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Product Designer",
        quote: "The antigravity interface isn't just a gimmick - it actually makes navigating deep folder structures intuitive and fun. Love it!",
        rating: 5
    },
    {
        name: "Marcus Rodriguez",
        role: "Startup Founder",
        quote: "Security was our #1 concern. CloudVault's zero-knowledge architecture gave us the peace of mind we needed to switch from Drive.",
        rating: 5
    },
    {
        name: "Elena K.",
        role: "Freelance Photographer",
        quote: "Sending large raw files to clients has never been this fast. The upload speeds are incredible, and the sharing links look professional.",
        rating: 5
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Loved by <span className="text-primary">Innovators</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <Card variant="glass" className="h-full hover:bg-white/5 transition-colors">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                        >
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
