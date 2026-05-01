import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const questions = [
  { q: "Are your HubSpot workflows triggered by AI signals (intent, behavior scoring, predictive lead scoring)?", options: ["Not at all", "Basic if/then logic only", "Some AI-powered scoring", "AI drives most workflows", "Fully AI-orchestrated"] },
  { q: "Do you use AI to personalize outbound email content at the individual contact level?", options: ["Generic templates", "Token merges only", "Some AI subject lines", "AI body + CTA personalization", "End-to-end AI sequences"] },
  { q: "Is your sales team augmented by AI agents for research, follow-up, and meeting prep?", options: ["No AI tools", "ChatGPT for ad-hoc tasks", "AI research before calls", "AI handles full follow-up", "AI agents own the pipeline"] },
  { q: "Are your HubSpot reports surfacing AI-derived insights (churn risk, expansion signals)?", options: ["Standard reports only", "Custom dashboards", "Some predictive fields", "AI insights embedded", "AI-generated weekly briefs"] },
  { q: "Do you have an AI-powered chat/voice agent qualifying inbound leads 24/7?", options: ["No bot at all", "Static FAQ bot", "Basic AI chatbot", "AI qualifies and books", "AI clone of your top closer"] },
  { q: "Is your content engine (blog, social, email) producing 10x more output via AI than 12 months ago?", options: ["Same volume as before", "Slight increase", "2-3x more output", "5-10x more output", "10x+ AI-driven content engine"] },
  { q: "Are your customer service tickets resolved by AI agents before reaching humans?", options: ["100% human-handled", "AI suggests responses", "AI deflects 25%", "AI deflects 50%+", "AI deflects 80%+ with CSAT > 90"] },
];

const grades = [
  { min: 0, max: 14, grade: "D", label: "Critically Behind", desc: "Your HubSpot is operating like it's 2019. Competitors using AI-native automation are pulling 3-5x your conversion rates." },
  { min: 15, max: 21, grade: "C", label: "Below Standard", desc: "You have HubSpot, but you're using maybe 20% of its AI-era potential. Major leakage in pipeline velocity." },
  { min: 22, max: 28, grade: "B", label: "Solid Foundation", desc: "You're ahead of most. The next 90 days could double your output without adding headcount." },
  { min: 29, max: 35, grade: "A", label: "AI-Native Operation", desc: "Elite tier. The opportunity now is to compound this advantage with AI clones and agentic workflows." },
];

const HubSpotAudit = () => {
  const [step, setStep] = useState<"intro" | "questions" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const grade = grades.find(g => score >= g.min && score <= g.max) || grades[0];

  const handleAnswer = (val: number) => {
    setAnswers({ ...answers, [currentQ]: val });
    setTimeout(() => {
      if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
      else setStep("results");
    }, 220);
  };

  return (
    <LeadMagnetLayout
      eyebrow="7-Question Audit · 2 Minutes"
      title={<>HubSpot <span className="text-primary">AI Automation</span> Audit</>}
      description="Grade your HubSpot stack against AI-native enterprises. Get a letter grade (A-D) plus the three highest-leverage upgrades for your specific maturity level."
    >
      {step === "intro" && (
        <div className="space-y-10">
          <div className="card-elevated p-8">
            <h3 className="font-heading text-2xl text-foreground tracking-[1px] mb-4">What This Audit Reveals</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>→ Where your HubSpot stack is leaking pipeline</li>
              <li>→ How AI-native competitors are running their playbook</li>
              <li>→ The 3 specific automations to deploy this quarter</li>
              <li>→ Letter grade benchmark vs. top 1% of HubSpot users</li>
            </ul>
          </div>
          <button onClick={() => setStep("questions")} className="btn-primary">Start the Audit →</button>
        </div>
      )}

      {step === "questions" && (
        <motion.div key={currentQ} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div>
            <div className="flex justify-between text-xs uppercase tracking-[2px] text-text-secondary mb-2">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span className="text-primary">HubSpot AI Audit</span>
            </div>
            <div className="h-[2px] bg-border">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl italic text-foreground leading-tight">{questions[currentQ].q}</h2>
          <div className="space-y-2">
            {questions[currentQ].options.map((opt, i) => (
              <button key={opt} onClick={() => handleAnswer(i + 1)}
                className="w-full text-left card-elevated p-4 hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4">
                <span className="font-heading text-primary text-lg w-8">{i + 1}</span>
                <span className="text-foreground">{opt}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === "results" && (
        <div className="space-y-8">
          <div className="card-elevated p-10 text-center">
            <div className="text-xs uppercase tracking-[2px] text-text-secondary mb-3">Your HubSpot AI Grade</div>
            <div className="font-heading text-9xl text-primary leading-none">{grade.grade}</div>
            <div className="font-heading text-2xl text-foreground tracking-[2px] mt-4">{grade.label}</div>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">{grade.desc}</p>
            <div className="text-sm text-text-tertiary mt-4">Score: {score}/35</div>
          </div>
          <div className="border border-primary p-10 text-center bg-primary/5">
            <h3 className="font-heading text-3xl text-foreground tracking-[1px] mb-3">Book a Live HubSpot AI Audit</h3>
            <p className="text-text-secondary mb-6">N5R.ai is a HubSpot Diamond Partner. We'll walk through your portal live and show you exactly which workflows to upgrade first.</p>
            <Link to="/contact" className="btn-primary">Book My Live Audit →</Link>
          </div>
        </div>
      )}
    </LeadMagnetLayout>
  );
};

export default HubSpotAudit;
