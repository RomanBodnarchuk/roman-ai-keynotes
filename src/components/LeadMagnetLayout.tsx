import { ReactNode } from "react";
import PageLayout from "./PageLayout";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
}

const LeadMagnetLayout = ({ eyebrow, title, description, children }: Props) => {
  return (
    <PageLayout>
      <section className="border-b border-border bg-muted/30">
        <div className="section-container py-16 md:py-20 max-w-4xl">
          <div className="inline-block border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[2px] text-primary mb-6">
            {eyebrow}
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground leading-[0.95] mb-5">
            {title}
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl">{description}</p>
        </div>
      </section>
      <section className="section-padding-sm">
        <div className="section-container max-w-3xl">{children}</div>
      </section>
    </PageLayout>
  );
};

export default LeadMagnetLayout;
