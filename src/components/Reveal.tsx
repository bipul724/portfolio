'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            el.classList.add('visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className="reveal" style={{ height: '100%' }}>
            {children}
        </div>
    );
}
