import { useState } from "react";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const agenda = [
  { time: "Day 1 · AM", title: "AI Maturity Diagnostic", desc: "Live audit of your current AI stack, workflows, and competitive position. Group + 1:1 review with Roman." },
  { time: "Day 1 · PM", title: "Use Case Prioritization", desc: "The N5R.ai value/effort framework. Walk away with your top 5 ranked AI initiatives mapped to revenue impact." },
  { time: "Day 2 · AM", title: "Agent Architecture Design", desc: "Build the org chart for your AI workforce. Which agents to deploy, which roles to redesign, which to retire." },
  { time: "Day 2 · PM", title: "HubSpot + AI Integration Blueprint", desc: "Live workflow design in your HubSpot portal. Leave with 3 production-ready AI workflows." },
  { time: "Day 3 · AM", title: "Knowledge Capture Sprint", desc: "Identify your top 3 IP assets to clone. Roman walks through the WisdomClone deployment playbook." },
  { time: "Day 3 · PM", title: "90-Day Roadmap & Commitment", desc: "Sign-off on a 90-day execution plan with weekly check-ins. Includes 60 days of post-sprint async support." },
];

const bonuses = [
  "Lifetime access to the N5R.ai AI Playbook (200+ pages)",
  "12 months of 10X AI News executive subscription",
  "1 free WisdomClone seat (12-month license)",
  "Private Slack with Roman + 4 quarterly office hours",
];

const dates = ["Mar 18-20, 2026 · Toronto", "Apr 22-24, 2026 · Miami", "May 13-15, 2026 · Virtual"];

const AIStrategySprint = () => {
  const [date, setDate] = useState(dates[0]);
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <LeadMagnetLayout
      eyebrow="3-Day Executive Sprint · By Application"
      title={<>The <span className="text-primary">AI Strategy</span> Sprint</>}
      description="A 3-day, in-person executive workshop with Roman Bodnarchuk. Walk in without an AI strategy. Walk out with a 90-day execution plan, a deployed agent stack, and a HubSpot portal that's been rebuilt for the AI era."
    >
      <div className="space-y-12">
        {/* Investment */}
        <div className="card-elevated p-8 flex items-baseline justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[2px] text-text-secondary">Investment</div>
            <div className="font-heading text-5xl text-gold mt-2">$45,000 USD</div>
            <div className="text-sm text-text-tertiary mt-1">Per executive seat. Limited to 8 per cohort.</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-[2px] text-text-secondary">Typical Year-1 ROI</div>
            <div className="font-heading text-3xl text-primary mt-2">12-40x</div>
          </div>
        </div>

        {/* Agenda */}
        <div>
          <h2 className="font-heading text-3xl text-foreground tracking-[1px] mb-6">3-Day Agenda</h2>
          <div className="space-y-[2px]">
            {agenda.map((item, i) => (
              <div key={i} className="card-elevated p-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4">
                <div className="text-xs uppercase tracking-[2px] text-primary">{item.time}</div>
                <div>
                  <h3 className="font-serif text-xl text-foreground italic mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="card-elevated p-8">
          <h2 className="font-heading text-3xl text-foreground tracking-[1px] mb-4">Included Bonuses</h2>
          <ul className="space-y-3">
            {bonuses.map((b) => (
              <li key={b} className="flex gap-3 text-text-secondary"><span className="text-primary">→</span>{b}</li>
            ))}
          </ul>
        </div>

        {/* Application */}
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-elevated p-8 space-y-5">
            <h2 className="font-heading text-3xl text-foreground tracking-[1px]">Apply for Your Cohort</h2>
            <p className="text-text-secondary text-sm">By application only. Roman personally reviews every applicant.</p>

            <div>
              <label className="block text-xs uppercase tracking-[2px] text-text-secondary mb-3">Select Cohort</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
                {dates.map((d) => (
                  <button type="button" key={d} onClick={() => setDate(d)}
                    className={`p-4 text-sm transition-all border ${date === d ? "border-primary bg-primary/10 text-foreground" : "border-border bg-card text-text-secondary hover:border-primary/50"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <FormField label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
            </div>
            <FormField label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
            <button type="submit" className="btn-primary w-full">Submit Application →</button>
          </form>
        ) : (
          <div className="card-elevated p-10 text-center border-primary">
            <div className="font-heading text-3xl text-primary tracking-[1px] mb-3">Application Received</div>
            <p className="text-text-secondary">Roman's team will review and respond within 48 hours. If accepted, you'll receive cohort details and onboarding for {date}.</p>
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

export default AIStrategySprint;
