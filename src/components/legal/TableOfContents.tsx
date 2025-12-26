import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const TableOfContents = () => {
    const location = useLocation();
    const [activeId, setActiveId] = useState<string>('');
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

    useEffect(() => {
        // Parse headings from the main content area
        const elements = Array.from(document.querySelectorAll('h2, h3'));
        const items = elements.map((elem) => ({
            id: elem.id,
            text: elem.textContent || '',
            level: parseInt(elem.tagName.substring(1)),
        }));
        setHeadings(items);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -60% 0px' }
        );

        elements.forEach((elem) => observer.observe(elem));
        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto hidden lg:block w-64 pr-4">
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider opacity-50">On this page</h4>
            <ul className="space-y-2 border-l border-white/10">
                {headings.map((heading) => (
                    <li key={heading.id} className={cn("pl-4 relative", heading.level === 3 && "pl-8")}>
                        {activeId === heading.id && (
                            <motion.div
                                layoutId="toc-indicator"
                                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary"
                            />
                        )}
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                "block text-sm transition-colors duration-200",
                                activeId === heading.id ? "text-primary font-medium" : "text-gray-400 hover:text-white"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
