import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Bipul Chamoli — Full Stack Developer',
    description: 'Full Stack Developer with hands-on experience in frontend and backend development using React.js, Next.js, Node.js, and REST APIs.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
