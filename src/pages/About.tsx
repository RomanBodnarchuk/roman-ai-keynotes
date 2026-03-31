import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
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
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">About Roman</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Entrepreneur. Operator.{" "}
                <span className="text-gradient">AI-Native Builder.</span>
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Roman Bodnarchuk is a globally recognized entrepreneur, AI strategist, and keynote speaker who helps companies transition from AI experimentation to AI-first execution.
                </p>
                <p>
                  As the founder of WisdomClone.ai, CEO of N5R.ai, publisher of 10XAI.news, and co-host of The Best Half Show with Mark Organ (founder of Eloqua, sold to Oracle for $871M), Roman operates at the intersection of artificial intelligence, business strategy, and organizational transformation.
                </p>
                <p>
                  His career spans 27 years of building, scaling, and advising companies across real estate, technology, media, and professional services. He founded N5R.com in 1998, served as Procter & Gamble's digital agency of record for six years, and has operated across 15 countries on 5 continents. He has helped five companies reach $1 billion in revenue or valuation.
                </p>
                <p>
                  Today, Roman operates an entirely AI-native organization with zero human employees. Every function below the founder level is owned by AI agents. His keynotes draw from this firsthand experience, not theory.
                </p>
                <p>
                  Roman is the author of four books including The Million Dollar Minute, Clone Your Mind With AI, and Buy Back Your Time With AI. Each book distills his experience into frameworks that leaders can apply immediately.
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

      {/* Stats */}
      <section className="section-padding-sm bg-card/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "27+", label: "Years in Digital Marketing" },
              { number: "5", label: "Companies to $1B+" },
              { number: "15", label: "Countries, 5 Continents" },
              { number: "0", label: "Human Employees (All AI)" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Roman Different */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Differentiation"
            title="What Makes His Perspective Different"
            description="Roman is not an AI theorist or commentator. He is an operator who builds and scales AI-native companies. Every insight he shares is tested in the market, not just discussed in a boardroom."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Operator, Not Commentator", desc: "Roman runs multiple AI-native companies with zero human employees. He builds, deploys, and monetizes AI agents every day. His keynotes come from firsthand operational experience." },
              { title: "Strategic, Not Technical", desc: "He translates AI complexity into strategic clarity. Audiences do not need a computer science degree. They need to know what AI means for their business, their team, and their competitive position." },
              { title: "Proven at Scale", desc: "27 years of building companies. Five taken to $1 billion. Procter & Gamble agency of record. Operated across 15 countries. This is not a first-time speaker testing ideas on your stage." },
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

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="section-container text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">
              Ready to Book?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Bring Roman to Your Next Event
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Available for keynotes, executive workshops, private advisory sessions, and podcast appearances across North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book Roman for Your Event
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link to="/speaking-topics" className="btn-secondary">
                View Keynote Topics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
