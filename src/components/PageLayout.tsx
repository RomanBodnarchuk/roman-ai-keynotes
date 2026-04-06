import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[68px]">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
