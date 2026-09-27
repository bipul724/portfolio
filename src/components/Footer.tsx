import styles from './Footer.module.css';
import { ArrowUp } from './Icons';
import { profile } from '../data/content';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.bar}`}>
                <p>
                    © {new Date().getFullYear()} {profile.name}
                </p>
                <p className={styles.built}>Built from scratch with Next.js · Deployed on Vercel</p>
                <a href="#top" className={styles.top}>
                    Back to top <ArrowUp />
                </a>
            </div>
            <p className={styles.wordmark} aria-hidden="true">
                {profile.name}
            </p>
        </footer>
    );
}
