import type { CSSProperties } from 'react';
import styles from './CaseStudy.module.css';
import BrowserFrame from './BrowserFrame';
import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';
import type { CaseStudy as CaseStudyData } from '../data/content';

interface CaseStudyProps {
    work: CaseStudyData;
    index: number;
}

export default function CaseStudy({ work, index }: CaseStudyProps) {
    const titleId = `${work.domain.replace(/\W+/g, '-')}-title`;

    return (
        <article className={styles.study} aria-labelledby={titleId}>
            <Reveal>
                <header className={styles.head}>
                    <div>
                        <p className={styles.meta}>
                            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                            <span>{work.context}</span>
                            <span aria-hidden="true">·</span>
                            <span>{work.period}</span>
                        </p>
                        <h3 id={titleId} className={styles.name}>
                            {work.name}
                        </h3>
                    </div>
                    <div className={styles.summary}>
                        <p>{work.summary}</p>
                        <a href={work.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                            Visit {work.domain} <ArrowUpRight />
                        </a>
                    </div>
                </header>
            </Reveal>

            <Reveal delay={80}>
                <BrowserFrame url={work.url} domain={work.domain} shot={work.shot} />
            </Reveal>

            <Reveal delay={80}>
                <div className={styles.details}>
                    <div>
                        <h4 className={styles.label}>What I did</h4>
                        <ul className={styles.highlights}>
                            {work.highlights.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.aside}>
                        {work.stats && (
                            <dl className={styles.stats}>
                                {work.stats.map(stat => (
                                    <div key={stat.label}>
                                        <dt>{stat.label}</dt>
                                        <dd>{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}

                        {work.deployLog && (
                            <figure className={styles.log}>
                                <figcaption className={styles.logBar}>
                                    <span>deploy.log</span>
                                    <span className={styles.logLive}>
                                        <span className="pulse" aria-hidden="true" /> live
                                    </span>
                                </figcaption>
                                <ol className={styles.logLines}>
                                    {work.deployLog.map((line, i) => (
                                        <li key={line.step} style={{ '--line': i } as CSSProperties}>
                                            <span className={styles.logCheck} aria-hidden="true">✓</span>
                                            <span className={styles.logStep}>{line.step}</span>
                                            <span className={styles.logDetail}>{line.detail}</span>
                                        </li>
                                    ))}
                                </ol>
                            </figure>
                        )}

                        <div>
                            <h4 className={styles.label}>Stack</h4>
                            <ul className="tags">
                                {work.stack.map(tech => (
                                    <li key={tech} className="tag">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Reveal>
        </article>
    );
}
