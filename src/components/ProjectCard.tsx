import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { ArrowUpRight, GitHubIcon } from './Icons';
import type { Project } from '../data/content';

export default function ProjectCard({ project }: { project: Project }) {
    const { name, kicker, summary, highlights, stack, year, live, repo, image } = project;

    return (
        <article className={`${styles.card} spot`}>
            {/* Decorative duplicate of the "Live" link below, so it's hidden from assistive tech */}
            <a
                href={live ?? repo}
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

                <div className={styles.links}>
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer" className="link-arrow">
                            Live app <ArrowUpRight />
                        </a>
                    )}
                    <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.repo}>
                        <GitHubIcon /> Source
                    </a>
                </div>
            </div>
        </article>
    );
}
