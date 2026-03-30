import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const topics = [
  {
    title: "Clone Your Mind",
    promise: "Learn how to build AI agents that replicate your best thinking, decision-making, and expertise at scale.",
    audience: "CEOs, founders, and senior leaders who want to multiply their impact without multiplying their hours.",
    takeaways: [
      "How to identify and codify your most valuable knowledge into AI systems",
      "The framework for building AI agents that think and respond like you",
      "Real-world case studies of leaders who have cloned their expertise",
      "How to deploy your AI clone across sales, customer success, and leadership functions",
      "The competitive advantage of being the first in your industry to scale expertise with AI",
    ],
  },
  {
    title: "Buy Back Your Time With AI",
    promise: "Eliminate low-value tasks, reclaim executive bandwidth, and redirect your focus to the work that drives the most value.",
    audience: "Executives and high-performing professionals drowning in operational tasks who want to 10x their leverage.",
    takeaways: [
      "How to audit your calendar and identify tasks AI can handle today",
      "The delegation matrix: what to automate, what to delegate to AI agents, and what to keep",
      "Tools, workflows, and systems to implement within 30 days",
      "How to build an AI-powered personal operating system",
      "The ROI of reclaimed time: from hours saved to revenue generated",
    ],
  },
  {
    title: "The Organizational Singularity",
    promise: "What happens when AI can perform every back-office function in your company, and how to prepare your organization for that moment.",
    audience: "C-suite leaders, board members, and strategy executives responsible for long-term organizational design.",
    takeaways: [
      "The timeline for AI replacing operational functions across industries",
      "How to redesign your organizational structure around AI capabilities",
      "The new roles, skills, and leadership competencies required",
      "Case studies of companies that have already begun this transition",
      "A strategic planning framework for the AI-native organization",
    ],
  },
  {
    title: "AI-Native vs AI-Assisted",
    promise: "Why companies built around AI from the ground up will outperform those simply bolting AI tools onto legacy processes.",
    audience: "Innovation leaders, CTOs, and CEOs evaluating their company's AI strategy and competitive positioning.",
    takeaways: [
      "The critical difference between AI-assisted workflows and AI-native architecture",
      "Why incremental AI adoption creates a false sense of progress",
      "How to assess whether your company is truly AI-first or just AI-curious",
      "The competitive dynamics of AI-native companies in every major industry",
      "A roadmap for transitioning from AI-assisted to AI-native operations",
    ],
  },
  {
    title: "Your Company Without Employees",
    promise: "Explore the future of the fully AI-powered enterprise and what it means for growth, profitability, and leadership.",
    audience: "Private equity leaders, portfolio company CEOs, and growth-stage founders optimizing for scale and efficiency.",
    takeaways: [
      "How AI agents are replacing entire departments in forward-thinking companies",
      "The financial model of a company with AI-powered labor",
      "Ethical, legal, and cultural considerations for the transition",
      "How to lead humans and AI workers in the same organization",
      "The first steps to pilot an AI-only function inside your business",
    ],
  },
  {
    title: "The Back Office Revolution",
    promise: "How AI is eliminating the traditional back office and creating opportunities for radical operational efficiency.",
    audience: "COOs, CFOs, and operational leaders responsible for scaling business infrastructure.",
    takeaways: [
      "Which back-office functions are most ready for AI automation today",
      "The cost savings and speed improvements achievable within 12 months",
      "How to manage the human transition as AI absorbs operational roles",
      "Real-world implementations across finance, HR, legal, and compliance",
      "Building the AI-powered operations team of the future",
    ],
  },
  {
    title: "Infinite Scale Without Hiring",
    promise: "How to grow revenue, output, and market presence without proportionally growing headcount.",
    audience: "Sales leaders, growth executives, and founders seeking scalable, capital-efficient growth strategies.",
    takeaways: [
      "The AI-powered sales and marketing stack that scales without new hires",
      "How to deploy digital workers across lead generation, outreach, and customer success",
      "The economics of AI-powered growth vs traditional hiring-based growth",
      "Building a revenue engine that compounds without adding fixed costs",
      "Case studies of companies that have achieved 10x growth with flat headcount",
    ],
  },
];

const SpeakingTopics = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Speaking Topics"
            title="Keynotes Built for Business Leaders"
            description="Each topic is designed for executive audiences who need strategic clarity on AI's impact on growth, operations, leadership, and competitive advantage. Every keynote is customized to your event, industry, and audience."
          />

          <div className="space-y-8">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-elevated p-8 lg:p-10"
              >
                <div className="flex flex-col lg:flex-row lg:gap-12">
                  <div className="lg:w-2/5 mb-6 lg:mb-0">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {topic.promise}
                    </p>
                    <div className="flex items-start gap-2 text-sm">
                      <Users size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic.audience}</span>
                    </div>
                  </div>
                  <div className="lg:w-3/5 lg:border-l lg:border-border lg:pl-12">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                      What Your Audience Will Learn
                    </h4>
                    <ul className="space-y-3">
                      {topic.takeaways.map((t, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Every keynote is customized. Let us know about your event and audience.</p>
            <Link to="/contact" className="btn-primary">
              Inquire About a Keynote
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SpeakingTopics;
