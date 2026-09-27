'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react';
import styles from './Navbar.module.css';
import LocalTime from './LocalTime';
import { GitHubIcon, LeetCodeIcon } from './Icons';
import { navLinks, profile } from '../data/content';

const subscribeScroll = (onChange: () => void) => {
    window.addEventListener('scroll', onChange, { passive: true });
    return () => window.removeEventListener('scroll', onChange);
};
const getScrolled = () => window.scrollY > 24;
const getServerScrolled = () => false;

const menuLinks = [...navLinks, { label: 'Contact', href: '#contact' }];

export default function Navbar() {
    const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getServerScrolled);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const menuButton = useRef<HTMLButtonElement>(null);

    // Highlight whichever section is crossing the middle of the viewport.
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
            { rootMargin: '-45% 0px -50% 0px' }
        );
        document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return;
            setOpen(false);
            menuButton.current?.focus();
        };
        const desktop = window.matchMedia('(min-width: 861px)');
        const onBreakpoint = () => desktop.matches && setOpen(false);
        // The page behind the overlay is out of reach for keyboard and screen readers while it's open.
        const background = [document.getElementById('main'), document.querySelector('body > footer')];

        document.addEventListener('keydown', onKey);
        desktop.addEventListener('change', onBreakpoint);
        document.body.style.overflow = 'hidden';
        background.forEach(el => el?.setAttribute('inert', ''));
        return () => {
            document.removeEventListener('keydown', onKey);
            desktop.removeEventListener('change', onBreakpoint);
            document.body.style.overflow = '';
            background.forEach(el => el?.removeAttribute('inert'));
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
            <nav className={styles.nav} aria-label="Primary">
                <a href="#top" className={styles.brand} onClick={close}>
                    <span className={styles.mark} aria-hidden="true">BC</span>
                    <span className={styles.brandName}>{profile.name}</span>
                </a>

                <ul className={styles.links}>
                    {navLinks.map(link => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={isActive ? styles.active : undefined}
                                    aria-current={isActive ? 'location' : undefined}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className={styles.actions}>
                    <span className={styles.clock} title="My local time">
                        <LocalTime /> IST
                    </span>
                    <a href="#contact" className={styles.cta} onClick={close}>
                        Let&apos;s talk
                    </a>
                    <button
                        ref={menuButton}
                        type="button"
                        className={styles.menuButton}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen(o => !o)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            <div id="mobile-menu" className={`${styles.sheet} ${open ? styles.sheetOpen : ''}`} inert={!open}>
                <ul className={styles.sheetLinks}>
                    {menuLinks.map((link, i) => (
                        <li key={link.href} style={{ '--i': i } as CSSProperties}>
                            <a href={link.href} onClick={close}>
                                <span className={styles.sheetNum}>0{i + 1}</span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={styles.sheetFooter}>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <div className={styles.sheetSocials}>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <GitHubIcon width={20} height={20} />
                        </a>
                        <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                            <LeetCodeIcon width={20} height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
