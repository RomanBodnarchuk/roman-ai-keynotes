import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-portrait.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">About Roman</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Entrepreneur. AI Strategist. Keynote Speaker.
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Roman Bodnarchuk is a globally recognized entrepreneur, AI strategist, and keynote speaker who helps companies transition from AI experimentation to AI-first execution.
                </p>
                <p>
                  As the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and co-host of The Best Half Show Podcast, Roman operates at the intersection of artificial intelligence, business strategy, and organizational transformation.
                </p>
                <p>
                  His career spans decades of building, scaling, and advising companies across real estate, technology, media, and professional services. He has worked with thousands of business leaders and generated hundreds of millions of dollars in revenue for the companies he has founded and advised.
                </p>
                <p>
                  Roman is the author of four books and a sought-after voice in the AI transformation space. Each book distills his experience into frameworks that leaders can apply immediately to drive measurable outcomes.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="card-elevated overflow-hidden rounded-xl">
                <img
                  src={heroImage}
                  alt="Roman Bodnarchuk portrait"
                  className="w-full h-auto"
                  loading="lazy"
                  width={896}
                  height={1152}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Roman Different */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading
            label="Differentiation"
            title="What Makes His Perspective Different"
            description="Roman is not an AI theorist. He is an operator who builds and scales AI companies. Every insight he shares is tested in the market, not just discussed in a boardroom."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Builder, Not Just Speaker", desc: "Roman runs multiple AI companies. He builds, deploys, and monetizes AI systems in real businesses every day. His keynotes are grounded in firsthand operational experience." },
              { title: "Strategic, Not Technical", desc: "He translates AI complexity into strategic clarity. His audiences do not need a computer science degree. They need to know what AI means for their business, their team, and their competitive position." },
              { title: "Proven Revenue Generator", desc: "Roman has generated hundreds of millions in revenue across his career. He understands growth, sales, leadership, and operations at scale. AI is the lens, but business performance is the outcome." },
              { title: "Trusted by Premium Audiences", desc: "Roman is regularly invited to speak at CEO peer groups, enterprise leadership summits, and private equity events. The audiences that book him expect substance, not spectacle." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-8"
              >
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizers Book Him */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="For Event Organizers"
            title="Why Organizers Book Roman"
          />
          <motion.div {...fadeIn} className="space-y-6">
            {[
              "Delivers immediately actionable frameworks, not abstract AI philosophy.",
              "Speaks the language of CEOs, founders, and executive teams.",
              "Customizes every keynote to the specific audience, industry, and event goals.",
              "Professional, reliable, and easy to work with from inquiry to stage.",
              "Backed by a portfolio of companies, books, and media that reinforce credibility.",
              "Leaves audiences with a clear understanding of what to do next with AI.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Book Roman for Your Event
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
