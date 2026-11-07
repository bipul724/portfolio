import type { StaticImageData } from 'next/image';
import sagekiteShot from '@/assets/work/sagekite-full.jpg';
import homesquareShot from '@/assets/work/homesquare-full.jpg';
import reachnextShot from '@/assets/work/reachnext.jpg';
import hirenextShot from '@/assets/work/hirenext.jpg';
import zencashShot from '@/assets/work/zencash.jpg';
import inframindShot from '@/assets/work/inframind.jpg';
import parchimatchShot from '@/assets/work/parchimatch.jpg';
import availazyShot from '@/assets/work/availazy.jpg';
import ghostcacheShot from '@/assets/work/ghostcache.jpg';
import prepbuddyShot from '@/assets/work/prepbuddy.jpg';
import sentryBadge from '@/assets/awards/badge-sentry.png';
import mastraBadge from '@/assets/awards/badge-mastra.png';
import completionistBadge from '@/assets/awards/badge-completionist.png';

// Everything on the site reads from this file — edit content here, not in components.

export const profile = {
    name: 'Bipul Chamoli',
    role: 'Full-stack Engineer',
    email: 'bipulchamoli45@gmail.com',
    phone: { display: '+91 91491 99508', href: 'tel:+919149199508' },
    github: 'https://github.com/bipul724',
    leetcode: 'https://leetcode.com/u/Bipul_Chamoli/',
    source: 'https://github.com/bipul724/portfolio',
    // Shown as "role · availability"; the availability part is dropped on narrow phones.
    status: { role: 'Interning at GHL Scale Up', availability: 'Open to opportunities' },
};

// From the LeetCode profile (Sep 2026) — bump these as the count grows. `solved` is shown as "450+".
export const leetcode = {
    solved: 450,
    breakdown: [
        { level: 'Easy', solved: 226 },
        { level: 'Medium', solved: 205 },
        { level: 'Hard', solved: 20 },
    ],
};

export const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
];

export interface CaseStudy {
    name: string;
    domain: string;
    url: string;
    context: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
    shot: StaticImageData;
    stats?: { value: string; label: string }[];
    deployLog?: { step: string; detail: string }[];
}

export const featuredWork: CaseStudy[] = [
    {
        name: 'Sage Kite',
        domain: 'sagekite.com',
        url: 'https://www.sagekite.com',
        context: 'Internship · GHL Scale Up',
        period: '2026',
        summary:
            'Website for a business growth consultancy that sets up and runs CRM, marketing and automation for SMEs in the US, Canada, Europe, Australia and New Zealand. I took it over from a starter homepage and designed and built the rest on my own.',
        highlights: [
            'Built the service, industry and 14 CRM platform pages and 12 case studies, all statically generated with Next.js and TypeScript',
            'Designed the layouts in plain CSS from shared brand tokens, with visuals coded instead of exported: a pipeline dashboard, a system diagram, an 18-question FAQ accordion and an SVG cover for every case study',
            'Built a password-protected blog studio on Sanity for the SEO team: rich-text editing, pasting from Word and Google Docs, byte-checked image uploads, and posts live within 60 seconds without a redeploy',
            'Added structured data to every page (Organization, Service, FAQPage and Article JSON-LD), with canonical URLs, meta descriptions and an auto-updating XML sitemap',
            'Wired lead capture into GoHighLevel: an enquiry form posting to a GHL webhook and an embedded discovery-call calendar, with GA4 kept off the private studio',
        ],
        stats: [
            { value: '64', label: 'URLs in the live sitemap' },
            { value: '14', label: 'CRM platform pages' },
            { value: '44', label: 'pages with FAQ schema' },
        ],
        stack: ['Next.js', 'React', 'TypeScript', 'CSS', 'Sanity', 'JSON-LD', 'GoHighLevel', 'Vercel'],
        shot: sagekiteShot,
    },
    {
        name: 'Home Square Studios',
        domain: 'homesquarestudios.com',
        url: 'https://www.homesquarestudios.com',
        context: 'Freelance · Client project',
        period: '2026',
        summary:
            'Website for an interior design studio in Sultanpur and Lucknow. I took it from zero to live: the build, the domain, the DNS and the deploy.',
        highlights: [
            'Built with Next.js and TypeScript: services, a project gallery, the design process and client testimonials',
            'Lead capture built for how local clients reach out — a consultation form with +91 phone input and WhatsApp click-to-chat',
            'Bought the domain on GoDaddy, pointed its DNS records at Vercel and shipped with HTTPS by default',
            'Open Graph tags so shared links preview properly on WhatsApp and social',
        ],
        deployLog: [
            { step: 'domain', detail: 'homesquarestudios.com — registered on GoDaddy' },
            { step: 'dns', detail: 'A @ → Vercel · CNAME www → vercel-dns' },
            { step: 'build', detail: 'Next.js + TypeScript · Tailwind · shadcn/ui' },
            { step: 'deploy', detail: 'Vercel edge network · automatic HTTPS' },
            { step: 'status', detail: '200 OK — live' },
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'GoDaddy DNS', 'Vercel'],
        shot: homesquareShot,
    },
];

export interface Project {
    name: string;
    kicker: string;
    summary: string;
    highlights: string[];
    stack: string[];
    year: string;
    live?: string;
    /** Button text for `live`, e.g. "Project site" or "Walkthrough". Defaults to "Live app". */
    liveLabel?: string;
    /** YouTube demo video, shown as its own "Demo video" button. */
    demoVideo?: string;
    /** DEV (dev.to) write-up, shown as a "Read article" button. */
    article?: string;
    repo: string;
    image: StaticImageData;
    /** Describes the screenshot. Only used where the image is exposed to assistive tech;
        the card thumbnail is decorative (alt=""), so it isn't rendered there. */
    imageAlt?: string;
}

// Hacktoberfest 2026 (DEV × MLH) winners announcements, used by `achievements`.
const sentryWinnersPost =
    'https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-2-side-hustle-winners-2i33';
const mastraWinnersPost = 'https://dev.to/devteam/congrats-to-the-hacktoberfest-weekend-challenge-build-for-a-friend-winners-pgc';

export const projects: Project[] = [
    {
        name: 'InfraMind',
        kicker: 'AI DevOps file generator',
        summary:
            'Connect a GitHub repository and InfraMind clones it, runs analyzer, generator and verifier agents, and returns a validated Dockerfile, GitHub Actions workflow and .env.example to download or save.',
        highlights: [
            'Each generated file is validated and gets one repair attempt; the CI workflow must stay read-only with no registry push',
            'Per-task AI provider chains (Gemini, Groq, OpenRouter, Novita) with retries and fallback',
            'GitHub tokens encrypted with AES-256-GCM; live Socket.IO progress delivered only to the session owner',
        ],
        stack: ['React', 'TypeScript', 'Express', 'Socket.IO', 'Supabase'],
        year: '2026',
        live: 'https://inframind-frontend.onrender.com',
        liveLabel: 'Live app',
        repo: 'https://github.com/bipul724/InfraMind',
        image: inframindShot,
        imageAlt: 'InfraMind landing page',
    },
    {
        name: 'Availazy',
        kicker: 'Volunteer availability from chat messages',
        summary:
            'A local review tool that reads a week of volunteer chat messages, suggests availability records beside their source message, and exports a reconciled sheet built only from records a coordinator accepts.',
        highlights: [
            'A local Gemma model copies phrases; Python resolves dates, times and history and checks each quote against its message',
            'Tracks offers, corrections, cancellations and conditions per person and day, leaving flagged cases for human review',
            'Three readers (model + rules, model only, rules only), keyboard-driven review and formula-safe CSV export',
        ],
        stack: ['Python', 'Ollama', 'Gemma', 'JavaScript'],
        year: '2026',
        live: 'https://availability-ledger-replay.onrender.com',
        liveLabel: 'Live replay',
        demoVideo: 'https://youtu.be/Qlq_kEsDr4g',
        article:
            'https://dev.to/bipul_chamoli_09b5f0cc719/availazy-gemma-4-reads-the-volunteer-group-chat-on-my-laptop-python-does-the-dates-and-i-just-1nm8',
        // Formerly "Availability Ledger"; the repo keeps the old slug.
        repo: 'https://github.com/bipul724/availability-ledger',
        image: availazyShot,
        imageAlt: 'Availazy landing page with a message turning into a weekly availability sheet',
    },
    {
        name: 'GhostCache',
        kicker: 'AI memory provenance lab',
        summary:
            'A local testbed showing how a deleted document can persist in an assistant’s chunks, summaries and saved answers, and how a provenance graph traces and purges every derived copy.',
        highlights: [
            'SQLite provenance graph records every artifact given to the model as a parent; cleanup walks descendants with a recursive query in one transaction',
            'Deterministic fixture mode and live mode with local Gemma via Ollama; live mode never silently falls back',
            'Standard-library Python core with optional, metadata-only Sentry tracing',
        ],
        stack: ['Python', 'SQLite', 'Ollama', 'Gemma', 'Sentry'],
        year: '2026',
        live: 'https://ghostcache.bipulchamoli.tech/',
        liveLabel: 'Walkthrough',
        demoVideo: 'https://youtu.be/yzjmyaA-9Vw',
        article: 'https://dev.to/bipul_chamoli_09b5f0cc719/ghostcache-deleting-the-file-didnt-delete-the-secret-3d5d',
        repo: 'https://github.com/bipul724/GhostCache',
        image: ghostcacheShot,
        imageAlt: 'GhostCache lab showing the provenance graph of documents, chunks and summaries',
    },
    {
        name: 'ReachNext',
        kicker: 'AI-native marketing CRM',
        summary:
            'Describe a goal in plain English and four specialized AI agents segment the audience, plan the campaign, write every message and review it.',
        highlights: [
            '4-stage multi-agent pipeline with Zod-validated structured output end to end',
            'Express campaign service with async webhooks, batched delivery and real-time analytics',
            'Groq and Gemini behind a provider-agnostic AI layer',
        ],
        stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Groq'],
        year: '2025',
        live: 'https://reach-next-iota.vercel.app',
        repo: 'https://github.com/bipul724/ReachNext',
        image: reachnextShot,
    },
    {
        name: 'HireNext',
        kicker: 'AI interview platform',
        summary:
            'Voice agents run the technical interview while candidate and interviewer code together in real time — with AI feedback the moment it ends.',
        highlights: [
            'Vapi voice agents, OpenRouter and Gemini combined to automate technical interviews',
            'Redis Pub/Sub WebSocket layer for live code sync, cursors and presence',
            'Idempotent, event-driven feedback pipeline on Supabase webhooks',
        ],
        stack: ['Next.js', 'Express.js', 'Redis', 'Supabase', 'WebSockets'],
        year: '2025',
        live: 'https://hire-next-blush.vercel.app',
        repo: 'https://github.com/bipul724/HireNext',
        image: hirenextShot,
    },
    {
        name: 'ZenCash',
        kicker: 'Personal finance platform',
        summary:
            'Budgets, expense tracking and analytics dashboards — plus AI that reads your receipts and files the expense for you.',
        highlights: [
            'Inngest background jobs for recurring transactions, budget alerts and monthly reports',
            'AI receipt scanning with automatic expense categorization',
            'Arcjet-protected APIs with rate limiting, on PostgreSQL and Prisma',
        ],
        stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Inngest', 'Arcjet'],
        year: '2025',
        live: 'https://zen-cash-oevg.vercel.app',
        repo: 'https://github.com/bipul724/ZenCash',
        image: zencashShot,
    },
];

export interface TimelineEntry {
    period: string;
    title: string;
    org: string;
    url?: string;
    description: string;
    tags?: string[];
    kind: 'work' | 'education';
    current?: boolean;
}

export const timeline: TimelineEntry[] = [
    {
        period: '2026 — Now',
        title: 'Web Developer Intern',
        org: 'GHL Scale Up',
        url: 'https://www.ghlscaleup.com',
        description:
            'GoHighLevel agency building CRM, automation and web systems for agencies and service businesses. I designed and built sagekite.com solo, taking it over from a starter homepage.',
        tags: ['Next.js', 'React', 'CSS', 'SEO', 'Vercel'],
        kind: 'work',
        current: true,
    },
    {
        period: '2026',
        title: 'Freelance Web Developer',
        org: 'Home Square Studios',
        url: 'https://www.homesquarestudios.com',
        description:
            'Delivered the studio’s website end to end — the Next.js build, the GoDaddy domain, DNS configuration and Vercel deployment.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DNS', 'Vercel'],
        kind: 'work',
    },
    {
        period: '2023 — 2027',
        title: 'B.Tech, Computer Science & Engineering',
        org: 'ABES Engineering College, Ghaziabad',
        description: 'CGPA 8.5 / 10',
        kind: 'education',
    },
    {
        period: '2020 — 2022',
        title: 'Intermediate (Science)',
        org: 'Saraf Public School, Khatima',
        description: 'CBSE · 96.4%',
        kind: 'education',
    },
];

export const skills: Record<string, string[]> = {
    Languages: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
    Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Technical SEO'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Zod', 'AI/LLM integration'],
    Data: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    'DevOps & tools': ['Docker', 'Nginx', 'Linux', 'Vercel', 'DNS & domains', 'GitHub', 'Postman'],
    'CS fundamentals': ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
};

export const marquee = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis',
    'MongoDB', 'WebSockets', 'Tailwind CSS', 'Supabase', 'Inngest', 'Zod', 'Groq', 'Gemini',
    'Docker', 'Vercel',
];

export const certifications = ['Cisco Networking Academy', 'Amazon Web Services (AWS)'];

export interface Achievement {
    award: {
        title: string;
        /** Challenge, round and organisers, shown under the award title. */
        event: string;
        announced: string;
        url: string;
        badge: StaticImageData;
        /** Plain-text name for the Person JSON-LD `award` list. */
        schema: string;
    };
    /** The winning project, with everything a project card shows. */
    project: Project;
}

// Prize-category wins, shown in the Achievements section. Badges are DEV's official images.
export const achievements: Achievement[] = [
    {
        award: {
            title: 'Best Use of Sentry Agent Tracing',
            event: 'Hacktoberfest 2026 Open-Source AI Challenge · Week 2: Side Hustle · DEV × MLH',
            announced: '23 Oct 2026',
            url: sentryWinnersPost,
            badge: sentryBadge,
            schema: 'Best Use of Sentry Agent Tracing — Hacktoberfest 2026 Open-Source AI Challenge (DEV × MLH)',
        },
        project: {
            name: 'ParchiMatch Lite',
            kicker: 'Offline order matching for wholesalers',
            summary:
                'Turns messy Hinglish and Devanagari WhatsApp orders into checked billing rows matched to a shop’s own catalogue, running offline with a local Gemma model and asking one question when unsure.',
            highlights: [
                'Code reads every quantity, unit and price; the model only picks the product, and 16 safety rules check each pick',
                'Hybrid fuzzy + model matching: 88.2% of lines handled without review and 0 wrong rows auto-accepted on a locked synthetic test set',
                'Zero-dependency TypeScript on Node 24, with CI that fails if the locked test set changes',
            ],
            stack: ['TypeScript', 'Node.js', 'Ollama', 'Gemma', 'GitHub Actions'],
            year: '2026',
            live: 'https://bipul724.github.io/parchimatch/',
            liveLabel: 'Project site',
            demoVideo: 'https://youtu.be/lsl2cNpkY6U',
            article:
                'https://dev.to/bipul_chamoli_09b5f0cc719/red-label-adha-kg-2-box-an-offline-whatsapp-order-reader-for-indian-shops-that-asks-before-it-i96',
            repo: 'https://github.com/bipul724/parchimatch',
            image: parchimatchShot,
            imageAlt: 'ParchiMatch Lite: a messy order line matched to a checked billing row',
        },
    },
    {
        award: {
            title: 'Best Use of Mastra',
            event: 'Hacktoberfest 2026 Weekend Challenge · Build for a Friend · DEV × MLH',
            announced: '9 Oct 2026',
            url: mastraWinnersPost,
            badge: mastraBadge,
            schema: 'Best Use of Mastra — Hacktoberfest 2026 Weekend Challenge (DEV × MLH)',
        },
        project: {
            name: 'Prep Buddy',
            kicker: 'Offline mock-interview coach',
            summary:
                'An offline mock-interview coach for campus placements that asks questions from a 56-question bank, grades typed answers with a local Gemma model, and targets weak topics using vector search.',
            highlights: [
                'Mastra agents for interviewer, evaluator and coach roles, with Zod-validated structured feedback',
                'EmbeddingGemma embeddings and pgvector distance queries pick the next question closest to the user’s gaps',
                'Runs entirely on localhost through Ollama: no API keys or cloud model calls',
            ],
            stack: ['Next.js', 'TypeScript', 'Mastra', 'pgvector', 'Ollama'],
            year: '2026',
            // Local-only app: no hosted demo, so the video is the only demo link.
            demoVideo: 'https://youtu.be/TgRr7m_U_FE',
            article:
                'https://dev.to/bipul_chamoli_09b5f0cc719/prep-buddy-an-ai-interview-coach-for-my-classmate-that-runs-on-his-laptop-with-the-wi-fi-off-426b',
            repo: 'https://github.com/bipul724/prep-buddy',
            image: prepbuddyShot,
            imageAlt: 'Prep Buddy landing page',
        },
    },
];

// Shown as a smaller row under the two wins.
export const completion = {
    title: 'Hacktoberfest 2026 Completionist',
    date: '30 Oct 2026',
    detail: 'Certificate of completion · Powered by MLH × DEV · Presenting partner DigitalOcean',
    url: '/awards/hacktoberfest-2026-certificate.png',
    linkText: 'View certificate',
    badge: completionistBadge,
    schema: 'Hacktoberfest 2026 Completionist',
};
