import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Mic, Building2, Users, TrendingUp, Zap, Quote, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-portrait.jpg";
import stageImage from "@/assets/stage-keynote.jpg";
import bookMillionDollar from "@/assets/book-million-dollar.jpg";
import bookCloneMind from "@/assets/book-clone-mind.jpg";
import bookBuyBackTime from "@/assets/book-buy-back-time.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const stagger = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Index = () => {
  return (
    <PageLayout>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Roman Bodnarchuk",
        jobTitle: "AI Keynote Speaker & Strategist",
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

        <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img
            src={heroImage}
            alt="Roman Bodnarchuk, AI keynote speaker"
            className="w-full h-full object-cover object-top opacity-50"
            width={896}
            height={1152}
          />
        </div>

        <div className="section-container relative z-20 py-32 lg:py-44">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">
                AI Keynote Speaker &middot; Founder &middot; Author
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-heading font-bold text-foreground leading-[1.06] mb-6"
            >
              AI Keynotes for Companies Ready to Become{" "}
              <span className="text-gradient">AI-First</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Roman Bodnarchuk helps business leaders understand how AI agents, digital workers, and AI-native systems are transforming growth, operations, and competitive advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Book Roman
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <a href="#speaker-reel" className="btn-secondary">
                <Play className="mr-2" size={16} />
                Watch Speaker Reel
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CREDIBILITY BAR ═══════ */}
      <section className="border-y border-border bg-card/40">
        <div className="section-container py-10 lg:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-text-tertiary text-center mb-8">
            Trusted by Leaders Navigating the AI Shift
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {["WisdomClone.ai", "N5R.ai", "10XAI.news", "The Best Half Show", "YPO", "Vistage", "TEC"].map((name) => (
              <span key={name} className="text-sm font-heading font-semibold text-text-tertiary hover:text-muted-foreground transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="section-padding-sm">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { number: "27+", label: "Years in Digital Marketing" },
              { number: "5", label: "Companies Taken to $1B+" },
              { number: "15", label: "Countries, 5 Continents" },
              { number: "4", label: "Published Books" },
            ].map((stat, i) => (
              <motion.div key={i} {...stagger} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY ROMAN, WHY NOW ═══════ */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Why Roman, Why Now"
            title="From AI Experimentation to AI Execution"
            description="Most companies are stuck experimenting with AI tools. Roman delivers strategic frameworks, real-world case studies, and actionable operating models that move leadership teams from AI curiosity to AI-native execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Zap,
                title: "Operator, Not Commentator",
                desc: "Roman runs AI-native companies. He builds, deploys, and monetizes AI agents in real businesses every day. His keynotes are grounded in firsthand operational experience, not theory.",
              },
              {
                icon: TrendingUp,
                title: "Proven Business Impact",
                desc: "He has helped five companies reach $1 billion in revenue or valuation. Every keynote is built on real business outcomes across real estate, technology, media, and professional services.",
              },
              {
                icon: Users,
                title: "Executive-Ready Delivery",
                desc: "Designed for C-suite, board-level, and senior leadership audiences. No technical jargon. Pure strategic clarity and actionable next steps that teams can implement within 30 days.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated p-8 lg:p-10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ KEYNOTE TOPICS ═══════ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Keynote Topics"
            title="Keynotes That Change How Companies Operate"
            description="Each keynote is built for business leaders who need clarity on AI's impact on their organization, their team, and their competitive position."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Clone Your Mind", desc: "Build AI agents that replicate your best thinking, decision-making, and expertise at scale.", audience: "CEOs, founders, senior leaders" },
              { title: "Buy Back Your Time With AI", desc: "Eliminate low-value tasks, reclaim executive bandwidth, and redirect focus to work that drives the most value.", audience: "Executives, high-performing professionals" },
              { title: "The Organizational Singularity", desc: "What happens when AI can perform every back-office function in your company, and how to prepare for that moment.", audience: "C-suite, board members, strategy executives" },
              { title: "AI-Native vs AI-Assisted", desc: "Why companies built around AI from the ground up will outperform those bolting AI tools onto legacy processes.", audience: "Innovation leaders, CTOs, CEOs" },
            ].map((topic, i) => (
              <motion.div
                key={topic.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-8 group hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{topic.desc}</p>
                <p className="text-xs text-text-tertiary">Best for: {topic.audience}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/speaking-topics" className="btn-secondary">
              View All 7 Keynote Topics
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SPEAKER REEL ═══════ */}
      <section id="speaker-reel" className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="On Stage"
            title="See Roman in Action"
          />
          <motion.div {...fadeIn} className="relative aspect-video rounded-xl overflow-hidden card-elevated max-w-5xl mx-auto">
            <img
              src={stageImage}
              alt="Roman Bodnarchuk delivering a keynote on stage"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/15 backdrop-blur-md flex items-center justify-center border border-primary/25 cursor-pointer hover:bg-primary/25 hover:scale-105 transition-all duration-300">
                <Play size={32} className="text-primary ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Impact"
            title="What Audiences and Organizers Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Roman completely shifted how our leadership team thinks about AI. Within 90 days of his keynote, we had deployed three AI agents across our operations.", author: "CEO", org: "Enterprise SaaS Company" },
              { quote: "The most actionable AI keynote we have ever hosted. Roman does not deal in hype. He delivers strategic clarity that executives can act on immediately.", author: "Conference Director", org: "Technology Summit" },
              { quote: "We brought Roman in for our annual CEO retreat. The feedback was unanimous: this was the most valuable session of the entire event.", author: "Program Chair", org: "CEO Peer Group" },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated p-8 relative"
              >
                <Quote size={24} className="text-primary/20 mb-4" />
                <p className="text-sm text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKS + ECOSYSTEM ═══════ */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Authority"
            title="Books, Companies, and Media That Reinforce Authority"
          />

          {/* Books row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { img: bookMillionDollar, title: "The Million Dollar Minute", desc: "The definitive playbook on high-impact sales presentations and pitch mastery." },
              { img: bookCloneMind, title: "Clone Your Mind With AI", desc: "How to build AI systems that replicate your expertise, judgment, and decision-making at scale." },
              { img: bookBuyBackTime, title: "Buy Back Your Time With AI", desc: "A strategic guide to eliminating low-value work through AI-powered automation." },
            ].map((book, i) => (
              <motion.div
                key={book.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated overflow-hidden group"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={book.img}
                    alt={`${book.title} by Roman Bodnarchuk`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={960}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-heading font-semibold text-foreground mb-2">{book.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{book.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Companies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WisdomClone.ai", role: "Founder", desc: "The world's first human-intelligence-powered AI platform. Cloning expertise, judgment, and decision-making into autonomous AI personas." },
              { name: "N5R.ai", role: "CEO", desc: "North America's leading HubSpot AI Agency. Helping companies become AI-first and AI-native across sales and marketing." },
              { name: "10XAI.news", role: "Publisher", desc: "Daily AI intelligence briefing for business leaders, executives, and founders building AI-native organizations." },
              { name: "The Best Half Show", role: "Co-Host", desc: "Podcast with Mark Organ (founder of Eloqua, sold to Oracle for $871M) on business, leadership, and the AI-powered future." },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{item.role}</p>
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/books" className="btn-secondary">
              Explore All Books
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHO BOOKS ROMAN ═══════ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Ideal Audiences"
            title="Who Books Roman"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Enterprise Leadership Summits" },
              { icon: Users, label: "CEO Peer Groups (YPO, TEC, Vistage)" },
              { icon: Mic, label: "Industry Conferences" },
              { icon: TrendingUp, label: "Private Equity Portfolio Events" },
              { icon: BookOpen, label: "Sales Leadership Conferences" },
              { icon: Zap, label: "AI and Technology Summits" },
              { icon: Building2, label: "Corporate Strategy Retreats" },
              { icon: Users, label: "Board and Executive Offsites" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-6 card-elevated"
              >
                <item.icon size={26} className="text-primary mb-4" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="section-container relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">
              Ready to Book?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
              Bring Roman to Your Next Event
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Available for keynotes, executive workshops, private advisory sessions, and podcast appearances across North America in 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Submit a Speaking Inquiry
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link to="/event-organizers" className="btn-secondary">
                Info for Event Organizers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
