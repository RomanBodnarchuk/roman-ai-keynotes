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
            { label: "WisdomClone.ai", href: "https://wisdomclone.ai" },
            { label: "N5R.ai", href: "https://n5r.ai" },
            { label: "10X AI News", href: "https://10xainews.com" },
            { label: "Podcast", href: "https://strategicaicoach.com" },
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
          roman@n5r.com &nbsp;&middot;&nbsp; Toronto, Canada
        </div>
      </div>
    </footer>
  );
};

export default Footer;
