import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';

interface ViolationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ViolationModal = ({ isOpen, onClose }: ViolationModalProps) => {
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setEmail('');
            setDetails('');
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-50"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 text-amber-500">
                                <AlertTriangle className="w-5 h-5" />
                                <h3 className="font-bold text-lg text-white">Report Violation</h3>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-bold mb-2">Report Submitted</h4>
                                <p className="text-gray-400 text-sm">Thank you for helping keep Tenbox safe.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary/50"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Violation Details</label>
                                    <textarea
                                        required
                                        value={details}
                                        onChange={(e) => setDetails(e.target.value)}
                                        className="w-full h-32 bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary/50 resize-none"
                                        placeholder="Please describe the violation or provide links..."
                                    />
                                </div>
                                <div className="flex justify-end gap-3 pt-2">
                                    <Button type="button" variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
                                    <Button type="submit" size="sm" className="bg-amber-600 hover:bg-amber-700">Submit Report</Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
