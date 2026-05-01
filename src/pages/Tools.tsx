import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const tools = [
  { num: "01", path: "/tools/ai-readiness-score", title: "AI Readiness Score", tag: "Assessment · 3 min", desc: "8-dimension framework Fortune 500 teams use to benchmark their AI maturity. Get an instant score and personalized action plan." },
  { num: "02", path: "/tools/clone-roi-calculator", title: "AI Clone ROI Calculator", tag: "Calculator · 2 min", desc: "Quantify the dollar value of an AI clone trained on your expertise. Built on real WisdomClone deployment data." },
  { num: "03", path: "/tools/hubspot-ai-audit", title: "HubSpot AI Automation Audit", tag: "Audit · 2 min", desc: "Grade your HubSpot stack against AI-native enterprises. Letter grade A-D with the three highest-leverage upgrades." },
  { num: "04", path: "/tools/knowledge-loss-calculator", title: "Knowledge Loss Calculator", tag: "Calculator · 2 min", desc: "Calculate the dollar cost of senior expert turnover and unprotected institutional knowledge. Annualized." },
  { num: "05", path: "/tools/ai-ceo-briefing", title: "5-Day AI CEO Briefing", tag: "Email Series · Free", desc: "Private 5-day email series for CEOs and founders building AI-native companies. Written by Roman personally." },
  { num: "06", path: "/tools/ai-strategy-sprint", title: "AI Strategy Sprint", tag: "Workshop · By Application", desc: "3-day in-person executive sprint with Roman. Walk out with a 90-day execution plan and a deployed agent stack." },
];

const Tools = () => {
  return (
    <PageLayout>
      <section className="border-b border-border bg-muted/30">
        <div className="section-container py-16 md:py-24 max-w-4xl">
          <div className="inline-block border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[2px] text-primary mb-6">
            Free AI Tools & Assessments
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground leading-[0.95] mb-5">
            The <span className="text-primary">Roman Bodnarchuk</span> AI Toolkit
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Six diagnostic tools, calculators, and frameworks the world's top CEOs use to benchmark their AI maturity, quantify ROI, and design their digital workforce. All free. All built from real N5R.ai client data.
          </p>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {tools.map((t, i) => (
              <motion.div
                key={t.path}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={t.path}
                  className="group block h-full card-elevated p-8 hover:border-primary transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <div className="font-heading text-5xl text-primary leading-none">{t.num}</div>
                  <div className="text-[11px] uppercase tracking-[2px] text-text-tertiary mt-3">{t.tag}</div>
                  <h3 className="font-serif text-2xl text-foreground italic mt-4 mb-3">{t.title}</h3>
                  <p className="text-text-secondary text-sm">{t.desc}</p>
                  <div className="text-primary text-xs uppercase tracking-[2px] mt-6">Open Tool →</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tools;
