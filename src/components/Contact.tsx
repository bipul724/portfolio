import styles from './Contact.module.css';
import Reveal from './Reveal';
import CopyEmail from './CopyEmail';
import { ArrowUpRight, GitHubIcon, LeetCodeIcon, PhoneIcon } from './Icons';
import { profile } from '../data/content';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
            <div className="container">
                <Reveal>
                    <p className="eyebrow">
                        <span className="eyebrow-num">05</span>
                        Contact
                    </p>
                    <h2 id="contact-title" className={styles.title}>
                        Let&apos;s build something <em>worth shipping.</em>
                    </h2>
                </Reveal>

                <Reveal delay={100}>
                    <p className={styles.lede}>
                        Open to new roles and freelance projects. Whether it&apos;s a job, a website for your business
                        or just a hello — my inbox is open.
                    </p>
                </Reveal>

                <Reveal delay={180}>
                    <div className={styles.emailRow}>
                        <a href={`mailto:${profile.email}`} className={styles.email}>
                            {profile.email}
                            <ArrowUpRight />
                        </a>
                        <CopyEmail email={profile.email} className="btn btn-ghost" label="Copy" />
                    </div>
                </Reveal>

                <Reveal delay={240}>
                    <ul className={styles.channels}>
                        <li>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon /> GitHub <ArrowUpRight className={styles.arrow} />
                            </a>
                        </li>
                        <li>
                            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                                <LeetCodeIcon /> LeetCode <ArrowUpRight className={styles.arrow} />
                            </a>
                        </li>
                        <li>
                            <a href={profile.phone.href}>
                                <PhoneIcon /> {profile.phone.display}
                            </a>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
