import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
} as const;

export function ArrowUpRight(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <path d="M7 17 17 7M8 7h9v9" />
        </svg>
    );
}

export function ArrowDown(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
    );
}

export function ArrowUp(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
    );
}

export function CopyIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <rect x="9" y="9" width="11" height="11" rx="2.5" />
            <path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" />
        </svg>
    );
}

export function CheckIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
    );
}

export function LockIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" {...stroke} strokeWidth={2.2} {...props}>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
    );
}

export function PhoneIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...stroke} {...props}>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
        </svg>
    );
}

export function GitHubIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

export function LeetCodeIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
    );
}
