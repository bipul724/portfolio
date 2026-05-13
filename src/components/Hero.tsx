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
            <div style={{
                maxWidth: '720px',
                position: 'relative',
                zIndex: 1,
            }}>
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

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
