'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
        }}>
            <Link href="/" style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: '0 0 12px var(--accent)',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                }} />
                Bipul Chamoli
            </Link>

            {/* Desktop Links */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
            }} className="desktop-nav">
                {navLinks.map(link => (
                    <Link
                        key={link.label}
                        href={link.href}
                        style={{
                            fontSize: '0.875rem',
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
                <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
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
                <span style={{ width: '24px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
                <span style={{ width: '24px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ width: '24px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{
                    position: 'fixed',
                    top: '64px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(10, 10, 15, 0.95)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                    zIndex: 999,
                }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                color: 'var(--text-secondary)',
                                transition: 'color var(--transition-fast)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary">
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
