import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spotlight from '../components/Spotlight';
import { siteUrl } from '../lib/site';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
    variable: '--font-instrument-serif',
});

const title = 'Bipul Chamoli — Full-stack Engineer';
const description =
    'Full-stack engineer shipping production websites and AI products with Next.js, TypeScript and Node.js — from domain to deploy. Built sagekite.com and homesquarestudios.com.';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: { title, description, type: 'website', url: '/' },
    twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = {
    themeColor: '#0a0a0b',
    colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
            suppressHydrationWarning
        >
            <head>
                {/* Scroll-reveal content is only hidden when JS can reveal it again */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
            </head>
            <body>
                <a href="#main" className="skip-link">Skip to content</a>
                <div className="backdrop" aria-hidden="true" />
                <Spotlight />
                <Navbar />
                {children}
                <Footer />
                <div className="grain" aria-hidden="true" />
            </body>
        </html>
    );
}
