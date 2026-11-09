import { ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, Compass, Gavel, Heart, Lightbulb, Link2, Table2, Users, BriefcaseBusiness, Megaphone } from "lucide-react";
import { HubCard } from "../components/HubCard";

// Keep external destinations in one place to make future updates easy.
const LINKS = {
  events: "https://tartan-now-jht6-silk.vercel.app/",
  opportunities: "https://docs.google.com/spreadsheets/d/1x0H5-JsuZvz5TORptWrY2Dqi8bE988VH/edit?gid=319979026#gid=319979026",
  contributor: "https://damilareadekeye.com/vote-damilare/",
};

// This page is a Server Component: no client JavaScript is needed for the cards.
export default function Home() {
  return (
    <main className="page-shell">
      <div className="hub">
        {/* The university wordmark sits at the top-left, separate from the page title. */}
        <header className="brand-section" aria-label="Carnegie Mellon University Africa">
          <div className="brand-text">
            <span className="uni-name">Carnegie Mellon University</span>
            <span className="uni-campus">Africa</span>
          </div>
        </header>

        {/* One clear main heading, followed by the exact requested tagline. */}
        <section className="hero" aria-labelledby="hub-heading">
          <h1 id="hub-heading">Tartan <span>Hub</span></h1>
          <p>Everything you need to connect, grow, and stay informed.</p>
        </section>

        <section aria-label="Explore Tartan Hub">
          <div className="card-grid">
            <HubCard title="Events" eyebrow="Tartan Now" description="Discover what's happening on campus, explore upcoming activities and stay informed." Icon={CalendarDays} href={LINKS.events} action="Go to Tartan Now" isNew external />
            <HubCard title="Opportunities" eyebrow="Verified tracker" description="Explore scholarships, internships, research opportunities and resources for academic growth." Icon={BriefcaseBusiness} href={LINKS.opportunities} action="Open tracker" external />
            <HubCard title="Knowledge Bank" eyebrow="Guides, FAQs & resources" description="Student-contributed guides, scholarship application tips, research advice, useful tools and lessons from previous cohorts." Icon={BookOpen} href="#knowledge-bank" action="Learn more" comingSoon />
            <HubCard title="Guild Updates" eyebrow="Decisions & progress" description="A transparent record of Guild activities, decisions, ongoing initiatives and progress for every student." Icon={Gavel} href="#guild-updates" action="Learn more" comingSoon />
          </div>
        </section>

        {/* These are real scroll targets for the two coming-soon cards. */}
        <section className="explainer-grid" aria-label="Upcoming features">
          <article className="explainer" id="knowledge-bank"><h3><BookOpen size={21} aria-hidden="true" /> Knowledge Bank</h3><p><strong>Coming soon.</strong> Practical student-contributed guides, scholarship tips, research advice and lessons learned from previous cohorts.</p><div className="micro"><CheckCircle2 size={15} aria-hidden="true" /> Student-contributed · practical · peer-tested</div></article>
          <article className="explainer" id="guild-updates"><h3><Megaphone size={21} aria-hidden="true" /> Guild Updates</h3><p><strong>Coming soon.</strong> A clear record of Student Guild decisions, activities and initiative progress, making it easier to see what representatives are doing.</p><div className="micro"><CheckCircle2 size={15} aria-hidden="true" /> Transparent · accountable · progress-focused</div></article>
        </section>

        {/* Keep credit visible and link to the original contributor's page. */}
        <aside className="credit-area" aria-label="Contributor credits"><div className="credit-text"><Heart size={21} aria-hidden="true" /><span>Opportunity Tracker built by <a href={LINKS.contributor} target="_blank" rel="noopener noreferrer">Damilare <ArrowUpRight size={13} aria-hidden="true" /></a> &amp; <strong>Precious Adeniran</strong> · Together</span></div><div className="tracker-credit"><Table2 size={17} aria-hidden="true" /> Student-built · verified opportunities</div></aside>

        <aside className="suggestion-banner"><Lightbulb size={25} aria-hidden="true" /><p><strong>Message:</strong> Tartan Hub isn't about one person or one initiative. It's about bringing together the incredible work already happening at CMU-Africa. It makes it easier to discover, support and build upon what we do. A strong community isn't built by chance, we make it together</p></aside>

        <footer className="footer"><Link2 size={14} aria-hidden="true" />
          The Voice of Your Vision
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            This is just the beginning. Discover the vision.
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  );
}
