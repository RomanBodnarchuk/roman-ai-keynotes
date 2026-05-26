/**
 * Brand-kit Navigation — configurable per sister project.
 * Pass `brand`, `accent`, `links`, and `cta` to customize without forking.
 */
import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface BrandNavLink {
  label: string;
  path: string;
}

interface NavigationProps {
  brand: string;            // e.g. "ROMAN"
  accent?: string;          // e.g. "BODNARCHUK" rendered in primary color
  links: BrandNavLink[];
  cta?: { label: string; path: string };
  logo?: ReactNode;         // override entire left side if needed
}

const Navigation = ({ brand, accent, links, cta, logo }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-2xl border-b border-border">
      <div className="flex items-center justify-between px-7 sm:px-12 h-[68px]">
        {logo ?? (
          <Link to="/" className="font-heading text-[22px] tracking-[3px] text-foreground">
            {brand} {accent && <span className="text-primary">{accent}</span>}
          </Link>
        )}

        <div className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] uppercase tracking-[1.5px] transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {cta && (
            <Link
              to={cta.path}
              className="bg-primary text-white px-6 py-2.5 text-[12px] uppercase tracking-[1.5px] font-medium hover:bg-primary/80 transition-colors"
            >
              {cta.label}
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-7 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base uppercase tracking-[1.5px] transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {cta && (
                <Link to={cta.path} onClick={() => setIsOpen(false)} className="btn-primary mt-2 text-center">
                  {cta.label}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
