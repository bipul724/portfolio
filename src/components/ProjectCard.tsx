'use client';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    year: string;
    link?: string;
    github?: string;
    bullets: string[];
}

export default function ProjectCard({ title, tags, year, link, github, bullets }: ProjectProps) {
    return (
        <div className="card" style={{
            padding: '35px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            {/* Header row */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '26px',
            }}>
                {/* Folder icon */}
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all var(--transition-base)',
                }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        padding: '3px 11px',
                        borderRadius: '100px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                    }}>
                        {year}
                    </span>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'all var(--transition-fast)',
                                display: 'flex',
                                padding: '4px',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                            aria-label={`${title} GitHub repository`}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'all var(--transition-fast)',
                                display: 'flex',
                                padding: '4px',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                            aria-label={`${title} live demo`}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '18px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                transition: 'color var(--transition-fast)',
            }}>
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                    >
                        {title}
                    </a>
                ) : title}
            </h3>

            {/* Bullets */}
            <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '31px',
                flex: 1,
            }}>
                {bullets.map((bullet, i) => (
                    <li key={i} style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        paddingLeft: '20px',
                        position: 'relative',
                        marginBottom: '9px',
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--accent)',
                            fontSize: '0.65rem',
                            top: '8px',
                        }}>&#9656;</span>
                        {bullet}
                    </li>
                ))}
            </ul>

            {/* Tags */}
            <div style={{
                display: 'flex',
                gap: '7px',
                flexWrap: 'wrap',
                marginTop: 'auto',
                paddingTop: '4px',
                borderTop: '1px solid var(--border-color)',
            }}>
                <div style={{ width: '100%', height: '13px' }} />
                {tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}
