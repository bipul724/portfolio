export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 24px 80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background gradient orbs */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '800px',
                position: 'relative',
                zIndex: 1,
            }} className="animate-in">
                <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    marginBottom: '16px',
                    letterSpacing: '0.05em',
                }}>
                    Hi, my name is
                </p>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    marginBottom: '12px',
                }}>
                    Bipul Chamoli.
                </h1>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: 'var(--text-secondary)',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                }}>
                    I build things for the web.
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '540px',
                    marginBottom: '40px',
                }}>
                    Full Stack Developer with hands-on experience in frontend and backend development 
                    using <span style={{ color: 'var(--text-primary)' }}>React.js, Next.js, Node.js</span>, and REST APIs. 
                    Strong foundation in OOP, Data Structures & Algorithms, and database systems.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn-primary">
                        View My Work
                        <span style={{ fontSize: '1.1rem' }}>→</span>
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
