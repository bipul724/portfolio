import styles from './page.module.css';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SectionHeading from '../components/SectionHeading';
import CaseStudy from '../components/CaseStudy';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import About from '../components/About';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';
import { featuredWork, marquee, profile, projects, timeline } from '../data/content';
import { siteUrl } from '../lib/site';

const currentRole = timeline.find(entry => entry.current);
const college = timeline.find(entry => entry.kind === 'education');

// schema.org Person — helps search engines connect the name to this site and profiles.
const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/bipul.jpg`,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.leetcode],
    worksFor: currentRole && { '@type': 'Organization', name: currentRole.org, url: currentRole.url },
    alumniOf: college && { '@type': 'CollegeOrUniversity', name: college.org },
    knowsAbout: marquee,
};

export default function Home() {
    return (
        <main id="main">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
            />
            <Hero />
            <Marquee />

            <section id="work" className="section" aria-labelledby="work-title">
                <div className="container">
                    <SectionHeading
                        id="work-title"
                        index="01"
                        label="Selected work"
                        title="Shipped to production,"
                        accent="for real clients."
                        intro="Two live websites, each built solo — from an empty repo to a real domain, with the DNS and deployment handled end to end."
                    />
                    {featuredWork.map((work, i) => (
                        <CaseStudy key={work.domain} work={work} index={i} />
                    ))}
                </div>
            </section>

            <section id="projects" className="section" aria-labelledby="projects-title">
                <div className="container">
                    <SectionHeading
                        id="projects-title"
                        index="02"
                        label="Projects"
                        title="AI products,"
                        accent="built end to end."
                        intro="Full-stack side projects where I go after the hard parts — multi-agent orchestration, real-time collaboration and event-driven backends."
                    />
                    <div className={styles.projectGrid}>
                        {projects.map((project, i) => (
                            <Reveal key={project.name} delay={i * 90} className={styles.projectCell}>
                                <ProjectCard project={project} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="section" aria-labelledby="experience-title">
                <div className="container">
                    <SectionHeading
                        id="experience-title"
                        index="03"
                        label="Experience"
                        title="Where I’ve been"
                        accent="learning & shipping."
                    />
                    <Timeline />
                </div>
            </section>

            <section id="about" className="section" aria-labelledby="about-title">
                <div className="container">
                    <SectionHeading
                        id="about-title"
                        index="04"
                        label="About"
                        title="The person"
                        accent="behind the commits."
                    />
                    <About />
                </div>
            </section>

            <Contact />
        </main>
    );
}
