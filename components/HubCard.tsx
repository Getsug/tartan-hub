import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock3 } from "lucide-react";

// A typed component lets all four cards share a consistent layout and styling.
type HubCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  action: string;
  comingSoon?: boolean;
  isNew?: boolean;
  external?: boolean;
};

export function HubCard({ title, eyebrow, description, Icon, href, action, comingSoon = false, isNew = false, external = false }: HubCardProps) {
  // Internal anchors scroll to sections; external links open safely in a new tab.
  return (
    <a className={`card-anchor ${comingSoon ? "is-coming" : ""}`} href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${title}: ${action}`}>
      <article className="hub-card">
        <div className="card-icon"><Icon size={26} strokeWidth={1.9} aria-hidden="true" /></div>
        <div className="card-title-row"><h3>{title}</h3>{comingSoon ? <span className="status status-soon">Coming soon</span> : isNew ? <span className="status status-live">Now</span> : null}</div>
        <span className="eyebrow">{eyebrow}</span>
        <p>{description}</p>
        <span className="card-action">{action}{comingSoon ? <Clock3 size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}</span>
      </article>
    </a>
  );
}
