'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '176px 26px 132px',
            position: 'relative',
        }}>
            <div className="hero-container" style={{
                maxWidth: '1060px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '70px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
            }}>
                <div className="hero-text" style={{ maxWidth: '660px' }}>
                    {/* Status badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '11px',
                        padding: '8px 18px',
                        borderRadius: '100px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-card)',
                        marginBottom: '40px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            boxShadow: '0 0 9px var(--accent)',
                        }} />
                        <span style={{
                            fontFamily: 'var(--font-main)',
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.01em',
                        }}>
                            Open to opportunities
                        </span>
                    </div>

                    {/* Name */}
                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 400,
                        color: 'var(--accent)',
                        marginBottom: '15px',
                        letterSpacing: '0.02em',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                    }}>
                        Hi, my name is
                    </p>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        marginBottom: '13px',
                        color: 'var(--text-primary)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
                    }}>
                        Bipul Chamoli.
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: 'var(--text-muted)',
                        marginBottom: '31px',
                        letterSpacing: '-0.01em',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
                    }}>
                        I build things for the web.
                    </h2>

                    <p style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.75,
                        color: 'var(--text-secondary)',
                        maxWidth: '572px',
                        marginBottom: '48px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
                    }}>
                        Full Stack Developer specializing in building exceptional digital experiences.
                        Currently focused on creating accessible, performant applications with{' '}
                        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>React.js</span>,{' '}
                        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Next.js</span>, and{' '}
                        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Node.js</span>.
                    </p>

                    <div className="hero-buttons" style={{
                        display: 'flex',
                        gap: '18px',
                        flexWrap: 'wrap',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(11px)',
                        transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
                    }}>
                        <a href="#projects" className="btn-primary">
                            View My Work
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Photo */}
                <div className="hero-image-wrapper" style={{
                    position: 'relative',
                    width: '286px',
                    justifySelf: 'center',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(18px)',
                    transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
                }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-hover)',
                        transition: 'all var(--transition-base)',
                        boxShadow: 'var(--shadow-lg)',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--border-accent)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    >
                        <img
                            src="/bipul.jpg"
                            alt="Bipul Chamoli"
                            width={450}
                            height={450}
                            style={{
                                width: '100%',
                                display: 'block',
                                filter: 'grayscale(20%) contrast(1.05)',
                                transition: 'filter var(--transition-base)',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; }}
                            onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'; }}
                        />
                    </div>
                    {/* Decorative offset border */}
                    <div style={{
                        position: 'absolute',
                        top: '13px',
                        left: '13px',
                        right: '-13px',
                        bottom: '-13px',
                        border: '1px solid var(--border-accent)',
                        borderRadius: 'var(--radius-xl)',
                        zIndex: -1,
                        transition: 'all var(--transition-base)',
                        opacity: 0.5,
                    }} />
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .hero-container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 53px !important;
                    }
                    .hero-text {
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-image-wrapper {
                        order: -1;
                        width: 220px !important;
                    }
                    .hero-buttons {
                        justify-content: center;
                    }
                    .hero-text p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}</style>
        </section>
    );
}
