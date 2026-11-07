import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { ArrowUpRight, GitHubIcon } from './Icons';
import type { Project } from '../data/content';

export default function ProjectCard({ project }: { project: Project }) {
    const { name, kicker, summary, highlights, stack, year, live, liveLabel = 'Live app', demoVideo, article, repo, image, award } =
        project;

    return (
        <article className={`${styles.card} spot`}>
            {/* Decorative duplicate of the first link below, so it's hidden from assistive tech.
                That's also why the image keeps alt="" rather than `project.imageAlt`. */}
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
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px"
                    placeholder="blur"
                />
            </a>

            <div className={styles.body}>
                <header className={styles.head}>
                    <h3 className={styles.name}>{name}</h3>
                    <span className={styles.year}>{year}</span>
                </header>
                <p className={styles.kicker}>{kicker}</p>
                {award && (
                    // The label starts with the visible text, so voice users can say what they see
                    <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.award}
                        aria-label={`Winner, ${award.title}, ${award.event} — ${name} winners announcement (opens in a new tab)`}
                    >
                        <span className={styles.awardKind}>Winner</span>
                        <span className={styles.awardText}>
                            {award.title} · {award.event} <ArrowUpRight />
                        </span>
                    </a>
                )}
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

                {/* aria-labels name the project, since "Live app" / "Source" repeat on every card */}
                <div className={styles.links}>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.link} ${styles.live}`}
                            aria-label={`${name} ${liveLabel.toLowerCase()} (opens in a new tab)`}
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
                            aria-label={`${name} demo video on YouTube (opens in a new tab)`}
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
                            aria-label={`${name} article on DEV (opens in a new tab)`}
                        >
                            Read article <ArrowUpRight />
                        </a>
                    )}
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`${name} source on GitHub (opens in a new tab)`}
                    >
                        <GitHubIcon /> Source
                    </a>
                </div>
            </div>
        </article>
    );
}
