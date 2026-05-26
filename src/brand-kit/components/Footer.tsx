/**
 * Brand-kit Footer — configurable per sister project.
 */
import { Link } from "react-router-dom";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterProps {
  brand: string;
  accent?: string;
  links: FooterLink[];
  contact?: string; // e.g. "roman@n5r.com · Toronto, Canada"
}

const Footer = ({ brand, accent, links, contact }: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between px-7 sm:px-12 lg:px-20 py-10 gap-6">
        <div className="font-heading text-lg tracking-[3px] text-foreground">
          {brand} {accent && <span className="text-primary">{accent}</span>}
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] uppercase tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-[12px] uppercase tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {contact && (
          <div className="text-[12px] text-muted-foreground text-center md:text-right">{contact}</div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
