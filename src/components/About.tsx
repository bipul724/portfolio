import styles from './About.module.css';
import Reveal from './Reveal';
import LocalTime from './LocalTime';
import { ArrowUpRight, CheckIcon, LeetCodeIcon } from './Icons';
import { certifications, featuredWork, profile, skills } from '../data/content';

export default function About() {
    const sagekite = featuredWork[0];

    return (
        <div className={styles.bento}>
            <Reveal className={`${styles.cell} ${styles.bio}`}>
                <div className={`${styles.card} spot`}>
                    <p className={styles.label}>Hello</p>
                    <div className={styles.bioText}>
                        <p>
                            I&apos;m Bipul — a full-stack engineer and <strong>Computer Science undergrad</strong> at
                            ABES Engineering College, graduating in 2027.
                        </p>
                        <p>
                            I like owning the whole path from idea to production: the interface, the API, the
                            database — and the unglamorous parts too, like <strong>domains, DNS records and deploys</strong>.
                        </p>
                        <p>
                            Lately that means building {sagekite.domain} at GHL Scale Up, and AI products on the side:
                            multi-agent pipelines, real-time collaboration and event-driven backends.
                        </p>
                    </div>
                </div>
            </Reveal>

            <Reveal className={styles.cell} delay={60}>
                <div className={`${styles.card} spot`}>
                    <p className={styles.label}>
                        <span className="pulse" aria-hidden="true" /> Now
                    </p>
                    <div>
                        <p className={styles.lead}>Web Developer Intern at GHL Scale Up</p>
                        <p className={styles.muted}>Most recently shipped {sagekite.domain} — solo, from scratch.</p>
                    </div>
                </div>
            </Reveal>

            <Reveal className={styles.cell} delay={120}>
                <div className={`${styles.card} spot`}>
                    <p className={styles.label}>Local time</p>
                    <div>
                        <p className={styles.clock}>
                            <LocalTime />
                        </p>
                        <p className={styles.muted}>IST · UTC+5:30 · India</p>
                    </div>
                </div>
            </Reveal>

            <Reveal className={styles.cell} delay={60}>
                <a
                    href={profile.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card} ${styles.linkCard} spot`}
                >
                    <p className={styles.label}>
                        <LeetCodeIcon width={13} height={13} /> LeetCode
                    </p>
                    <div>
                        <p className={styles.stat}>
                            400<span>+</span>
                        </p>
                        <p className={styles.muted}>DSA problems solved</p>
                    </div>
                    <ArrowUpRight className={styles.corner} />
                </a>
            </Reveal>

            <Reveal className={styles.cell} delay={120}>
                <div className={`${styles.card} spot`}>
                    <p className={styles.label}>Certified by</p>
                    <ul className={styles.certs}>
                        {certifications.map(cert => (
                            <li key={cert}>
                                <CheckIcon />
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>

            <Reveal className={`${styles.cell} ${styles.toolbox}`}>
                <div className={`${styles.card} spot`}>
                    <p className={styles.label}>Toolbox</p>
                    <dl className={styles.skills}>
                        {Object.entries(skills).map(([group, items]) => (
                            <div key={group}>
                                <dt>{group}</dt>
                                <dd>{items.join(' · ')}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Reveal>

            <Reveal className={`${styles.cell} ${styles.site}`} delay={60}>
                <a
                    href={profile.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card} ${styles.linkCard} spot`}
                >
                    <p className={styles.label}>This site</p>
                    <div>
                        <p className={styles.lead}>Built from scratch.</p>
                        <p className={styles.muted}>Next.js 16 · React 19 · TypeScript · hand-written CSS · Vercel</p>
                    </div>
                    <span className="link-arrow">
                        View source <ArrowUpRight />
                    </span>
                </a>
            </Reveal>
        </div>
    );
}
