import type { StaticImageData } from 'next/image';
import sagekiteShot from '@/assets/work/sagekite-full.jpg';
import homesquareShot from '@/assets/work/homesquare-full.jpg';
import reachnextShot from '@/assets/work/reachnext.jpg';
import hirenextShot from '@/assets/work/hirenext.jpg';
import zencashShot from '@/assets/work/zencash.jpg';

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
            'Marketing site for a business growth consultancy serving SMEs in the US, Canada, Europe, Australia and New Zealand. Built from an empty repo to a live domain — on my own.',
        highlights: [
            'Built every page from scratch — home, about, six platform pages, blog and legal — in hand-written CSS with scroll-triggered reveals',
            'UI illustrations coded in HTML/CSS, not exported as images: a pipeline dashboard, system diagrams and an 18-question FAQ accordion',
            'SEO foundations baked in: JSON-LD structured data (Organization + FAQPage) and an XML sitemap',
            'Deployed and hosted on Vercel',
        ],
        stats: [
            { value: '12', label: 'pages in the sitemap' },
            { value: '18', label: 'FAQ answers with schema' },
            { value: '1', label: 'developer — me' },
        ],
        stack: ['Next.js', 'React', 'CSS', 'JSON-LD', 'Vercel'],
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
    repo: string;
    image: StaticImageData;
}

export const projects: Project[] = [
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
            'GoHighLevel agency building CRM, automation and web systems for agencies and service businesses. I built and shipped sagekite.com from scratch, solo.',
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
