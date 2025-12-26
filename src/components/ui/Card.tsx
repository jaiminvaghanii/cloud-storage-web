import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'neon';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'glass', children, ...props }, ref) => {
        const variants = {
            default: 'bg-slate-800 border border-slate-700',
            glass: 'glass-card text-white',
            neon: 'bg-black border border-primary/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]',
        };

        return (
            <motion.div
                ref={ref}
                className={cn('rounded-2xl p-6 overflow-hidden', variants[variant], className)}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';
