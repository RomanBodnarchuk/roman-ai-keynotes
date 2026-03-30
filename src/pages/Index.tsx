import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Mic, Building2, Users, TrendingUp, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-portrait.jpg";
import stageImage from "@/assets/stage-keynote.jpg";
import bookMillionDollar from "@/assets/book-million-dollar.jpg";
import bookCloneMind from "@/assets/book-clone-mind.jpg";
import bookBuyBackTime from "@/assets/book-buy-back-time.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
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
        description: "AI keynote speaker helping companies transition from AI experimentation to AI-first execution.",
        url: "https://romanbodnarchuk.com",
        knowsAbout: ["Artificial Intelligence", "AI Strategy", "Digital Transformation", "Keynote Speaking"],
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

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        
        {/* Hero portrait */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
          <img
            src={heroImage}
            alt="Roman Bodnarchuk, AI keynote speaker"
            className="w-full h-full object-cover object-center opacity-60"
            width={896}
            height={1152}
          />
        </div>

        <div className="section-container relative z-20 py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">
                AI Keynote Speaker &middot; Strategist &middot; Author
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.05] mb-6"
            >
              AI Keynotes for Companies Ready to Become{" "}
              <span className="text-gradient">AI-First</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Roman Bodnarchuk helps executive teams understand how AI agents, digital workers, and AI-native operating systems will reshape growth, leadership, and competitive advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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

      {/* Trust Logos */}
      <section className="border-y border-border bg-card/50">
        <div className="section-container py-10 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary text-center mb-8">
            Trusted by Leaders Navigating the AI Shift
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {["WisdomClone.ai", "N5R.ai", "10XAI.news", "The Best Half Show", "YPO", "Vistage"].map((name) => (
              <span key={name} className="text-sm font-heading font-semibold text-text-tertiary hover:text-muted-foreground transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Why Roman, Why Now"
            title="From AI Experimentation to AI Execution"
            description="Most companies are stuck experimenting with AI tools. Roman delivers the strategic frameworks, real-world case studies, and actionable operating models that move leadership teams from AI curiosity to AI-native execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Native Strategy",
                desc: "Move beyond bolt-on AI tools. Learn how to redesign operations, teams, and workflows around AI agents and digital workers from day one.",
              },
              {
                icon: TrendingUp,
                title: "Proven Business Impact",
                desc: "Roman draws from founding and scaling multiple AI companies. Every keynote is grounded in real business outcomes, not theory.",
              },
              {
                icon: Users,
                title: "Executive-Ready Delivery",
                desc: "Designed for C-suite, board-level, and senior leadership audiences. No technical jargon. Pure strategic clarity and actionable next steps.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated p-8 lg:p-10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Topics */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Keynote Topics"
            title="Keynotes That Change How Companies Operate"
            description="Each keynote is built for business leaders who need clarity on AI's impact on their organization, their team, and their competitive position."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Clone Your Mind", desc: "How to build AI agents that replicate your best thinking, decision-making, and expertise at scale." },
              { title: "Buy Back Your Time With AI", desc: "Eliminate low-value tasks and reclaim executive bandwidth using AI-powered automation and delegation." },
              { title: "The Organizational Singularity", desc: "What happens when AI can perform every back-office function. How to prepare your company for that moment." },
              { title: "AI-Native vs AI-Assisted", desc: "Why companies built around AI from the ground up will outperform those adding AI to legacy processes." },
            ].map((topic, i) => (
              <motion.div
                key={topic.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-8 group hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/speaking-topics" className="btn-secondary">
              View All Topics
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Published Author"
            title="Books, Companies, and Media That Reinforce Authority"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{book.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{book.desc}</p>
                </div>
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

      {/* Who Roman Speaks For */}
      <section className="section-padding bg-card/30">
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
              { icon: Zap, label: "AI & Technology Summits" },
              { icon: Building2, label: "Corporate Strategy Retreats" },
              { icon: Users, label: "Board & Executive Offsites" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...stagger}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-6 card-elevated"
              >
                <item.icon size={28} className="text-primary mb-4" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section id="speaker-reel" className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="On Stage"
            title="See Roman in Action"
          />
          <motion.div {...fadeIn} className="relative aspect-video rounded-xl overflow-hidden card-elevated">
            <img
              src={stageImage}
              alt="Roman Bodnarchuk delivering a keynote on stage"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30 cursor-pointer hover:bg-primary/30 transition-colors">
                <Play size={32} className="text-primary ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Impact"
            title="What Audiences and Organizers Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Roman completely shifted how our leadership team thinks about AI. Within 90 days of his keynote, we had deployed three AI agents across our operations.", author: "CEO, Enterprise SaaS Company" },
              { quote: "The most actionable AI keynote we have ever hosted. Roman does not deal in hype. He delivers strategic clarity that executives can act on immediately.", author: "Conference Director, Tech Summit" },
              { quote: "We brought Roman in for our annual CEO retreat. The feedback was unanimous: this was the most valuable session of the entire event.", author: "Program Chair, CEO Peer Group" },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated p-8"
              >
                <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <p className="text-xs text-muted-foreground font-semibold">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Ecosystem"
            title="Companies, Media, and Platforms"
            description="Roman's authority is reinforced by the companies he has founded, the media properties he publishes, and the audiences he serves."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WisdomClone.ai", desc: "AI platform for cloning expertise, judgment, and decision-making into intelligent agents." },
              { name: "N5R.ai", desc: "AI-powered sales and marketing company serving real estate and enterprise clients." },
              { name: "10XAI.news", desc: "Daily AI intelligence briefing for business leaders and executives." },
              { name: "The Best Half Show", desc: "Podcast exploring business, leadership, and the AI-powered future of work." },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-6"
              >
                <h3 className="text-base font-heading font-semibold text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="section-container relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">
              Ready to Book?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
              Bring Roman to Your Next Event
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Available for keynotes, executive workshops, private advisory sessions, and podcast appearances across North America.
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
