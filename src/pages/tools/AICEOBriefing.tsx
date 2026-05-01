import { useState } from "react";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const days = [
  { day: "Day 1", title: "The AI-Native Company Thesis", desc: "Why every company will be rebuilt as an AI-first organization within 36 months — and the executive playbook for leading the transformation instead of being replaced by it." },
  { day: "Day 2", title: "Your Digital Workforce Strategy", desc: "How to deploy AI agents across sales, marketing, support, and operations. The exact org chart for a billion-dollar company with zero employees." },
  { day: "Day 3", title: "Knowledge Capture & AI Clones", desc: "Why founder/CEO IP is the highest-leverage asset to digitize. How WisdomClone-style AI clones 10x your output without 10x your hours." },
  { day: "Day 4", title: "AI Marketing & Pipeline Automation", desc: "The HubSpot + AI agent stack that's generating 7-figure pipelines for N5R.ai clients. Including the exact workflows you can copy." },
  { day: "Day 5", title: "Your 90-Day Execution Plan", desc: "A specific, prioritized rollout for your company. What to build first, what to outsource, what to ignore. Plus a private invite to Roman's CEO mastermind." },
];

const AICEOBriefing = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <LeadMagnetLayout
      eyebrow="Free Email Series · 5 Days"
      title={<>The <span className="text-primary">5-Day AI CEO</span> Briefing</>}
      description="A 5-day private email series for CEOs and founders building AI-native companies. Written by Roman Bodnarchuk — solo founder, zero employees, $1B trajectory."
    >
      <div className="space-y-12">
        <div className="space-y-[2px]">
          {days.map((d, i) => (
            <div key={i} className="card-elevated p-6 grid grid-cols-[80px_1fr] gap-6 items-start">
              <div>
                <div className="font-heading text-3xl text-primary leading-none">0{i + 1}</div>
                <div className="text-xs uppercase tracking-[2px] text-text-tertiary mt-1">{d.day}</div>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground italic mb-2">{d.title}</h3>
                <p className="text-text-secondary">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-elevated p-8 space-y-4">
            <h3 className="font-heading text-3xl text-foreground tracking-[1px]">Send Me Day 1 Now</h3>
            <p className="text-text-secondary">Free. No upsell. Reserved for sitting CEOs, founders, and senior execs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <FormField label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
            </div>
            <FormField label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
            <button type="submit" className="btn-primary w-full">Start the Briefing →</button>
          </form>
        ) : (
          <div className="card-elevated p-10 text-center border-primary">
            <div className="font-heading text-3xl text-primary tracking-[1px] mb-3">You're In.</div>
            <p className="text-text-secondary">Day 1 lands in your inbox in the next 5 minutes. Check your spam folder if you don't see it — and whitelist roman@n5r.ai.</p>
          </div>
        )}
      </div>
    </LeadMagnetLayout>
  );
};

const FormField = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <label className="block text-xs uppercase tracking-[2px] text-text-secondary mb-2">{label}</label>
    <input required type={type} value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
  </div>
);

export default AICEOBriefing;
