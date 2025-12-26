import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />

            {/* Floating Shapes */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"
            />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                    Ready to elevate your <span className="text-cyan-400">cloud experience?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Join thousands of users who have already switched to the most secure, gravity-defying storage platform.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="shadow-lg shadow-primary/25 min-w-[150px]">
                        Get Started Free
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[150px]">
                        Contact Sales
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
