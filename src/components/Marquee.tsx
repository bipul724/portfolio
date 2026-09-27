import styles from './Marquee.module.css';
import { marquee } from '../data/content';

export default function Marquee() {
    return (
        <div className={styles.marquee}>
            <p className="sr-only">Technologies I work with: {marquee.join(', ')}</p>
            <div className={styles.track} aria-hidden="true">
                {/* Two identical copies so the loop can translate by exactly -50% */}
                {[0, 1].map(copy => (
                    <ul key={copy} className={styles.group}>
                        {marquee.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
