import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Bipul Chamoli — Full-stack Software Engineer',
    description: 'Full-stack Software Engineer specializing in AI-powered applications using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, and Prisma.',
    metadataBase: new URL('https://bipulchamoli.dev'),
    openGraph: {
        title: 'Bipul Chamoli — Full-stack Software Engineer',
        description: 'Full-stack Software Engineer building AI-powered applications with Next.js, TypeScript, and Node.js.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="bg-gradient" aria-hidden="true" />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
