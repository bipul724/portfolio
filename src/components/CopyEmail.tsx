'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

interface CopyEmailProps {
    email: string;
    className?: string;
    label?: string;
}

export default function CopyEmail({ email, className, label = 'Copy email' }: CopyEmailProps) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be unavailable (insecure context, denied permission) — fall back to the mail client.
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <button type="button" onClick={copy} className={className} data-copied={copied || undefined}>
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied!' : label}</span>
            <span className="sr-only" aria-live="polite">
                {copied ? `${email} copied to clipboard` : ''}
            </span>
        </button>
    );
}
