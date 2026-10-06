import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Asterisk, FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CvDownload } from "@/components/cv-download";
import portrait from "@/assets/wahab-bold-editorial.jpg";
import raahPreviewAsset from "@/assets/raah-e-hidayath.png.asset.json";
import sawaaPreviewAsset from "@/assets/sawaa-enterprise.png.asset.json";

const raahPreview = raahPreviewAsset.url;
const sawaaPreview = sawaaPreviewAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Abdul Wahab — Designer & Developer" },
      { name: "description", content: "The bold portfolio of Syed Abdul Wahab, creator of Raah E Hidayath and Sawaa Enterprise." },
      { property: "og:title", content: "Syed Abdul Wahab — Designer & Developer" },
      { property: "og:description", content: "Bold digital work, thoughtful systems, and sharp creative direction by Syed Abdul Wahab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    title: "Raah E Hidayath",
    subtitle: "The path of guidance",
    description: "A complete Islamic companion for Quran, Hadith, prayer times and everyday worship — thoughtfully built into one calm digital space.",
    tags: ["Product design", "Web development", "Islamic platform"],
    href: "https://raahehidayath.online",
    image: raahPreview,
    className: "project-wide",
  },
  {
    number: "02",
    title: "Sawaa Enterprise",
    subtitle: "Global digital studio",
    description: "A premium digital studio creating sharp websites, identity systems and visual experiences for ambitious businesses.",
    tags: ["Creative direction", "Development", "Brand systems"],
    href: "https://sawaaenterprise.vercel.app/",
    image: sawaaPreview,
    className: "project-offset",
  },
];

function Header() {
  return (
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Syed Abdul Wahab home">SAW<span>®</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><Link to="/cv">CV</Link>
      </nav>
    </header>
  );
}

function Portfolio() {
  return (
    <main className="portfolio-shell" id="top">
      <section className="hero" aria-label="Syed Abdul Wahab introduction">
        <div className="hero-smoke" aria-hidden="true" />
        <img className="hero-image" src={portrait} alt="Syed Abdul Wahab in a sharply lit editorial portrait" width={1145} height={768} />
        <Header />
        <div className="hero-copy">
          <p className="hero-kicker"><Asterisk /> Python developer · Designer · Builder</p>
          <h1><span>Syed</span><span className="hot-line">Abdul</span><span>Wahab<b>.</b></span></h1>
          <div className="hero-intro"><p>Thoughtful design.<br />Dependable development.</p><Button asChild variant="portfolio"><a href="#work">See the work <ArrowUpRight /></a></Button></div>
        </div>
        <p className="portrait-caption">Python developer / Digital designer</p>
        <div className="hero-footer"><span>Code · Direction · Identity</span><a href="#work">Selected work <ArrowDown /></a><span>India / Worldwide</span></div>
      </section>

      <div className="statement-strip" aria-hidden="true"><span>Build bold</span><b>✦</b><span>Own the room</span><b>✦</b><span>Make it matter</span><b>✦</b></div>

      <section className="work-section" id="work">
        <header className="section-heading"><p>(01) Selected work</p><h2>Built to be<br /><em>remembered.</em></h2><span>Live projects / 2026</span></header>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.title}>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-image-wrap" aria-label={`Open ${project.title}`}>
                <img src={project.image} alt={`${project.title} website preview`} width={1280} height={1800} loading="lazy" />
                <span className="project-stamp">View live / {project.number} <ArrowUpRight /></span>
              </a>
              <div className="project-meta"><span>{project.number}</span><div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.subtitle}</p></div><p>{project.description}</p><ArrowUpRight /></div>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">(02) The person behind the pixels</p>
        <div className="about-statement"><h2>Quiet focus.<br />Loud <em>impact.</em></h2><div><p>I’m Syed Abdul Wahab — a designer and developer building digital work with clarity, character and ambition.</p><p className="about-body">From purpose-led platforms to premium business experiences, I turn ideas into systems people notice, trust and remember.</p><Button asChild variant="portfolioInk"><a href="mailto:abdulwahabaafia@gmail.com">Start a conversation <ArrowUpRight /></a></Button></div></div>
        <div className="capabilities">{["Web development", "Interface design", "Creative direction", "Brand presence"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight /></div>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <p>(03) Get in touch</p><h2>Let’s build<br /><span>what’s next.</span></h2>
        <a className="contact-row" href="mailto:abdulwahabaafia@gmail.com"><span>abdulwahabaafia@gmail.com</span><ArrowUpRight /></a>
      </section>
      <section className="resume-section" id="resume" aria-labelledby="resume-title">
        <div className="resume-callout">
          <div><FileText /><p>(04) Curriculum vitae / Python developer</p><h3 id="resume-title">The full<br /><em>picture.</em></h3><div className="resume-details">Explore my projects, technical skills and education. Available for development roles, internships and freelance collaborations.</div></div>
          <div className="resume-actions">
            <Button asChild variant="portfolio"><Link to="/cv">View full CV <ArrowUpRight /></Link></Button>
            <CvDownload variant="portfolioOutline" />
          </div>
        </div>
      </section>
      <footer>
        <a href="#top">Syed Abdul Wahab</a>
        <span>Designer · Developer · Builder</span>
        <div className="footer-end">
          <span>© 2026 / SAW</span>
          <a className="linkedin-badge" href="https://www.linkedin.com/in/syed-abdul-wahab-328b32330" target="_blank" rel="noreferrer">
            <Linkedin /> Connect on LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}