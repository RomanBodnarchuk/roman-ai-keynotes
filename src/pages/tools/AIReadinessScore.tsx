import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const questions = [
  { dimension: "AI Strategy", icon: "🎯", question: "Does your organization have a documented AI strategy aligned with business goals?", options: [
    { label: "No AI strategy exists", score: 1 },
    { label: "Informal discussions only", score: 2 },
    { label: "Strategy in development", score: 3 },
    { label: "Documented strategy, limited execution", score: 4 },
    { label: "Fully executed, reviewed quarterly", score: 5 },
  ]},
  { dimension: "Data Infrastructure", icon: "🗄️", question: "How would you describe your organization's data quality and accessibility for AI?", options: [
    { label: "Data is siloed and inconsistent", score: 1 },
    { label: "Some centralization, mostly manual", score: 2 },
    { label: "Partial data warehouse in place", score: 3 },
    { label: "Clean, centralized, mostly accessible", score: 4 },
    { label: "Real-time, AI-ready data pipelines", score: 5 },
  ]},
  { dimension: "AI Governance", icon: "🛡️", question: "What level of AI governance and risk management does your organization have?", options: [
    { label: "No policies or oversight", score: 1 },
    { label: "Aware of need, nothing formal", score: 2 },
    { label: "Basic policies drafted", score: 3 },
    { label: "Governance framework in place", score: 4 },
    { label: "Full AI ethics board, compliance protocols", score: 5 },
  ]},
  { dimension: "Organizational Readiness", icon: "👥", question: "How AI-literate is your leadership and workforce?", options: [
    { label: "AI is misunderstood or feared", score: 1 },
    { label: "Basic awareness, no training", score: 2 },
    { label: "Some training programs underway", score: 3 },
    { label: "Most leaders are AI-competent", score: 4 },
    { label: "AI champions at every level", score: 5 },
  ]},
  { dimension: "Technology Stack", icon: "⚙️", question: "How advanced is your current AI/automation technology stack?", options: [
    { label: "No AI tools deployed", score: 1 },
    { label: "Using basic SaaS AI features", score: 2 },
    { label: "Point solutions for 1–2 use cases", score: 3 },
    { label: "Integrated AI across 3+ departments", score: 4 },
    { label: "Custom AI agents and automation platform", score: 5 },
  ]},
  { dimension: "AI Investment", icon: "💰", question: "What is your current annual AI investment relative to operating budget?", options: [
    { label: "Zero dedicated AI budget", score: 1 },
    { label: "Under 0.5% of operating budget", score: 2 },
    { label: "0.5–2% of operating budget", score: 3 },
    { label: "2–5% of operating budget", score: 4 },
    { label: "5%+ with dedicated AI division", score: 5 },
  ]},
  { dimension: "Measurement & ROI", icon: "📊", question: "How do you measure the ROI and performance of AI initiatives?", options: [
    { label: "No measurement in place", score: 1 },
    { label: "Qualitative feedback only", score: 2 },
    { label: "Some KPIs, inconsistently tracked", score: 3 },
    { label: "KPI dashboards for major initiatives", score: 4 },
    { label: "Real-time ROI tracking with AI benchmarks", score: 5 },
  ]},
  { dimension: "Competitive Intelligence", icon: "🔭", question: "How aware are you of AI adoption in your industry and among competitors?", options: [
    { label: "Not tracking competitor AI moves", score: 1 },
    { label: "General awareness, no systematic tracking", score: 2 },
    { label: "Monitor occasionally", score: 3 },
    { label: "Regular competitive AI analysis", score: 4 },
    { label: "AI-powered competitive intelligence system", score: 5 },
  ]},
];

const maturityLevels = [
  { min: 8, max: 16, label: "Exploring", desc: "You're at the starting line. The opportunity cost of inaction is growing daily — competitors are pulling ahead. N5R.ai can compress your AI learning curve from years to weeks." },
  { min: 17, max: 24, label: "Experimenting", desc: "You've started but lack a unified strategy. Fragmented AI tools without integration architecture wastes 60–70% of potential value. N5R.ai builds the connective tissue." },
  { min: 25, max: 32, label: "Scaling", desc: "Strong foundation, but you're leaving ROI on the table. AI agents and CRM automation can 10X your output without adding headcount." },
  { min: 33, max: 40, label: "Leading", desc: "You're ahead of 89% of North American enterprises. The next move: from AI adoption to AI dominance and category leadership." },
];

const AIReadinessScore = () => {
  const [step, setStep] = useState<"intro" | "questions" | "capture" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "" });

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;
  const maturity = maturityLevels.find(m => totalScore >= m.min && totalScore <= m.max) || maturityLevels[0];

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [currentQ]: score });
    setTimeout(() => {
      if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
      else setStep("capture");
    }, 220);
  };

  const progress = ((currentQ + (answers[currentQ] ? 1 : 0)) / questions.length) * 100;

  return (
    <LeadMagnetLayout
      eyebrow="Free Assessment · 3 Minutes"
      title={<>What's Your <span className="text-primary">AI Readiness</span> Score?</>}
      description="The 8-dimension framework Fortune 500 teams use to benchmark AI maturity. See exactly where you stand — and where the gaps are costing you revenue."
    >
      {step === "intro" && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {[["8 Dimensions", "Strategy to measurement"], ["Instant Score", "Out of 40 with maturity level"], ["Action Plan", "3 specific next steps"]].map(([t, s]) => (
              <div key={t} className="card-elevated p-6">
                <div className="font-heading text-xl text-foreground tracking-[1px]">{t}</div>
                <div className="text-sm text-text-secondary mt-1">{s}</div>
              </div>
            ))}
          </div>
          <button onClick={() => setStep("questions")} className="btn-primary">
            Get My AI Readiness Score →
          </button>
          <p className="text-xs text-text-tertiary uppercase tracking-[2px]">No credit card. No spam. Results in 3 minutes.</p>
        </div>
      )}

      {step === "questions" && (
        <motion.div key={currentQ} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div>
            <div className="flex justify-between text-xs uppercase tracking-[2px] text-text-secondary mb-2">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span className="text-primary">{questions[currentQ].dimension}</span>
            </div>
            <div className="h-[2px] bg-border">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="text-4xl">{questions[currentQ].icon}</div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground italic leading-tight">{questions[currentQ].question}</h2>
          <div className="space-y-2">
            {questions[currentQ].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.score)}
                className="w-full text-left card-elevated p-4 hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4"
              >
                <span className="font-heading text-primary text-lg w-8">{String.fromCharCode(64 + opt.score)}</span>
                <span className="text-foreground">{opt.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === "capture" && (
        <div className="space-y-8">
          <div>
            <div className="text-primary font-heading text-2xl tracking-[1px] mb-2">Assessment Complete</div>
            <p className="text-text-secondary">Enter your details to unlock your full AI Readiness Report and personalized action plan.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setStep("results"); }} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="First Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
            </div>
            <FormField label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <FormField label="Your Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
            <button type="submit" className="btn-primary w-full">Unlock My Report →</button>
          </form>
        </div>
      )}

      {step === "results" && (
        <div className="space-y-10">
          <div className="card-elevated p-10 text-center">
            <div className="text-xs uppercase tracking-[2px] text-text-secondary mb-3">Your AI Readiness Score</div>
            <div className="font-heading text-7xl md:text-8xl text-primary leading-none">{totalScore}<span className="text-text-tertiary text-3xl">/{maxScore}</span></div>
            <div className="font-heading text-3xl text-foreground tracking-[2px] mt-4">{maturity.label}</div>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">{maturity.desc}</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-2xl text-foreground tracking-[1px]">Dimension Breakdown</h3>
            {questions.map((q, i) => {
              const score = answers[i] || 0;
              return (
                <div key={i} className="card-elevated p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground">{q.icon} {q.dimension}</span>
                    <span className="font-heading text-primary">{score}/5</span>
                  </div>
                  <div className="h-[2px] bg-border">
                    <div className="h-full bg-primary" style={{ width: `${(score / 5) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-primary p-10 text-center bg-primary/5">
            <h3 className="font-heading text-3xl text-foreground tracking-[1px] mb-3">Ready to 10X Your AI Score?</h3>
            <p className="text-text-secondary mb-6">N5R.ai has helped companies move from {maturity.label} to Leading in as little as 90 days.</p>
            <Link to="/contact" className="btn-primary">Book My Free Strategy Call →</Link>
          </div>
        </div>
      )}
    </LeadMagnetLayout>
  );
};

const FormField = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <label className="block text-xs uppercase tracking-[2px] text-text-secondary mb-2">{label}</label>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

export default AIReadinessScore;
