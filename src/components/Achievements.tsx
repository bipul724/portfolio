import Image from 'next/image';
import styles from './Achievements.module.css';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';
import { achievements, completion, type Achievement } from '../data/content';

// Award header shown above each winning project. The badge is decorative: the text next to it names the award.
function AwardHeader({ award }: { award: Achievement['award'] }) {
    return (
        <div className={styles.award}>
            <Image src={award.badge} alt="" width={84} height={84} className={styles.badge} />
            <div className={styles.awardText}>
                <span className={styles.pill}>Winner</span>
                <h3 className={styles.title}>{award.title}</h3>
                <p className={styles.event}>{award.event}</p>
                <p className={styles.announced}>Winners announced {award.announced}</p>
            </div>
        </div>
    );
}

export default function Achievements() {
    return (
        <div className={styles.list}>
            {achievements.map(({ award, project }) => (
                <Reveal key={award.title} className={styles.cell}>
                    <ProjectCard
                        project={project}
                        headingLevel="h4"
                        header={<AwardHeader award={award} />}
                        leadLink={{
                            href: award.url,
                            label: 'Winners announcement',
                            ariaLabel: `Winners announcement — ${award.title}, won by ${project.name} (opens in a new tab)`,
                        }}
                    />
                </Reveal>
            ))}

            <Reveal className={styles.cell}>
                <div className={`${styles.completion} spot`}>
                    <Image src={completion.badge} alt="" height={52} className={styles.completionBadge} />
                    <div className={styles.completionText}>
                        <p className={styles.completionKind}>
                            Completed <span aria-hidden="true">·</span> {completion.date}
                        </p>
                        <h3 className={styles.completionTitle}>{completion.title}</h3>
                        <p className={styles.completionDetail}>{completion.detail}</p>
                    </div>
                    <a
                        href={completion.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-arrow ${styles.completionLink}`}
                        aria-label={`${completion.linkText} — ${completion.title}, ${completion.date} (opens in a new tab)`}
                    >
                        {completion.linkText} <ArrowUpRight />
                    </a>
                </div>
            </Reveal>
        </div>
    );
}
