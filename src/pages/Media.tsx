import { motion } from "framer-motion";
import { ArrowRight, Play, Download, Camera, FileText, Mic, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import stageImage from "@/assets/stage-keynote.jpg";
import heroImage from "@/assets/hero-portrait.jpg";
import romanWithBook from "@/assets/roman-with-book.png";
import romanEvent1 from "@/assets/roman-event-1.jpg";
import romanEvent2 from "@/assets/roman-event-2.jpg";
import headshot from "@/assets/headshot-professional.jpg";
import bookMillionDollar from "@/assets/book-million-dollar.jpg";
import bookCloneMind from "@/assets/book-clone-mind.jpg";
import bookBuyBackTime from "@/assets/book-buy-back-time.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Media = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <SectionHeading
            label="Speaker Media Kit"
            title="Digital Media Kit for Roman Bodnarchuk"
            description="Everything event organizers, media outlets, speaker bureaus, and conference teams need in one place. Download approved assets, review bios, and submit a booking inquiry."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Roman
              <ArrowRight className="ml-2" size={16} />
            </Link>
            <a href="#headshots" className="btn-secondary">
              <Download className="mr-2" size={16} />
              Download Assets
            </a>
          </div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section className="section-padding bg-card/30 pt-0">
        <div className="section-container">
          <SectionHeading
            label="Speaker Reel"
            title="See Roman on Stage"
          />
          <motion.div {...fadeIn} className="relative aspect-video rounded-xl overflow-hidden card-elevated max-w-5xl mx-auto">
            <img
              src={stageImage}
              alt="Roman Bodnarchuk on stage"
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

      {/* Short Bio */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <SectionHeading title="Short Bio" />
          <motion.div {...fadeIn} className="card-elevated p-8">
            <p className="text-muted-foreground leading-relaxed">
              Roman Bodnarchuk is a globally recognized entrepreneur, AI strategist, and keynote speaker. As the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and co-host of The Best Half Show, Roman helps companies transition from AI experimentation to AI-first execution. With 27 years of digital marketing experience, operations across 15 countries on 5 continents, and a track record of helping five companies reach $1 billion in revenue or valuation, Roman brings operator-level credibility to every stage. He is the author of The Million Dollar Minute, Clone Your Mind With AI, and Buy Back Your Time With AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Long Bio */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-3xl">
          <SectionHeading title="Long Bio" />
          <motion.div {...fadeIn} className="card-elevated p-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Roman Bodnarchuk is one of North America's leading voices on AI-first business strategy, organizational transformation, and the future of work. He is the founder of WisdomClone.ai, the world's first human-intelligence-powered AI platform; CEO of N5R.ai, North America's leading HubSpot AI Agency; publisher of 10XAI.news, a daily AI intelligence briefing for executives; and co-host of The Best Half Show with Mark Organ, founder of Eloqua (sold to Oracle for $871M).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Roman's career spans 27 years of building, scaling, and advising companies across real estate, technology, media, and professional services. He founded N5R.com in 1998, served as Procter & Gamble's digital agency of record for six years, and has operated across 15 countries on 5 continents. He has helped five companies reach $1 billion in revenue or valuation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Roman operates an entirely AI-native organization with zero human employees. Every function below the founder level is owned by AI agents. His keynotes draw from this firsthand experience of building and operating AI-first companies, delivering strategic clarity that executive audiences can act on immediately.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Roman is the author of four books, including The Million Dollar Minute, Clone Your Mind With AI, and Buy Back Your Time With AI. He is based in Toronto, Ontario, Canada and speaks at conferences, CEO peer groups, corporate summits, and private equity events across the United States and Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emcee Intro */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <SectionHeading title="Approved Emcee Introduction" />
          <motion.div {...fadeIn} className="card-elevated p-8">
            <p className="text-muted-foreground leading-relaxed italic">
              "Please welcome to the stage Roman Bodnarchuk. Roman is one of North America's leading voices on AI-first business strategy. He is the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and the author of three books on AI, sales, and executive performance. With 27 years of experience and a track record of helping five companies reach $1 billion in revenue, Roman brings the operator's perspective to the AI conversation. Today, he is going to share how your organization can move from AI experimentation to AI execution. Please welcome Roman Bodnarchuk."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keynote Topics Summary */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading title="Available Keynote Topics" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Clone Your Mind", desc: "Build AI agents that replicate your best thinking and expertise at scale." },
              { title: "Buy Back Your Time With AI", desc: "Eliminate low-value tasks and reclaim executive bandwidth." },
              { title: "The Organizational Singularity", desc: "Prepare for AI performing every back-office function." },
              { title: "AI-Native vs AI-Assisted", desc: "Why AI-first companies outperform those bolting AI onto legacy." },
              { title: "Your Company Without Employees", desc: "The future of the fully AI-powered enterprise." },
              { title: "The Back Office Revolution", desc: "AI eliminating the traditional back office." },
              { title: "Infinite Scale Without Hiring", desc: "Grow revenue without proportionally growing headcount." },
            ].map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-elevated p-5"
              >
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{topic.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/speaking-topics" className="btn-secondary !py-2.5 !px-6 !text-xs">
              View Full Topic Details
              <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Headshots */}
      <section id="headshots" className="section-padding">
        <div className="section-container">
          <SectionHeading title="Approved Headshots" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[headshot, heroImage, romanEvent2, romanWithBook].map((img, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated overflow-hidden rounded-xl aspect-[3/4]"
              >
                <img
                  src={img}
                  alt={`Roman Bodnarchuk headshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={400}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Photos */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading title="Stage and Event Photography" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[stageImage, romanEvent1, romanWithBook].map((img, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated overflow-hidden rounded-xl aspect-video"
              >
                <img
                  src={img}
                  alt={`Roman Bodnarchuk stage photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={360}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Covers */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading title="Book Covers" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { img: bookMillionDollar, title: "The Million Dollar Minute" },
              { img: bookCloneMind, title: "Clone Your Mind With AI" },
              { img: bookBuyBackTime, title: "Buy Back Your Time With AI" },
            ].map((book, i) => (
              <motion.div
                key={book.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated overflow-hidden rounded-xl"
              >
                <img
                  src={book.img}
                  alt={`${book.title} book cover`}
                  className="w-full h-auto"
                  loading="lazy"
                  width={400}
                  height={600}
                />
                <div className="p-4 text-center">
                  <p className="text-sm font-heading font-semibold text-foreground">{book.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Kit + AV */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading title="Additional Resources" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Speaker One-Sheet", desc: "Downloadable PDF with topics, bio, and booking information." },
              { icon: Camera, title: "High-Res Headshots", desc: "Professional headshots for event promotion and media use." },
              { icon: Mic, title: "Emcee Intro Copy", desc: "Approved introduction copy for event emcees and moderators." },
              { icon: Monitor, title: "AV Requirements", desc: "Technical requirements for stage setup, audio, video, and presentation. Lavalier mic, confidence monitor, HDMI input." },
              { icon: FileText, title: "Approved Bios", desc: "Short and long-form bios ready for event programs and introductions." },
              { icon: Download, title: "Logo and Brand Assets", desc: "Logos for WisdomClone.ai, N5R.ai, 10XAI.news, and The Best Half Show." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated p-6 text-center cursor-pointer hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">
              Ready to Book?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Request Full Media Kit or Book Roman
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Submit a speaking inquiry and we will respond within 24 business hours with availability, pricing, media assets, and next steps.
            </p>
            <Link to="/contact" className="btn-primary">
              Submit a Speaking Inquiry
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
