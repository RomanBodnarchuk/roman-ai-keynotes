import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { usePageSEO } from "@/hooks/use-page-seo";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const CALENDLY = "https://calendly.com/romanbodnarchuk";

const agents = [
  { m: "01", t: "The Gatekeeper", d: "Audits every inbound lead in real time. Scores, routes, and responds before a human touches it.", o: "Zero unqualified calls on your calendar" },
  { m: "02", t: "The Proposal Engine", d: "Turns a 20-minute discovery call transcript into a fully scoped, priced proposal in under 4 minutes.", o: "Proposals out the same day, every time" },
  { m: "03", t: "The Onboarding Architect", d: "Automates the first 30 days of client onboarding. Welcome sequences, asset collection, kick-off prep.", o: "Clients feel held from day one without you lifting a finger" },
  { m: "04", t: "The Content Multiplier", d: "Turns one long-form piece (podcast, webinar, report) into 30 platform-native assets per week.", o: "Consistent presence across every channel with one input" },
  { m: "05", t: "The Revenue Analyst", d: "Monitors your HubSpot pipeline daily, flags stalled deals, and drafts re-engagement messages.", o: "No deal dies quietly again" },
  { m: "06", t: "The HR Killer", d: "Handles first-round screening, reference checks, and offer letter drafting for every open role.", o: "Cut time-to-hire by 60% without a recruiter" },
  { m: "07", t: "The Customer Success Bot", d: "Monitors NPS, flags at-risk accounts, and drafts save sequences before churn happens.", o: "Churn rate drops. Expansion revenue rises." },
  { m: "08", t: "The Finance Watcher", d: "Reconciles weekly P&L, flags anomalies, and produces a Monday morning CFO brief automatically.", o: "You know your numbers before Monday coffee" },
  { m: "09", t: "The Partnership Scout", d: "Researches, qualifies, and drafts outreach for 10 new strategic partnership targets per week.", o: "A full partnership pipeline with zero BD headcount" },
  { m: "10", t: "The Market Intelligence Agent", d: "Monitors competitors, regulatory changes, and market signals. Delivers a weekly brief.", o: "You stop being surprised by the market" },
  { m: "11", t: "The Training Architect", d: "Converts your SOPs and tribal knowledge into interactive training modules for new hires.", o: "Onboarding time cut in half. Quality goes up." },
  { m: "12", t: "The Compound Engine", d: "Connects all 11 agents into a single orchestrated system. Agents hand off to each other without human intervention.", o: "Your business runs a shift you never have to manage" },
];

const stack = [
  { t: "14-Day AI Audit", v: "$4,800", d: "A full diagnostic of your operations, data infrastructure, and AI readiness. Identifies the $150K in waste or revenue before Month 1 begins." },
  { t: "12 Custom AI Agents", v: "$96,000", d: "One per month. Built on your tenants (Claude, ChatGPT, Manus, HubSpot). Scoped to your specific workflows, not generic templates." },
  { t: "Weekly 1:1 with Roman", v: "$24,000", d: "60 minutes every week. Strategy, troubleshooting, roadmap adjustments. Direct access, no account manager buffer." },
  { t: "Prompt Library Access", v: "$2,400", d: "Every prompt Roman uses across all 12 agent categories. Yours to keep and adapt after the engagement ends." },
  { t: "HubSpot AI Integration", v: "$12,000", d: "Full CRM-to-agent pipeline. Leads, deals, contacts, and sequences all connected to your agent workforce." },
  { t: "12-Month Async Support", v: "$14,400", d: "Slack access to Roman for questions, tweaks, and agent updates between weekly calls." },
];

const faqs = [
  { q: "Why $8,000/month and not your standard $25,000?", a: "The founding cohort gives Roman 10 documented case studies in exchange for the discount. After the 10th client signs, pricing returns to $25,000/month USD with no exceptions." },
  { q: "What if I already have ChatGPT and Claude subscriptions?", a: "Good. We build agents on your existing tenants. You keep ownership, billing, and data. Roman builds the orchestration layer around them." },
  { q: "Who actually builds the agents?", a: "Roman. Personally. No junior account manager. No outsourced team. That is the entire point of the cohort." },
  { q: "What if my data is not ready?", a: "The 14-Day AI Audit identifies exactly what is missing and ships a remediation plan before Month 1. You will not be guessing." },
  { q: "Can I pause the contract?", a: "Yes. Pause once for up to 30 days during the 12 months. The agent roadmap resumes where it stopped." },
  { q: "What if the first agent does not work?", a: "Every agent is scoped, built, tested, and signed off before we move on. If Month 1 fails, Roman rebuilds it free before Month 2 starts." },
  { q: "How is this different from an Upwork AI consultant?", a: "An Upwork consultant ships a prompt. Roman ships an integrated workforce connected to your CRM, your data, and your team. Different category." },
  { q: "What about data privacy and security?", a: "All agents run on your tenants. Roman never holds your data. NDA and DPA signed before the audit begins." },
  { q: "Do I need to be a HubSpot customer?", a: "Preferred but not required. If you are not on HubSpot, we adapt to your stack. The methodology is platform-agnostic." },
  { q: "What if AI changes faster than the roadmap?", a: "It will. The roadmap is a baseline, not a contract. Roman swaps agents and tools as the frontier moves. You always get the current best." },
];

const Faq = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
      >
        <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{q}</span>
        {open ? <Minus size={20} className="text-primary flex-shrink-0" /> : <Plus size={20} className="text-primary flex-shrink-0" />}
      </button>
      {open && <p className="text-[15px] leading-[1.7] text-muted-foreground pb-7 max-w-[820px]">{a}</p>}
    </div>
  );
};

const Cohort = () => {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "N5R.ai Founding Cohort",
        provider: { "@type": "Person", name: "Roman Bodnarchuk" },
        description: "12-month engagement deploying a 12-agent AI workforce. Founding cohort pricing $8,000/month USD, limited to 10 clients.",
        offers: { "@type": "Offer", price: "8000", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability" },
      })}} />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-7 sm:px-12 lg:px-20 py-32">
        <div className="max-w-[1100px]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-[3px] text-primary">N5R.ai Founding Cohort · 10 Spots Only</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-[clamp(3rem,6.5vw,5.75rem)] leading-[0.95] tracking-[1px] mb-8"
          >
            While 95% of AI Pilots<br />Quietly Fail, <em className="not-italic text-primary">10 Founders</em><br />Will Deploy a 12-Agent<br />AI Workforce This Year.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[17px] leading-[1.7] text-[#bbb] max-w-[680px] mb-12 font-light"
          >
            Roman Bodnarchuk. 27 years, 5 unicorns, North America's #1 HubSpot AI Agency. He is opening 10 founding cohort spots at <strong className="text-foreground font-medium">$8,000/month USD</strong>. The standard N5R.ai retainer is $25,000/month. Same work. Different price. For 90 more days.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Strategy Call</a>
            <a href="#roadmap" className="btn-secondary">See the 12-Agent Roadmap</a>
          </div>
          <p className="text-[12px] tracking-[1px] uppercase text-muted-foreground mt-8">No pitch deck. No junior account manager. Roman builds your agents personally.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary grid grid-cols-1 md:grid-cols-3">
        {[
          { num: "95%", label: "Of enterprise AI pilots produce zero measurable return", src: "MIT NANDA GenAI Divide 2025" },
          { num: "$340K", label: "Average annual cost of the humans AI agents replace in a 10-person ops team", src: "Bureau of Labor Statistics, 2024" },
          { num: "14", label: "Days to identify $150,000 in operational waste or hidden revenue. Guaranteed.", src: "N5R.ai Founding Cohort Guarantee" },
        ].map((s, i) => (
          <div key={i} className="py-14 px-10 text-center border-r border-white/15 last:border-r-0 border-b md:border-b-0">
            <div className="font-heading text-[64px] leading-none text-white">{s.num}</div>
            <div className="text-[13px] text-white/85 mt-4 max-w-[280px] mx-auto leading-[1.5]">{s.label}</div>
            <div className="text-[10px] uppercase tracking-[2px] text-white/55 mt-3">{s.src}</div>
          </div>
        ))}
      </section>

      {/* PULL QUOTE */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-[920px]">
          <motion.p {...fadeUp} className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.4] italic text-foreground">
            "The problem is not access to AI tools. Every company has access. The problem is that nobody has connected the tools to the workflows, the data, and the people in a way that compounds. That is the only thing I do."
          </motion.p>
          <p className="mt-8 text-[12px] uppercase tracking-[2px] text-primary">— Roman Bodnarchuk, CEO of N5R.ai</p>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section-padding">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">The 12-Agent Roadmap</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-5">
              One Agent Per Month.<br />Twelve Months.<br />One Compounding System.
            </h2>
            <p className="text-[16px] leading-[1.7] text-muted-foreground max-w-[720px]">
              Each agent is scoped, built, tested, and handed off to your team before the next one starts. By Month 12, they work together as a single orchestrated workforce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] mt-14">
            {agents.map((a) => (
              <motion.div key={a.m} {...fadeUp} className="bg-card p-9 group hover:bg-[#222] transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                <div className="text-[10px] uppercase tracking-[2.5px] text-muted-foreground mb-2">Month {a.m}</div>
                <h3 className="font-serif text-2xl leading-[1.25] text-foreground mb-4">{a.t}</h3>
                <p className="text-sm leading-[1.65] text-muted-foreground mb-5">{a.d}</p>
                <p className="text-[13px] text-primary font-medium">→ {a.o}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">What's Included</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-12">
              The Founding Cohort Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {stack.map((s) => (
              <motion.div key={s.t} {...fadeUp} className="bg-background p-8 lg:p-10 flex flex-col">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-heading text-2xl text-foreground">{s.t}</h3>
                  <span className="text-[12px] uppercase tracking-[1.5px] text-gold whitespace-nowrap">Value: {s.v}</span>
                </div>
                <p className="text-[14px] leading-[1.65] text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-14 bg-background p-10 lg:p-14 border-l-[3px] border-primary flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[2.5px] text-muted-foreground mb-3">Total Value Stack</p>
              <div className="flex items-baseline gap-5">
                <span className="font-heading text-[42px] text-muted-foreground line-through">$153,600</span>
                <span className="font-heading text-[58px] text-primary leading-none">$8,000<span className="text-2xl text-muted-foreground">/mo</span></span>
              </div>
              <p className="text-[13px] text-muted-foreground mt-4 max-w-[520px]">Founding cohort pricing. Locked for 12 months. After the 10th client signs, the door closes and pricing returns to $25,000/month USD.</p>
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary whitespace-nowrap">Claim Your Founding Spot</a>
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section-padding">
        <div className="section-container grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">The Guarantee</p>
            <h2 className="font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mb-7">
              $150,000 Identified in 14 Days.<br />Or I Work Free.
            </h2>
            <div className="text-[16px] leading-[1.7] text-muted-foreground space-y-4 max-w-[640px]">
              <p>Before Month 1 begins, Roman runs a 14-Day AI Audit of your business. He will identify at least $150,000 in operational waste, hidden revenue, or both. If he cannot find it, he keeps working free until he does.</p>
              <p>This is not a refund policy. It is a commitment that the first dollar you spend on this engagement will be the most risk-adjusted investment you make this year.</p>
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9 inline-flex">Start With the Audit</a>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-2 bg-primary p-12 text-center border-l-[3px] border-gold">
            <div className="font-heading text-[96px] leading-none text-white">$150K</div>
            <div className="text-[12px] uppercase tracking-[2.5px] text-white/85 mt-4">Identified or We Work Free</div>
            <div className="text-[11px] uppercase tracking-[2px] text-white/60 mt-2">14-Day AI Audit Guarantee</div>
          </motion.div>
        </div>
      </section>

      {/* OPERATOR */}
      <section className="section-padding bg-card">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">The Operator</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-7">
              27 Years.<br />5 Unicorns.<br />One Operator.
            </h2>
            <div className="text-[16px] leading-[1.75] text-muted-foreground space-y-4 max-w-[560px]">
              <p>Roman Bodnarchuk founded N5R in 1998. Over 27 years, he has helped five companies cross $1 billion in revenue or valuation. He built the first AI-native marketing agency in Canada. He is not a consultant who reads about AI. He is an operator who builds with it daily.</p>
              <p>In November 2023, Roman stopped looking for employees and started building AI agents. Today, N5R runs a business that scales while Roman sleeps, because the agents work the night shift.</p>
              <p>The founding cohort is Roman's way of documenting that transformation for 10 other companies. You get the system. He gets the case studies. Everyone wins.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-[2px] self-center">
            {[
              { n: "27", l: "Years in business" },
              { n: "5", l: "Unicorns built" },
              { n: "#1", l: "HubSpot AI Agency in Canada" },
              { n: "1998", l: "Founded in Toronto" },
            ].map((s) => (
              <motion.div key={s.l} {...fadeUp} className="bg-background p-9">
                <div className="font-heading text-[52px] text-primary leading-none mb-3">{s.n}</div>
                <div className="text-[12px] uppercase tracking-[1.8px] text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="section-container max-w-[960px]">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Questions</p>
            <h2 className="font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] leading-none mb-12">
              Everything You Are Probably<br />Thinking Right Now.
            </h2>
          </motion.div>
          <div>
            {faqs.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* WHY ONLY 10 */}
      <section className="section-padding bg-card">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Why Only 10</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-7">
              I Am One Human.<br />With AI Leverage.
            </h2>
            <div className="text-[16px] leading-[1.7] text-muted-foreground space-y-4 max-w-[560px]">
              <p>Roman can deliver this level of work to 10 founding clients while keeping the quality he is willing to put his name on. Eleven would not be ten plus one. It would be a different, worse offer. So he is not making it.</p>
              <p>After the 10th client signs, the door closes. The next cohort waitlist opens at the standard $25,000/month USD N5R.ai retainer. Same delivery. Three times the price.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="bg-background p-12 text-center border-t-[3px] border-primary">
            <div className="font-heading text-[96px] leading-none text-foreground">10<span className="text-primary">.</span></div>
            <div className="text-[12px] uppercase tracking-[2.5px] text-muted-foreground mt-4 max-w-[340px] mx-auto leading-[1.6]">
              Founding cohort closes when the 10th client signs, or 30 days from launch, whichever comes first.
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">Claim Your Spot</a>
          </motion.div>
        </div>
      </section>

      {/* BOOK CALL */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="font-heading text-[260px] text-white/[0.02] whitespace-nowrap">CALL</span>
        </div>
        <div className="section-container relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Book Your Call</p>
            <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] leading-none mb-6">
              30 Minutes With Roman.
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#aaa] max-w-[640px] mx-auto mb-12 font-light">
              We will look at your business, identify where one AI agent could compound the fastest, and decide together whether the founding cohort is a fit. If it is not, you still walk away with at least one idea you can deploy this week.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Strategy Call</a>
            <p className="text-[12px] tracking-[1px] uppercase text-muted-foreground mt-8">
              30 minutes. Zero pressure.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cohort;
