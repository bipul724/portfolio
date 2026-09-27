import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './Hero.module.css';
import CopyEmail from './CopyEmail';
import { ArrowDown, ArrowUpRight } from './Icons';
import { featuredWork, profile } from '../data/content';
import portrait from '../../public/bipul.jpg';

const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero() {
    const [sagekite, homesquare] = featuredWork;

    return (
        <section id="top" className={styles.hero} aria-label="Introduction">
            <div className={`container ${styles.grid}`}>
                <div className={styles.copy}>
                    <p className={`${styles.status} ${styles.rise}`} style={step(0)}>
                        <span className="pulse" aria-hidden="true" />
                        {profile.status}
                    </p>

                    <h1 className={`${styles.title} ${styles.rise}`} style={step(1)}>
                        <span className={styles.name}>{profile.name}</span> ships production websites and AI
                        products — <em>from domain to deploy.</em>
                    </h1>

                    <p className={`${styles.lede} ${styles.rise}`} style={step(2)}>
                        Full-stack engineer working in Next.js, TypeScript and Node. I&apos;m interning at GHL
                        Scale Up, where I built{' '}
                        <a href={sagekite.url} target="_blank" rel="noopener noreferrer">
                            {sagekite.domain}
                        </a>{' '}
                        from scratch — and I freelance, most recently{' '}
                        <a href={homesquare.url} target="_blank" rel="noopener noreferrer">
                            {homesquare.domain}
                        </a>
                        , from the first commit to the DNS records.
                    </p>

                    <div className={`${styles.actions} ${styles.rise}`} style={step(3)}>
                        <a href="#work" className="btn btn-primary">
                            See selected work <ArrowDown />
                        </a>
                        <CopyEmail email={profile.email} className="btn btn-ghost" />
                    </div>

                    <div className={`${styles.live} ${styles.rise}`} style={step(4)}>
                        <span className={styles.liveLabel}>Live in production</span>
                        <ul className={styles.liveList}>
                            {featuredWork.map(work => (
                                <li key={work.domain}>
                                    <a href={work.url} target="_blank" rel="noopener noreferrer" className={styles.liveChip}>
                                        <span className={styles.liveDot} aria-hidden="true" />
                                        {work.domain}
                                        <ArrowUpRight />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.photoWrap}>
                    <figure className={styles.polaroid}>
                        <div className={styles.photo}>
                            <Image
                                src={portrait}
                                alt="Bipul Chamoli in front of a mountain waterfall, arms stretched wide"
                                sizes="(max-width: 900px) 260px, 320px"
                                placeholder="blur"
                                preload
                            />
                        </div>
                        <figcaption>recharging between deploys</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
