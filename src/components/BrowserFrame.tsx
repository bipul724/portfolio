import Image, { type StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';
import styles from './BrowserFrame.module.css';
import { ArrowUpRight, LockIcon } from './Icons';

interface BrowserFrameProps {
    url: string;
    domain: string;
    shot: StaticImageData;
}

// Full-page screenshot inside browser chrome; hovering scrolls through the whole page.
export default function BrowserFrame({ url, domain, shot }: BrowserFrameProps) {
    // Longer pages scroll for longer so the speed feels the same across sites.
    const scrollMs = Math.round((shot.height / shot.width) * 1400);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.frame}
            style={{ '--scroll-ms': `${scrollMs}ms` } as CSSProperties}
            aria-label={`Open ${domain} in a new tab`}
        >
            <div className={styles.chrome} aria-hidden="true">
                <span className={styles.lights}>
                    <i />
                    <i />
                    <i />
                </span>
                <span className={styles.address}>
                    <LockIcon />
                    {domain}
                </span>
                <span className={styles.open}>
                    Visit <ArrowUpRight />
                </span>
            </div>
            <div className={styles.viewport}>
                <Image
                    src={shot}
                    alt={`Full-page screenshot of ${domain}`}
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    placeholder="blur"
                    className={styles.shot}
                />
                <span className={styles.hint} aria-hidden="true">
                    Hover to scroll the page
                </span>
            </div>
        </a>
    );
}
