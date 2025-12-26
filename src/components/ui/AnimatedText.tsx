import { motion, type Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn('overflow-hidden flex flex-wrap', className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-2">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
