import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import bookMillionDollar from "@/assets/book-million-dollar.jpg";
import bookCloneMind from "@/assets/book-clone-mind.jpg";
import bookBuyBackTime from "@/assets/book-buy-back-time.jpg";

const books = [
  {
    img: bookMillionDollar,
    title: "The Million Dollar Minute",
    tagline: "The definitive guide to high-impact sales presentations that close.",
    description: "Before AI became the dominant conversation in business, Roman built his reputation on one core skill: the ability to sell at the highest level. The Million Dollar Minute distills decades of experience into a practical, proven system for delivering presentations that generate revenue. It is the foundation of Roman's approach to business communication and persuasion.",
    learns: [
      "How to structure a presentation that compels action in under 60 seconds",
      "The psychology of high-stakes selling to C-suite and enterprise buyers",
      "Real-world scripts and frameworks from hundreds of millions in closed deals",
      "Why most presentations fail and how to make yours unforgettable",
    ],
    connection: "Roman's keynotes carry the same precision and persuasive structure outlined in this book. When he takes the stage, every minute is engineered for maximum impact.",
  },
  {
    img: bookCloneMind,
    title: "Clone Your Mind With AI",
    tagline: "Build AI systems that replicate your best thinking and scale your expertise.",
    description: "Clone Your Mind With AI is Roman's framework for turning your knowledge, judgment, and decision-making into AI-powered systems that work at scale. This is not a technical manual. It is a strategic guide for leaders who want to multiply their influence without multiplying their hours. It draws directly from the systems Roman has built inside WisdomClone.ai.",
    learns: [
      "How to identify and codify your most valuable expertise",
      "The architecture of a personal AI clone that reflects your thinking",
      "How to deploy AI agents across sales, operations, and leadership functions",
      "Why AI cloning is the next frontier in executive productivity and scale",
    ],
    connection: "The Clone Your Mind keynote is built directly from this book. Roman demonstrates live how leaders can begin the process of cloning their expertise into AI systems.",
  },
  {
    img: bookBuyBackTime,
    title: "Buy Back Your Time With AI",
    tagline: "Eliminate low-value tasks. Reclaim executive bandwidth. Focus on what matters.",
    description: "Buy Back Your Time With AI is a practical guide for busy executives who want to reclaim their most valuable asset: time. Roman outlines a clear system for identifying, delegating, and automating the tasks that consume your day without driving results. It is designed for leaders who are ready to operate at a higher level.",
    learns: [
      "How to audit your time and identify immediate automation opportunities",
      "The delegation matrix for AI: what to automate, delegate, and protect",
      "Tools and systems you can implement within 30 days",
      "The financial ROI of reclaimed executive time",
    ],
    connection: "The Buy Back Your Time keynote delivers these frameworks live, with interactive exercises that help audiences begin reclaiming their time before they leave the room.",
  },
];

const Books = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Published Author"
            title="Books That Define the AI-First Playbook"
            description="Each book represents a core pillar of Roman's thinking on AI, business, and leadership. Together, they form a comprehensive framework for executives navigating the AI shift."
          />

          <div className="space-y-20">
            {books.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="card-elevated overflow-hidden rounded-xl max-w-sm mx-auto lg:mx-0">
                    <img
                      src={book.img}
                      alt={`${book.title} book cover`}
                      className="w-full h-auto"
                      loading="lazy"
                      width={640}
                      height={960}
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{book.title}</h2>
                  <p className="text-primary font-medium mb-4">{book.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{book.description}</p>
                  
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-4">What You Will Learn</h4>
                  <ul className="space-y-3 mb-6">
                    {book.learns.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-muted-foreground italic">{book.connection}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/contact" className="btn-primary">
              Book a Keynote Based on These Ideas
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Books;
