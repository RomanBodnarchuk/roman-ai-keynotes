import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Roman Bodnarchuk
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              AI Keynote Speaker. Founder. Operator. Helping companies transition from AI experimentation to AI-first execution.
            </p>
            <Link to="/contact" className="btn-primary !py-2.5 !px-6 !text-xs">
              Book Now
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", path: "/about" },
                { label: "Speaking Topics", path: "/speaking-topics" },
                { label: "Books", path: "/books" },
                { label: "Media Kit", path: "/media" },
                { label: "Event Organizers", path: "/event-organizers" },
                { label: "Resources", path: "/resources" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "WisdomClone.ai", href: "https://wisdomclone.ai" },
                { label: "N5R.ai", href: "https://n5r.ai" },
                { label: "10XAI.news", href: "https://10xainews.com" },
                { label: "The Best Half Show", href: "#" },
                { label: "Strategic AI Coach", href: "https://strategicaicoach.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/romanbodnarchuk" },
                { icon: Twitter, label: "X", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-2">roman@n5r.com</p>
            <p className="text-xs text-text-tertiary">Toronto, Ontario, Canada</p>
          </div>
        </div>

        <div className="glow-line mt-12 mb-8 opacity-20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Roman Bodnarchuk. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            AI Keynote Speaker &middot; Founder &middot; Author &middot; Operator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
