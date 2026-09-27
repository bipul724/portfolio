import styles from './Timeline.module.css';
import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';
import { timeline } from '../data/content';

export default function Timeline() {
    return (
        <ol className={styles.list}>
            {timeline.map((entry, i) => (
                <li key={`${entry.org}-${entry.title}`} className={styles.item}>
                    <Reveal delay={i * 70}>
                        <div className={styles.row}>
                            <div className={styles.period}>
                                <span>{entry.period}</span>
                                {entry.kind === 'education' && <span className={styles.kind}>Education</span>}
                            </div>

                            <div>
                                <h3 className={styles.title}>
                                    {entry.title}
                                    <span className={styles.at}> · </span>
                                    {entry.url ? (
                                        <a href={entry.url} target="_blank" rel="noopener noreferrer" className={styles.org}>
                                            {entry.org}
                                            <ArrowUpRight />
                                        </a>
                                    ) : (
                                        <span className={styles.org}>{entry.org}</span>
                                    )}
                                    {entry.current && (
                                        <span className={styles.current}>
                                            <span className="pulse" aria-hidden="true" /> Current
                                        </span>
                                    )}
                                </h3>
                                <p className={styles.description}>{entry.description}</p>
                                {entry.tags && (
                                    <ul className={`tags ${styles.tags}`}>
                                        {entry.tags.map(tag => (
                                            <li key={tag} className="tag">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </li>
            ))}
        </ol>
    );
}
