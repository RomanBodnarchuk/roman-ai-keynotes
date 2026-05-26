import { ReactNode } from "react";

/**
 * Brand-kit PageLayout — supply your own Navigation + Footer
 * (typically wrapped in an app-level <SiteShell> that configures the brand props).
 */
interface PageLayoutProps {
  nav: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ nav, footer, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {nav}
      <main className="pt-[68px]">{children}</main>
      {footer}
    </div>
  );
};

export default PageLayout;
