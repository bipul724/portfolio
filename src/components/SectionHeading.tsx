import Reveal from './Reveal';

interface SectionHeadingProps {
    id: string;
    index: string;
    label: string;
    title: string;
    accent: string;
    intro?: string;
}

// `id` goes on the <h2> so the parent <section aria-labelledby={id}> gets an accessible name.
export default function SectionHeading({ id, index, label, title, accent, intro }: SectionHeadingProps) {
    return (
        <Reveal>
            <div className="section-head">
                <div>
                    <p className="eyebrow">
                        <span className="eyebrow-num">{index}</span>
                        {label}
                    </p>
                    <h2 id={id} className="section-title">
                        {title} <span className="serif">{accent}</span>
                    </h2>
                </div>
                {intro && <p className="section-intro">{intro}</p>}
            </div>
        </Reveal>
    );
}
