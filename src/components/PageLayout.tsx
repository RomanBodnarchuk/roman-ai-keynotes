import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
