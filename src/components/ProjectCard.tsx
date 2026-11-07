import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './ProjectCard.module.css';
import { ArrowUpRight, GitHubIcon } from './Icons';
import type { Project } from '../data/content';

interface ProjectCardProps {
    project: Project;
    /** Full-width block above the screenshot and text (used by the Achievements cards). */
    header?: ReactNode;
    /** Heading level for the project name: h3 in Projects, h4 under an award heading. */
    headingLevel?: 'h3' | 'h4';
    /** Extra link shown first in the link row. */
    leadLink?: { href: string; label: string; ariaLabel: string };
}

export default function ProjectCard({ project, header, headingLevel = 'h3', leadLink }: ProjectCardProps) {
    const { name, kicker, summary, highlights, stack, year, live, liveLabel = 'Live app', demoVideo, article, repo, image } =
        project;
    const Heading = headingLevel;

    const thumb = (
        // Decorative duplicate of the first link below, so it's hidden from assistive tech.
        // That's also why the image keeps alt="" rather than `project.imageAlt`.
        <a
            href={live ?? demoVideo ?? repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.thumb}
            tabIndex={-1}
            aria-hidden="true"
        >
            <Image
                src={image}
                alt=""
                sizes={
                    header
                        ? '(max-width: 700px) 100vw, 560px'
                        : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px'
                }
                placeholder="blur"
            />
        </a>
    );

    const body = (
        <div className={styles.body}>
            <header className={styles.head}>
                <Heading className={styles.name}>{name}</Heading>
                <span className={styles.year}>{year}</span>
            </header>
            <p className={styles.kicker}>{kicker}</p>
            <p className={styles.summary}>{summary}</p>

            <ul className={styles.highlights}>
                {highlights.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <ul className={`tags ${styles.tags}`}>
                {stack.map(tech => (
                    <li key={tech} className="tag">
                        {tech}
                    </li>
                ))}
            </ul>

            {/* Each label starts with the visible text, then names the project, since the texts repeat on every card */}
            <div className={styles.links}>
                {leadLink && (
                    <a
                        href={leadLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.live}`}
                        aria-label={leadLink.ariaLabel}
                    >
                        {leadLink.label} <ArrowUpRight />
                    </a>
                )}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.live}`}
                        aria-label={`${liveLabel} — ${name} (opens in a new tab)`}
                    >
                        {liveLabel} <ArrowUpRight />
                    </a>
                )}
                {demoVideo && (
                    <a
                        href={demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`Demo video — ${name}, on YouTube (opens in a new tab)`}
                    >
                        Demo video <ArrowUpRight />
                    </a>
                )}
                {article && (
                    <a
                        href={article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`Read article — ${name}, on DEV (opens in a new tab)`}
                    >
                        Read article <ArrowUpRight />
                    </a>
                )}
                <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`Source — ${name}, on GitHub (opens in a new tab)`}
                >
                    <GitHubIcon /> Source
                </a>
            </div>
        </div>
    );

    if (!header) {
        return (
            <article className={`${styles.card} spot`}>
                {thumb}
                {body}
            </article>
        );
    }

    return (
        <article className={`${styles.card} ${styles.feature} spot`}>
            <div className={styles.header}>{header}</div>
            <div className={styles.main}>
                {thumb}
                {body}
            </div>
        </article>
    );
}
