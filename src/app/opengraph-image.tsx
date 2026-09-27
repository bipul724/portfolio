import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { featuredWork, profile } from '../data/content';

// Link preview card for LinkedIn, WhatsApp, X, etc. — rendered once at build time.
export const alt = 'Bipul Chamoli — full-stack engineer shipping production websites and AI products, from domain to deploy.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
    const photo = await readFile(join(process.cwd(), 'public/bipul.jpg'));
    const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: 72,
                    background: '#0a0a0b',
                    backgroundImage: 'radial-gradient(900px 420px at 30% -10%, rgba(255,107,61,0.22), transparent 70%)',
                    color: '#ededef',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, color: '#a4a4ad' }}>
                        <div style={{ width: 12, height: 12, borderRadius: 6, background: '#3ddc84' }} />
                        {`${profile.status.role} · ${profile.status.availability}`}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: 100, letterSpacing: -5, lineHeight: 1 }}>{profile.name}</div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 28,
                                fontSize: 42,
                                letterSpacing: -1.5,
                                lineHeight: 1.25,
                                color: '#a4a4ad',
                            }}
                        >
                            <span>Full-stack engineer —</span>
                            <span style={{ color: '#ff6b3d' }}>from domain to deploy.</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 24, color: '#7d7d87' }}>
                        {featuredWork.map(work => (
                            <div key={work.domain} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <div style={{ width: 8, height: 8, borderRadius: 4, background: '#3ddc84' }} />
                                {work.domain}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320 }}>
                    <div
                        style={{
                            display: 'flex',
                            padding: '12px 12px 48px',
                            background: '#f3efe6',
                            borderRadius: 4,
                            transform: 'rotate(3deg)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                        }}
                    >
                        <img src={photoSrc} alt="" width={260} height={325} style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        ),
        size
    );
}
