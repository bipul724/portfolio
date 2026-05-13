export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '140px 24px 100px',
            position: 'relative',
        }}>
            <div className="hero-container" style={{
                maxWidth: '1000px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '80px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
            }}>
                <div className="hero-text" style={{ maxWidth: '640px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        borderRadius: '100px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-card)',
                        marginBottom: '32px',
                    }}>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--accent-light)',
                        }} />
                        <span style={{
                            fontFamily: 'var(--font-main)',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            color: 'var(--text-secondary)',
                        }}>
                            Available for opportunities
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                        color: 'var(--text-primary)',
                    }}>
                        Hi, I&apos;m Bipul Chamoli.
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: 'var(--text-secondary)',
                        marginBottom: '24px',
                        letterSpacing: '-0.01em',
                    }}>
                        I build reliable web applications.
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'var(--text-muted)',
                        maxWidth: '520px',
                        marginBottom: '40px',
                    }}>
                        Full Stack Developer with a focus on writing clean, scalable code.
                        I specialize in modern frontend and backend development using 
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}> React.js, Next.js, </span> and 
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}> Node.js</span>.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper" style={{
                    position: 'relative',
                    width: '280px',
                    justifySelf: 'center',
                }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)',
                        transition: 'all var(--transition-base)',
                        boxShadow: 'var(--shadow-lg)',
                    }}>
                        <img
                            src="/bipul.jpg"
                            alt="Bipul Chamoli"
                            style={{
                                width: '100%',
                                display: 'block',
                                filter: 'grayscale(15%)',
                                transition: 'filter var(--transition-base)',
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'var(--accent-subtle)',
                            transition: 'opacity var(--transition-base)',
                            opacity: 0,
                        }} />
                    </div>
                    {/* Decorative offset border */}
                    <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        right: '-16px',
                        bottom: '-16px',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-xl)',
                        zIndex: -1,
                        transition: 'all var(--transition-base)',
                    }} />
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .hero-container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 56px !important;
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
