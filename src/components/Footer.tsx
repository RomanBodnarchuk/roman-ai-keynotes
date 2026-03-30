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
              AI Keynote Speaker. Entrepreneur. Strategist. Helping companies transition from AI experimentation to AI-first execution.
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
                { label: "WisdomClone.ai", href: "#" },
                { label: "N5R.ai", href: "#" },
                { label: "10XAI.news", href: "#" },
                { label: "The Best Half Show", href: "#" },
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
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "X" },
                { icon: Youtube, label: "YouTube" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Download Resources
            </Link>
          </div>
        </div>

        <div className="glow-line mt-12 mb-8 opacity-30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Roman Bodnarchuk. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            AI Keynote Speaker &middot; Executive Advisor &middot; Author
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
