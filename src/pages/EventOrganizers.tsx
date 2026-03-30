import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Users, Mic, Presentation, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const EventOrganizers = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <SectionHeading
            label="For Event Organizers & Bureaus"
            title="Book Roman for Your Next Event"
            description="Roman is a professional, reliable, and high-impact keynote speaker. This page is designed to give you everything you need to evaluate fit, understand logistics, and submit an inquiry."
          />
        </div>
      </section>

      {/* Why Roman is Easy to Work With */}
      <section className="section-padding bg-card/30 pt-0">
        <div className="section-container">
          <SectionHeading title="Why Roman Is Easy to Work With" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Responds to inquiries within 24 business hours",
              "Customizes every keynote to your audience and industry",
              "Provides pre-event consultation calls at no additional cost",
              "Arrives prepared, professional, and on time",
              "Handles his own AV coordination and slide management",
              "Available for post-event Q&A, book signings, and meet-and-greets",
              "Provides approved bios, headshots, and intro copy in advance",
              "Works seamlessly with speaker bureaus and event production teams",
              "Flexible with event formats: in-person, virtual, and hybrid",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Audiences */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading title="Ideal Audience Types" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "CEOs and C-suite executives",
              "YPO, TEC, and Vistage members",
              "Private equity partners and portfolio CEOs",
              "Enterprise leadership teams",
              "Sales and revenue leaders",
              "Technology and innovation executives",
              "Board members and advisory boards",
              "Conference and summit attendees",
              "Industry association members",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <Users size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Formats */}
      <section className="section-padding bg-card/30">
        <div className="section-container">
          <SectionHeading title="Event Formats and Options" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Keynote Address", length: "45 to 90 minutes", desc: "High-impact keynote customized to your event theme and audience. Includes pre-event consultation." },
              { icon: Presentation, title: "Executive Workshop", length: "Half-day or full-day", desc: "Interactive, hands-on workshop for leadership teams focused on AI strategy and implementation." },
              { icon: MessageSquare, title: "Executive Briefing", length: "60 to 90 minutes", desc: "Private, intimate session for C-suite or board-level audiences. Strategic, confidential, actionable." },
              { icon: Clock, title: "Fireside Chat / Panel", length: "30 to 60 minutes", desc: "Moderated conversation or panel appearance on AI strategy, leadership, and business transformation." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">{item.length}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Audiences Walk Away With */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <SectionHeading title="What Your Audience Will Walk Away With" />
          <motion.div {...fadeIn} className="space-y-4">
            {[
              "A clear understanding of how AI agents and digital workers will transform their industry",
              "Actionable frameworks they can apply within 30 days",
              "Strategic clarity on the difference between AI-assisted and AI-native operations",
              "Confidence in leading AI transformation within their organization",
              "Specific tools, systems, and resources to continue learning after the event",
              "A renewed sense of urgency and opportunity around AI adoption",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30">
        <div className="section-container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-6">
            {[
              { q: "How far in advance should we book Roman?", a: "Roman's calendar fills quickly. We recommend reaching out at least 8 to 12 weeks in advance. For high-demand periods (Q1 and Q4), earlier is better." },
              { q: "Does Roman customize his keynotes?", a: "Yes. Every keynote is customized to the event theme, industry, and audience. Roman conducts a pre-event consultation to understand your goals and tailor the content." },
              { q: "What is Roman's speaking fee?", a: "Speaking fees vary based on format, duration, travel requirements, and exclusivity. Please submit an inquiry for a custom quote." },
              { q: "Does Roman offer virtual keynotes?", a: "Yes. Roman delivers in-person, virtual, and hybrid keynotes with full production quality in every format." },
              { q: "Can Roman do a book signing after his keynote?", a: "Absolutely. Book signings and meet-and-greet sessions are available as add-ons to any keynote engagement." },
              { q: "Does Roman work with speaker bureaus?", a: "Yes. Roman has a strong track record working with speaker bureaus and is open to new bureau partnerships." },
              { q: "What are Roman's AV and stage requirements?", a: "Roman provides a detailed AV requirements document with every booking confirmation. Standard requirements include a lavalier microphone, confidence monitor, and HDMI input for slides." },
              { q: "Is Roman available for international events?", a: "Roman primarily speaks across the United States and Canada. International availability is considered on a case-by-case basis." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-elevated p-6"
              >
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Ready to Book Roman?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Submit a speaking inquiry and our team will respond within 24 business hours with availability, pricing, and next steps.
            </p>
            <Link to="/contact" className="btn-primary">
              Submit a Speaking Inquiry
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How far in advance should we book Roman Bodnarchuk?", acceptedAnswer: { "@type": "Answer", text: "Roman's calendar fills quickly. We recommend reaching out at least 8 to 12 weeks in advance." }},
          { "@type": "Question", name: "Does Roman customize his keynotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every keynote is customized to the event theme, industry, and audience." }},
          { "@type": "Question", name: "Does Roman offer virtual keynotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Roman delivers in-person, virtual, and hybrid keynotes." }},
        ],
      })}} />
    </PageLayout>
  );
};

export default EventOrganizers;
