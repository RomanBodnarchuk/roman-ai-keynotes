import { motion } from "framer-motion";
import { ArrowRight, Play, Download, Camera, FileText, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import stageImage from "@/assets/stage-keynote.jpg";
import heroImage from "@/assets/hero-portrait.jpg";
import romanWithBook from "@/assets/roman-with-book.png";
import romanEvent1 from "@/assets/roman-event-1.jpg";
import romanEvent2 from "@/assets/roman-event-2.jpg";
import headshot from "@/assets/headshot-professional.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Media = () => {
  return (
    <PageLayout>
      {/* Speaker Reel */}
      <section className="section-padding">
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
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30 cursor-pointer hover:bg-primary/30 transition-colors">
                <Play size={32} className="text-primary ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast Appearances */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Podcast & Interviews"
            title="Featured Appearances"
            description="Roman is a frequent guest on business, AI, and leadership podcasts. Here are selected recent appearances."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Future of AI-Native Companies", show: "The Best Half Show", type: "Podcast" },
              { title: "Why Every CEO Needs an AI Strategy in 2026", show: "Business Leadership Today", type: "Interview" },
              { title: "Clone Your Mind: The AI Framework for Scale", show: "Tech Disruptors Podcast", type: "Podcast" },
              { title: "Digital Workers and the End of Traditional Hiring", show: "Innovation Summit", type: "Panel" },
              { title: "AI Agents in Enterprise Operations", show: "Enterprise AI Weekly", type: "Interview" },
              { title: "From AI Experimentation to AI Execution", show: "CEO Roundtable", type: "Keynote" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated p-6 group hover:border-primary/30 transition-colors cursor-pointer"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.type}</span>
                <h3 className="text-base font-heading font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.show}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Photos */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="On Stage"
            title="Stage and Event Photography"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[stageImage, romanWithBook, romanEvent1].map((img, i) => (
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

      {/* Media Kit */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Media Kit"
            title="Digital Speaker Media Kit"
            description="Everything event organizers, media outlets, and speaker bureaus need in one place."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Camera, title: "Headshots", desc: "High-resolution professional headshots for event promotion and media use." },
              { icon: FileText, title: "Bios (Short & Long)", desc: "Approved short and long-form bios ready for event programs and introductions." },
              { icon: Mic, title: "Emcee Intro Copy", desc: "Approved introduction copy for event emcees and moderators." },
              { icon: Download, title: "Speaker One-Sheet", desc: "Downloadable PDF with topics, bio, and booking information." },
              { icon: FileText, title: "AV Requirements", desc: "Technical requirements for stage setup, audio, video, and presentation needs." },
              { icon: Download, title: "Logo & Brand Assets", desc: "Logos for WisdomClone.ai, N5R.ai, 10XAI.news, and The Best Half Show." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated p-6 text-center cursor-pointer hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Headshots Section */}
          <div className="mt-16">
            <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-8">Approved Headshots</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[headshot, heroImage, romanEvent2, romanWithBook].map((img, i) => (
                <div key={i} className="card-elevated overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src={img}
                    alt={`Roman Bodnarchuk headshot ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={300}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bios */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Short Bio</h3>
            <div className="card-elevated p-6 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Roman Bodnarchuk is a globally recognized entrepreneur, AI strategist, and keynote speaker. As the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and co-host of The Best Half Show, Roman helps companies transition from AI experimentation to AI-first execution. He is the author of The Million Dollar Minute, Clone Your Mind With AI, and Buy Back Your Time With AI.
              </p>
            </div>

            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Approved Emcee Introduction</h3>
            <div className="card-elevated p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Please welcome to the stage Roman Bodnarchuk. Roman is one of North America's leading voices on AI-first business strategy. He is the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and the author of three books on AI, sales, and executive performance. Today, he is going to share how your organization can move from AI experimentation to AI execution. Please welcome Roman Bodnarchuk."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Request Full Media Kit
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
