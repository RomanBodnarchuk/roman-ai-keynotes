import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-portrait.jpg";
import stageImage from "@/assets/stage-keynote.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const Index = () => {
  return (
    <PageLayout>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Roman Bodnarchuk",
        jobTitle: "AI Keynote Speaker & Executive Advisor",
        description: "AI keynote speaker helping companies transition from AI experimentation to AI-first execution. Founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news.",
        url: "https://romanbodnarchuk.com",
        knowsAbout: ["Artificial Intelligence", "AI Strategy", "Digital Transformation", "Keynote Speaking", "AI Agents", "Digital Workers"],
        founder: [
          { "@type": "Organization", name: "WisdomClone.ai" },
          { "@type": "Organization", name: "N5R.ai" },
        ],
        author: [
          { "@type": "Book", name: "The Million Dollar Minute" },
          { "@type": "Book", name: "Clone Your Mind With AI" },
          { "@type": "Book", name: "Buy Back Your Time With AI" },
        ],
      })}} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex flex-col justify-center px-7 sm:px-12 lg:px-20 py-32 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-[3px] text-primary">
              AI Keynote Speaker & Executive Advisor
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-heading text-[clamp(3.5rem,7vw,6.25rem)] leading-[0.92] tracking-[1px] mb-7"
          >
            AI Keynotes{"\n"}for Companies{"\n"}Ready to Be{"\n"}<em className="not-italic text-primary">AI-First.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[17px] leading-[1.65] text-[#bbb] max-w-[460px] mb-12 font-light"
          >
            Roman Bodnarchuk shows business leaders how <strong className="text-foreground font-medium">AI agents, digital workers, and AI-native systems</strong> are transforming growth, operations, and competitive advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Book Roman
            </Link>
            <a href="#speaker-reel" className="btn-secondary">
              View Topics
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="relative overflow-hidden bg-card hidden lg:block">
          <img
            src={heroImage}
            alt="Roman Bodnarchuk, AI keynote speaker"
            className="w-full h-full object-cover object-top"
            style={{ filter: "grayscale(20%) contrast(1.05)" }}
            width={896}
            height={1152}
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, hsl(0 0% 4%) 0%, transparent 25%), linear-gradient(to top, hsl(0 0% 4% / 0.4) 0%, transparent 40%)"
          }} />
          {/* Badge */}
          <div className="absolute bottom-10 right-10 bg-primary p-5 text-center border-l-[3px] border-gold">
            <div className="font-heading text-[42px] leading-none text-white">27</div>
            <div className="text-[10px] uppercase tracking-[2px] text-white/80 mt-1">Years of Digital<br />Marketing Mastery</div>
          </div>
        </div>
      </section>

      {/* ═══════ AUTHORITY STRIP ═══════ */}
      <div className="border-y border-border px-7 sm:px-12 lg:px-20 py-5 flex items-center gap-0 overflow-x-auto">
        <span className="text-[10px] uppercase tracking-[2.5px] text-muted-foreground whitespace-nowrap mr-12 flex-shrink-0">
          Ventures & Media
        </span>
        <span className="w-px h-8 bg-border mr-12 flex-shrink-0" />
        <div className="flex gap-12 items-center flex-wrap">
          {[
            { name: "WISDOMCLONE", accent: ".AI" },
            { name: "N5R", accent: ".AI" },
            { name: "10XAI", accent: "NEWS" },
            { name: "THE BEST HALF ", accent: "SHOW" },
            { name: "STRATEGIC AI ", accent: "COACH" },
          ].map((v) => (
            <span key={v.name} className="font-heading text-base tracking-[2px] text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap cursor-default">
              {v.name}<span className="text-primary">{v.accent}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="bg-primary grid grid-cols-2 md:grid-cols-4">
        {[
          { num: "5", label: "Billion-Dollar\nCompanies Built" },
          { num: "15", label: "Countries of\nOperation" },
          { num: "27", label: "Years of Digital\nMarketing" },
          { num: "4", label: "Books\nAuthored" },
        ].map((s, i) => (
          <div key={i} className="py-12 px-10 text-center border-r border-white/15 last:border-r-0">
            <div className="font-heading text-[56px] leading-none text-white">{s.num}</div>
            <div className="text-[11px] uppercase tracking-[2px] text-white/75 mt-2 whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ═══════ WHY ROMAN, WHY NOW ═══════ */}
      <section className="bg-card grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="px-7 sm:px-12 lg:px-20 py-20 lg:py-28 flex flex-col justify-center">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Why Roman. Why Now.</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-6">
              Most Companies Experiment.<br />Roman Executes.
            </h2>
            <div className="text-[17px] leading-[1.7] text-[#aaa] font-light max-w-[600px] space-y-4">
              <p>Most companies are experimenting with AI. Very few are executing. Roman works with organizations building AI-native operations where agents replace workflows, not just assist them.</p>
              <p>He founded N5R.com in 1998, served as Procter & Gamble's digital agency of record for six years, and has helped five companies reach $1 billion in revenue or valuation. His current company, WisdomClone.ai, is building the infrastructure layer of the Wisdom Economy.</p>
              <p>Roman doesn't talk about AI theory. He runs zero human employees across a multi-company portfolio exclusively through AI agents. He is the case study.</p>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-[2px]">
          {[
            { num: "$1B+", title: "Revenue Generated", body: "Helped 5 companies reach $1B in revenue or valuation across 5 continents." },
            { num: "0", title: "Human Employees", body: "Runs a multi-company portfolio exclusively through AI agents. The proof-of-concept is him." },
            { num: "6yr", title: "P&G Agency of Record", body: "Six consecutive years as Procter & Gamble's digital agency of record." },
            { num: "10X", title: "Your Company's ROI", body: "Every framework Roman deploys is built for 10x revenue impact, not incremental gains." },
          ].map((card) => (
            <motion.div
              key={card.num}
              {...fadeUp}
              className="bg-background p-7 lg:p-8 border-l-2 border-transparent hover:border-primary transition-colors"
            >
              <div className="font-heading text-[42px] text-primary leading-none mb-2">{card.num}</div>
              <div className="text-[13px] font-semibold text-foreground mb-2">{card.title}</div>
              <div className="text-[13px] leading-[1.6] text-muted-foreground">{card.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ KEYNOTE TOPICS ═══════ */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Keynote Topics</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-4">
              Six Talks.<br />All Business-Critical.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] mt-14">
            {[
              { num: "01", title: "The AI-Native Company: Zero Employees, Infinite Scale", body: "How Roman runs a multi-company AI empire with zero human employees. The exact architecture, agent stack, and delegation framework your organization can replicate today.", tag: "Operations" },
              { num: "02", title: "The Wisdom Economy: Your Expertise Is the Moat", body: "The next trillion-dollar market isn't software. It's human intelligence, cloned and deployed at scale. Who owns your organization's intellectual capital when your top performers leave?", tag: "Strategy" },
              { num: "03", title: "AI Agents vs AI Tools: Why Most Companies Are Behind", body: "The companies using AI as a productivity tool will lose to those deploying AI as autonomous infrastructure. Roman shows the difference and the roadmap to catch up.", tag: "AI Strategy" },
              { num: "04", title: "10X Revenue Without 10X Headcount", body: "The frameworks, agent workflows, and execution systems that allow any business to multiply output without multiplying costs. Built on 27 years and $1B+ in proven results.", tag: "Growth" },
              { num: "05", title: "The AI Leadership Mandate: Lead the Change or Become Obsolete", body: "A direct conversation for CEOs and executives. What AI transformation actually requires from leaders, and why most corporate AI initiatives fail before they start.", tag: "Leadership" },
              { num: "06", title: "From Digital Marketing to AI Marketing: The Complete Shift", body: "27 years of digital marketing, six years as P&G's agency of record, and a front-row seat at every major digital shift. The AI marketing transition is the biggest one yet.", tag: "Marketing" },
            ].map((topic) => (
              <motion.div
                key={topic.num}
                {...fadeUp}
                className="bg-card p-10 relative overflow-hidden group hover:bg-[#222] transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                <div className="font-heading text-sm tracking-[2px] text-primary mb-5">{topic.num}</div>
                <h3 className="font-serif text-2xl leading-[1.25] text-foreground mb-4">{topic.title}</h3>
                <p className="text-sm leading-[1.7] text-muted-foreground">{topic.body}</p>
                <span className="inline-block mt-5 text-[10px] tracking-[2px] uppercase text-primary border border-primary/30 px-2.5 py-1">{topic.tag}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/speaking-topics" className="btn-secondary">
              View All Keynote Topics
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ ENGAGEMENT FORMATS ═══════ */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Engagement Formats</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-4">
              One Speaker.<br />Four Formats.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] mt-14">
            {[
              { icon: "◈", title: "Keynote", body: "60 to 90 minute signature keynote. High-impact, board-ready, built around your company's specific AI transformation stage.", fee: "Starting at $25,000 USD" },
              { icon: "◇", title: "Workshop", body: "Half-day or full-day executive workshop. Teams leave with an AI-native roadmap and execution plan, not slides.", fee: "Starting at $15,000 USD" },
              { icon: "◉", title: "Advisory", body: "Fractional AI strategist. Monthly engagement. Roman integrates directly with your leadership team to build AI-native systems.", fee: "$1,000/hr · Minimum 10hrs" },
              { icon: "▣", title: "Masterclass", body: "Intensive multi-day program for executive cohorts. The 10X AI Mastery curriculum, delivered by Roman in person or virtual.", fee: "$3,000 per participant" },
            ].map((f) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                className="p-8 lg:p-10 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="text-[32px] mb-5">{f.icon}</div>
                <h3 className="font-heading text-2xl mb-3">{f.title}</h3>
                <p className="text-[13px] leading-[1.65] text-muted-foreground">{f.body}</p>
                <p className="mt-5 text-[11px] tracking-[1.5px] uppercase text-gold font-medium">{f.fee}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SPEAKER REEL ═══════ */}
      <section id="speaker-reel" className="section-padding bg-card/30">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">On Stage</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-4">
              See Roman in Action
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="relative aspect-video overflow-hidden card-elevated max-w-5xl mx-auto mt-10">
            <img
              src={stageImage}
              alt="Roman Bodnarchuk delivering a keynote on stage"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/15 backdrop-blur-md flex items-center justify-center border border-primary/25 cursor-pointer hover:bg-primary/25 hover:scale-105 transition-all duration-300">
                <Play size={32} className="text-primary ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">What Leaders Say</p>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-none mb-4">
              Results Are<br />The Credential.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-14">
            {[
              { quote: "Roman doesn't theorize about AI. He's living it. Our team left with a completely different understanding of what's possible, and what we were leaving on the table.", author: "Mark Organ", role: "Founder, Eloqua (acquired by Oracle, $871M)" },
              { quote: "The clarity Roman brings to AI strategy is unmatched. He cuts through the noise faster than anyone I've seen at the executive level.", author: "Neil Simon", role: "Managing Director, Investor Cubed" },
              { quote: "Roman's WisdomClone framework helped us identify AI leverage points we had completely overlooked. Concrete, actionable, and immediately valuable.", author: "Stella Cabrera", role: "Founder, CGlobal Group" },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="bg-background p-10"
              >
                <div className="w-6 h-[2px] bg-primary mb-6" />
                <p className="font-serif text-xl leading-[1.4] text-foreground mb-7 italic">"{t.quote}"</p>
                <p className="text-[13px] font-medium text-foreground">{t.author}</p>
                <p className="text-[12px] text-muted-foreground mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-36 relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="font-heading text-[300px] text-white/[0.02] whitespace-nowrap">BOOK</span>
        </div>
        <div className="section-container relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[3px] text-primary font-medium mb-5">Inquire About Availability</p>
            <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] leading-none mb-5">
              Book Roman<br />For Your Next Event
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#aaa] max-w-[600px] mx-auto mb-12 font-light">
              Keynotes. Workshops. Executive Advisory.<br />
              All engagements book 6 to 8 weeks in advance. Availability is limited.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Inquire About Availability
              </Link>
              <a href="#speaker-reel" className="btn-secondary">
                Watch the Podcast
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
