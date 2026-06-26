'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
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

    // Close mobile menu on Escape
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [mobileOpen, handleKeyDown]);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
            <Link href="/" style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                color: 'var(--text-primary)',
            }}>
                <span style={{
                    width: '31px',
                    height: '31px',
                    borderRadius: '9px',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--bg-primary)',
                    letterSpacing: '0',
                }}>
                    BC
                </span>
                <span className="nav-name">Bipul Chamoli</span>
            </Link>

            {/* Desktop Links */}
            <div className="desktop-nav" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '35px',
            }}>
                {navLinks.map(link => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="nav-link"
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href="mailto:bipulchamoli45@gmail.com"
                    className="btn-primary"
                    style={{
                        padding: '9px 22px',
                        fontSize: '0.8rem',
                        borderRadius: '100px',
                    }}
                >
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
                    padding: '9px',
                    flexDirection: 'column',
                    gap: '6px',
                    position: 'relative',
                    zIndex: 1001,
                }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
            >
                <span style={{
                    width: '22px',
                    height: '1.5px',
                    background: 'var(--text-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: mobileOpen ? 'rotate(45deg) translateY(7.5px)' : 'none',
                }} />
                <span style={{
                    width: '22px',
                    height: '1.5px',
                    background: 'var(--text-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    opacity: mobileOpen ? 0 : 1,
                }} />
                <span style={{
                    width: '22px',
                    height: '1.5px',
                    background: 'var(--text-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: mobileOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none',
                }} />
            </button>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <>
                    <div
                        onClick={() => setMobileOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.6)',
                            zIndex: 998,
                        }}
                        aria-hidden="true"
                    />
                    <div style={{
                        position: 'fixed',
                        top: '84px',
                        left: '18px',
                        right: '18px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '13px',
                        zIndex: 999,
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                    }}>
                        {navLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)',
                                    transition: 'all var(--transition-fast)',
                                    padding: '13px 22px',
                                    width: '100%',
                                    textAlign: 'center',
                                    borderRadius: 'var(--radius-md)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.background = 'var(--accent-subtle)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div style={{ width: '100%', height: '1px', background: 'var(--border-color)', margin: '4px 0' }} />
                        <a
                            href="mailto:bipulchamoli45@gmail.com"
                            className="btn-primary"
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                justifyContent: 'center',
                                marginTop: '4px',
                                borderRadius: 'var(--radius-md)',
                            }}
                        >
                            Hire Me
                        </a>
                    </div>
                </>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
                @media (max-width: 480px) {
                    .nav-name { display: none; }
                }
            `}</style>
        </nav>
    );
}
