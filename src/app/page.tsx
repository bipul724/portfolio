import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

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
        description: 'Next.js, TypeScript, ShadCN UI, Neon (PostgreSQL), Better Auth',
        tags: ['Next.js', 'TypeScript', 'ShadCN UI', 'Neon', 'Better Auth'],
        year: '2024',
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
    'Programming Languages': ['Java', 'C++', 'JavaScript', 'TypeScript', 'Python (Basic)', 'SQL'],
    'Frontend Technologies': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'ShadCN/UI'],
    'Backend Technologies': ['Node.js', 'Express.js', 'RESTful APIs'],
    'Databases & ORMs': ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'NeonDB', 'Prisma'],
    'Auth & Platforms': ['Clerk', 'Better Auth', 'Git', 'GitHub', 'Vercel', 'AWS (Foundational)', 'Postman'],
};

const education = [
    {
        degree: 'B.Tech in Computer Science & Engineering',
        school: 'ABES Engineering College, Ghaziabad, India',
        period: '08/2023 – 07/2027',
        detail: 'CGPA: 8.5/10 (Absolute)',
    },
    {
        degree: 'Intermediate (Science Stream)',
        school: 'Saraf Public School, Khatima, Uttarakhand, India',
        period: '04/2020 – 03/2022',
        detail: 'CBSE, 96.4%',
    },
];

const achievements = [
    {
        title: 'LeetCode Problem Solving',
        description: 'Solved 400+ Data Structures and Algorithms problems on LeetCode, strengthening problem-solving and algorithmic skills.',
    },
    {
        title: 'Industry Certifications',
        description: 'Earned industry-recognized certifications from Cisco Networking Academy and Amazon Web Services (AWS).',
    },
];

export default function Home() {
    return (
        <main>
            <Hero />

            {/* About */}
            <section id="about" className="section">
                <h2 className="section-title">
                    <span className="number">01.</span> About Me
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '3fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                }}>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                    }}>
                        I&apos;m a Full Stack Developer currently pursuing my B.Tech in Computer Science at
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}> ABES Engineering College</span>. I have
                        hands-on experience building scalable full-stack applications using modern technologies like
                        React.js, Next.js, and Node.js. I&apos;m passionate about creating efficient, user-friendly web
                        experiences and constantly exploring new tools and frameworks.
                    </p>
                    <div className="about-image-wrapper" style={{
                        position: 'relative',
                        maxWidth: '200px',
                        justifySelf: 'center',
                    }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            border: '2px solid var(--border-hover)',
                            transition: 'all var(--transition-base)',
                        }}>
                            <img
                                src="/bipul.jpg"
                                alt="Bipul Chamoli"
                                style={{
                                    width: '100%',
                                    display: 'block',
                                    filter: 'grayscale(20%)',
                                    transition: 'filter var(--transition-base)',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), transparent)',
                                transition: 'opacity var(--transition-base)',
                            }} />
                        </div>
                        {/* Decorative offset border */}
                        <div style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            right: '-14px',
                            bottom: '-14px',
                            border: '2px solid var(--accent)',
                            borderRadius: 'var(--radius-lg)',
                            zIndex: -1,
                            transition: 'all var(--transition-base)',
                            opacity: 0.4,
                        }} />
                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        #about .section-title + div {
                            grid-template-columns: 1fr !important;
                        }
                        .about-image-wrapper {
                            order: -1;
                            max-width: 160px !important;
                        }
                    }
                `}</style>
            </section>

            {/* Education */}
            <section className="section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                    <span className="number">02.</span> Education
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {education.map((edu, i) => (
                        <div key={i} className="glass-card" style={{ padding: '28px 32px' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '8px',
                            }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{edu.degree}</h3>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent)',
                                }}>
                                    {edu.period}
                                </span>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                {edu.school}
                            </p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                {edu.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                    <span className="number">03.</span> Technical Skills
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                }}>
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="glass-card" style={{ padding: '24px 28px' }}>
                            <h3 style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                color: 'var(--accent)',
                                marginBottom: '16px',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {items.map(item => (
                                    <span key={item} className="tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                    <span className="number">04.</span> Projects
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section id="achievements" className="section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">
                    <span className="number">05.</span> Achievements
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {achievements.map((a, i) => (
                        <div key={i} className="glass-card" style={{ padding: '28px 32px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>
                                {a.title}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                {a.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    marginBottom: '16px',
                }}>
                    06. What&apos;s Next?
                </p>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 800,
                    marginBottom: '20px',
                    letterSpacing: '-0.02em',
                }}>
                    Get In Touch
                </h2>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '500px',
                    margin: '0 auto 40px',
                    lineHeight: 1.7,
                }}>
                    I&apos;m currently looking for opportunities to work on exciting projects. Whether you have a question
                    or just want to say hi, feel free to reach out!
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:bipulchamoli45@gmail.com" className="btn-primary">
                        Say Hello
                        <span>→</span>
                    </a>
                    <a href="https://github.com/bipul724" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        GitHub
                    </a>
                    <a href="https://leetcode.com/u/Bipul_Chamoli" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        LeetCode
                    </a>
                </div>
                <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginTop: '24px',
                }}>
                    bipulchamoli45@gmail.com · 9149199508
                </p>
            </section>
        </main>
    );
}
