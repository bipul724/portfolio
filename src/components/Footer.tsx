'use client';

export default function Footer() {
    const socialLinks = [
        { label: 'Email', href: 'mailto:bipulchamoli45@gmail.com' },
        { label: 'GitHub', href: 'https://github.com/bipul724' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/Bipul_Chamoli' },
    ];

    return (
        <footer style={{
            padding: '40px 24px',
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                marginBottom: '20px',
            }}>
                {socialLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            transition: 'all var(--transition-fast)',
                            fontWeight: 500,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
            }}>
                Designed &amp; Built by Bipul Chamoli
            </p>
        </footer>
    );
}
