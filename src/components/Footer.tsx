import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between px-7 sm:px-12 lg:px-20 py-10 gap-6">
        <div className="font-heading text-lg tracking-[3px] text-foreground">
          ROMAN <span className="text-primary">BODNARCHUK</span>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { label: "WisdomTwin.ai", href: "https://wisdomtwin.ai" },
            { label: "N5R.ai Training", href: "https://www.n5r.ai/training" },
            { label: "10XAI.news", href: "https://www.10xai.news" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="text-[12px] uppercase tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="text-[12px] text-muted-foreground text-center md:text-right">
          N5R.com Inc.<br />99 Yorkville Avenue, Suite 200<br />Toronto, Ontario, Canada<br /><a href="mailto:roman@n5r.com" className="underline">roman@n5r.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
