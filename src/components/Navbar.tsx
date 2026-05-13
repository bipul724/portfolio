'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <Link href="/" style={{
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)'
            }}>
                Bipul Chamoli
            </Link>

            {/* Desktop Links */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
            }} className="desktop-nav">
                {navLinks.map(link => (
                    <Link
                        key={link.label}
                        href={link.href}
                        style={{
                            fontSize: '0.85rem',
                            fontWeight: 400,
                            color: 'var(--text-secondary)',
                            transition: 'color var(--transition-fast)',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                        {link.label}
                    </Link>
                ))}
                <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem', borderRadius: '100px' }}>
                    Hire Me
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-menu-btn"
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    flexDirection: 'column',
                    gap: '5px',
                }}
                aria-label="Toggle menu"
            >
                <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
                <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{
                    position: 'fixed',
                    top: '72px',
                    left: '16px',
                    right: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '32px 24px',
                    zIndex: 999,
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-secondary)',
                                transition: 'color var(--transition-fast)',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                        Hire Me
                    </a>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </nav>
    );
}
