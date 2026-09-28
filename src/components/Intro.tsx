'use client';

import { useEffect, useRef } from 'react';
import styles from './Intro.module.css';
import { profile } from '../data/content';

// First-visit intro: a counter and a mini deploy log run to 100, then the screen lifts
// like a curtain. Whether it plays at all is decided by the inline script in layout.tsx
// (once per session, never with reduced motion or on a #deep-link).

const STEPS = [
    { step: 'domain', detail: '' }, // filled with the real host on mount
    { step: 'dns', detail: 'records propagated' },
    { step: 'build', detail: 'next build — compiled' },
    { step: 'deploy', detail: 'edge network — live' },
];

const COUNT_MS = 1200;
const HOLD_MS = 120;
const HERO_DELAY_MS = 150; // let the curtain start moving before the hero rises
const LIFT_MS = 900; // keep in sync with the .overlay transition

export default function Intro() {
    const root = useRef<HTMLDivElement>(null);
    const counter = useRef<HTMLSpanElement>(null);
    const host = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const html = document.documentElement;
        const overlay = root.current;
        const count = counter.current;
        if (!overlay || !count || !html.classList.contains('intro')) return;

        if (host.current) host.current.textContent = window.location.host;
        const lines = [...overlay.querySelectorAll('li')];
        const timers: number[] = [];
        let frame = 0;
        let step = -1;
        let lifted = false;

        const render = (progress: number) => {
            count.textContent = String(Math.round(progress * 100)).padStart(3, '0');
            overlay.style.setProperty('--progress', progress.toFixed(4));
            const reached = Math.min(STEPS.length, Math.floor(progress * STEPS.length));
            if (reached === step) return;
            step = reached;
            lines.forEach((line, i) => {
                line.dataset.state = i < step ? 'done' : i === step ? 'active' : 'idle';
            });
        };

        const finish = () => html.classList.remove('intro', 'intro-hold', 'intro-lift');

        const lift = () => {
            if (lifted) return;
            lifted = true;
            cancelAnimationFrame(frame);
            render(1);
            html.classList.add('intro-lift');
            timers.push(
                window.setTimeout(() => html.classList.remove('intro-hold'), HERO_DELAY_MS),
                window.setTimeout(finish, LIFT_MS + 100)
            );
        };

        // The clock starts on the first painted frame, so a tab opened in the background
        // plays the whole intro once it's actually looked at.
        let start = 0;
        const tick = (now: number) => {
            start ||= now;
            const t = Math.min(1, (now - start) / COUNT_MS);
            render(1 - Math.pow(1 - t, 2)); // gentle ease-out: quick start without a long crawl to 100
            if (t < 1) frame = requestAnimationFrame(tick);
            else timers.push(window.setTimeout(lift, HOLD_MS));
        };
        frame = requestAnimationFrame(tick);

        // Any sign the visitor wants to get going skips straight to the reveal.
        const skipOn = ['pointerdown', 'keydown', 'wheel', 'touchmove'] as const;
        skipOn.forEach(type => window.addEventListener(type, lift, { passive: true }));

        return () => {
            cancelAnimationFrame(frame);
            timers.forEach(clearTimeout);
            skipOn.forEach(type => window.removeEventListener(type, lift));
        };
    }, []);

    return (
        <div ref={root} className={styles.overlay} aria-hidden="true">
            <div className={styles.top}>
                <span className={styles.brand}>
                    <span className={styles.mark}>BC</span>
                    {profile.name}
                </span>
                <span className={styles.tagline}>from domain to deploy.</span>
            </div>

            <ol className={styles.log}>
                {STEPS.map(({ step, detail }, i) => (
                    <li key={step} data-state="idle">
                        <span className={styles.status} />
                        <span className={styles.step}>{step}</span>
                        <span className={styles.detail}>{i === 0 ? <span ref={host} /> : detail}</span>
                    </li>
                ))}
            </ol>

            <div className={styles.bottom}>
                <span ref={counter} className={styles.count}>
                    000
                </span>
                <span className={styles.skip}>Click or press any key to skip</span>
            </div>

            <span className={styles.bar} />
        </div>
    );
}
