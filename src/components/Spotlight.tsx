'use client';

import { useEffect, useRef } from 'react';

// One pointer listener drives both the page glow and the per-card `.spot` highlights.
export default function Spotlight() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = ref.current;
        if (!glow || !window.matchMedia('(pointer: fine)').matches) return;

        let frame = 0;
        let x = 0;
        let y = 0;
        let card: HTMLElement | null = null;

        const update = () => {
            frame = 0;
            glow.style.setProperty('--x', `${x}px`);
            glow.style.setProperty('--y', `${y}px`);
            if (card) {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', `${x - rect.left}px`);
                card.style.setProperty('--my', `${y - rect.top}px`);
            }
        };

        const onMove = (e: PointerEvent) => {
            x = e.clientX;
            y = e.clientY;
            card = e.target instanceof Element ? e.target.closest<HTMLElement>('.spot') : null;
            glow.classList.add('is-active');
            if (!frame) frame = requestAnimationFrame(update);
        };

        const onLeave = () => glow.classList.remove('is-active');

        window.addEventListener('pointermove', onMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            document.documentElement.removeEventListener('pointerleave', onLeave);
            cancelAnimationFrame(frame);
        };
    }, []);

    return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
