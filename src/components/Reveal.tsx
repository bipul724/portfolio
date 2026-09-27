'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className ? `reveal ${className}` : 'reveal'}
            style={{ '--delay': `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}
