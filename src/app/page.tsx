import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const projects = [
    {
        title: 'HireNext',
        description: 'Next.js, Supabase, Vapi, AI',
        tags: ['Next.js', 'Supabase', 'Vapi', 'AI'],
        year: '2024',
        link: 'https://hire-next-blush.vercel.app/',
        github: 'https://github.com/bipul724/HireNext',
        bullets: [
            'Developed an AI recruiter platform with voice-based interviews and automated feedback',
            'Integrated AI-generated interview questions and real-time voice agent using Vapi',
            'Implemented authentication, interview scheduling, and candidate analytics dashboard',
        ],
    },
    {
        title: 'ZenCash',
        description: 'Next.js, Prisma, PostgreSQL, Inngest, Arcjet, AI',
        tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Inngest', 'AI'],
        year: '2024',
        link: 'https://zen-cash-oevg.vercel.app/',
        github: 'https://github.com/bipul724/ZenCash',
        bullets: [
            'Developed a full-stack finance tracking platform with authentication, transactions, and analytics',
            'Automated recurring transactions, budget alerts, and monthly reports using cron jobs',
            'Integrated AI for receipt scanning and expense insights with secure APIs and rate limiting',
        ],
    },
    {
        title: 'Taskflow',
        description: 'Next.js, TypeScript, ShadCN UI, Neon, Better Auth',
        tags: ['Next.js', 'TypeScript', 'ShadCN UI', 'Neon', 'Better Auth'],
        year: '2024',
        link: 'https://taskflow-sandy-beta.vercel.app/',
        github: 'https://github.com/bipul724/taskflow',
        bullets: [
            'Built a SaaS task-management platform with boards, columns, and tasks using Next.js',
            'Implemented secure authentication and session handling using Better Auth',
            'Developed Kanban boards with drag-and-drop task reordering and real-time UI updates',
            'Added search, filters, and free-tier feature limits for a production-ready SaaS experience',
        ],
    },
];

const skills = {
    'Languages': ['Java', 'C++', 'JavaScript', 'TypeScript', 'Python (Basic)', 'SQL'],
    'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'ShadCN/UI'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'NeonDB', 'Prisma'],
    'Tools & Platforms': ['Clerk', 'Better Auth', 'Git', 'GitHub', 'Vercel', 'AWS (Foundational)', 'Postman'],
};

const education = [
    {
        degree: 'B.Tech in Computer Science & Engineering',
        school: 'ABES Engineering College, Ghaziabad',
        period: '2023 – 2027',
        detail: 'CGPA: 8.5 / 10',
    },
    {
        degree: 'Intermediate (Science Stream)',
        school: 'Saraf Public School, Khatima, Uttarakhand',
        period: '2020 – 2022',
        detail: 'CBSE · 96.4%',
    },
];

const achievements = [
    {
        title: 'LeetCode Problem Solving',
        description: 'Solved 400+ Data Structures and Algorithms problems on LeetCode, strengthening problem-solving and algorithmic skills.',
        icon: '⚡',
    },
    {
        title: 'Industry Certifications',
        description: 'Earned industry-recognized certifications from Cisco Networking Academy and Amazon Web Services (AWS).',
        icon: '🏆',
    },
];

export default function Home() {
    return (
        <main>
            <Hero />

            {/* About */}
            <section id="about" className="section">
                <Reveal>
                    <h2 className="section-title">
                        <span className="number">01.</span> About Me
                    </h2>
                </Reveal>
                <Reveal delay={100}>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        maxWidth: '748px',
                    }}>
                        I&apos;m a Full Stack Developer currently pursuing my B.Tech in Computer Science at{' '}
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                            ABES Engineering College
                        </span>. I have hands-on experience building scalable full-stack applications
                        using modern technologies like React.js, Next.js, and Node.js. I&apos;m passionate
                        about creating efficient, user-friendly web experiences and constantly exploring
                        new tools and frameworks.
                    </p>
                </Reveal>
            </section>

            {/* Education */}
            <section className="section" style={{ paddingTop: 0 }}>
                <Reveal>
                    <h2 className="section-title">
                        <span className="number">02.</span> Education
                    </h2>
                </Reveal>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                    {education.map((edu, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="card" style={{ padding: '31px 35px' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: '9px',
                                    marginBottom: '11px',
                                }}>
                                    <h3 style={{
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.01em',
                                    }}>
                                        {edu.degree}
                                    </h3>
                                    <span style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.72rem',
                                        color: 'var(--text-muted)',
                                        padding: '3px 13px',
                                        borderRadius: '100px',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--border-color)',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {edu.period}
                                    </span>
                                </div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '7px',
                                }}>
                                    {edu.school}
                                </p>
                                <p style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-muted)',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 500,
                                }}>
                                    {edu.detail}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section" style={{ paddingTop: 0 }}>
                <Reveal>
                    <h2 className="section-title">
                        <span className="number">03.</span> Technical Skills
                    </h2>
                </Reveal>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(286px, 1fr))',
                    gap: '13px',
                }}>
                    {Object.entries(skills).map(([category, items], i) => (
                        <Reveal key={category} delay={i * 80}>
                            <div className="card" style={{
                                padding: '26px 31px',
                                height: '100%',
                            }}>
                                <h3 style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.12em',
                                    color: 'var(--accent)',
                                    marginBottom: '18px',
                                    fontFamily: 'var(--font-mono)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '9px',
                                }}>
                                    <span style={{
                                        width: '18px',
                                        height: '1px',
                                        background: 'var(--accent)',
                                        opacity: 0.5,
                                    }} />
                                    {category}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    gap: '7px',
                                    flexWrap: 'wrap',
                                }}>
                                    {items.map(item => (
                                        <span key={item} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section" style={{ paddingTop: 0 }}>
                <Reveal>
                    <h2 className="section-title">
                        <span className="number">04.</span> Projects
                    </h2>
                </Reveal>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                    gap: '18px',
                }}>
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 120}>
                            <ProjectCard {...project} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section id="achievements" className="section" style={{ paddingTop: 0 }}>
                <Reveal>
                    <h2 className="section-title">
                        <span className="number">05.</span> Achievements
                    </h2>
                </Reveal>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(308px, 1fr))',
                    gap: '13px',
                }}>
                    {achievements.map((a, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="card" style={{
                                padding: '31px 35px',
                                height: '100%',
                            }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '18px',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--warm-subtle)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--border-color)',
                                }}>
                                    {a.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: 600,
                                    marginBottom: '11px',
                                    color: 'var(--text-primary)',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {a.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                }}>
                                    {a.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section" style={{
                textAlign: 'center',
                paddingTop: 'var(--space-xl)',
                paddingBottom: 'var(--space-4xl)',
            }}>
                <Reveal>
                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--accent)',
                        marginBottom: '22px',
                        letterSpacing: '0.04em',
                    }}>
                        06. What&apos;s Next?
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        fontWeight: 700,
                        marginBottom: '22px',
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)',
                    }}>
                        Get In Touch
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '528px',
                        margin: '0 auto 48px',
                        lineHeight: 1.8,
                    }}>
                        I&apos;m currently looking for opportunities to work on exciting projects.
                        Whether you have a question or just want to say hi, my inbox is always open.
                    </p>
                </Reveal>
                <Reveal delay={300}>
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary">
                            Say Hello
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/bipul724"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://leetcode.com/u/Bipul_Chamoli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            LeetCode
                        </a>
                    </div>
                </Reveal>
                <Reveal delay={350}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '26px',
                        marginTop: '40px',
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            bipulchamoli45@gmail.com
                        </span>
                        <span style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'var(--text-faint)',
                        }} />
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.02em',
                        }}>
                            9149199508
                        </span>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}
