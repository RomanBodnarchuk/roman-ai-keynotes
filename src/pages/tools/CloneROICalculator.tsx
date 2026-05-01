import { useState } from "react";
import { Link } from "react-router-dom";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const CloneROICalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(500);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [meetingsPerWeek, setMeetingsPerWeek] = useState(20);
  const [contentPieces, setContentPieces] = useState(8);
  const [teamSize, setTeamSize] = useState(50);
  const [showResults, setShowResults] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const annualHours = hoursPerWeek * 50;
  const reclaimedValue = annualHours * hourlyRate;
  const meetingValue = meetingsPerWeek * 50 * 250;
  const contentValue = contentPieces * 50 * 1500;
  const teamMultiplier = teamSize * 5000;
  const totalROI = reclaimedValue + meetingValue + contentValue + teamMultiplier;
  const cloneCost = 60000;
  const netROI = totalROI - cloneCost;
  const roiMultiple = (totalROI / cloneCost).toFixed(1);

  return (
    <LeadMagnetLayout
      eyebrow="Interactive Calculator"
      title={<>Your <span className="text-primary">AI Clone</span> ROI Calculator</>}
      description="Quantify the dollar value of an AI clone trained on your expertise. Built on real WisdomClone.ai customer data across 200+ enterprise deployments."
    >
      <div className="space-y-6">
        <SliderField label="Your Effective Hourly Rate" value={hourlyRate} setValue={setHourlyRate} min={100} max={2500} step={50} format={(v) => `$${v.toLocaleString()}/hr`} />
        <SliderField label="Hours/Week Spent on Repeat Questions" value={hoursPerWeek} setValue={setHoursPerWeek} min={1} max={40} step={1} format={(v) => `${v} hrs/week`} />
        <SliderField label="Sales/Discovery Meetings per Week" value={meetingsPerWeek} setValue={setMeetingsPerWeek} min={0} max={100} step={1} format={(v) => `${v} meetings`} />
        <SliderField label="Content Pieces Created per Month" value={contentPieces} setValue={setContentPieces} min={0} max={50} step={1} format={(v) => `${v} pieces`} />
        <SliderField label="Team Size That Needs Your Knowledge" value={teamSize} setValue={setTeamSize} min={1} max={1000} step={5} format={(v) => `${v} people`} />

        {!showResults ? (
          <button onClick={() => setShowResults(true)} className="btn-primary w-full mt-8">
            Calculate My ROI →
          </button>
        ) : (
          <div className="space-y-8 mt-12">
            <div className="card-elevated p-10 text-center">
              <div className="text-xs uppercase tracking-[2px] text-text-secondary mb-3">Annual Value Created</div>
              <div className="font-heading text-6xl md:text-7xl text-gold leading-none">
                ${totalROI.toLocaleString()}
              </div>
              <div className="font-heading text-2xl text-primary mt-4 tracking-[1px]">
                {roiMultiple}x Return on Investment
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
              <Metric label="Time Reclaimed" value={`$${reclaimedValue.toLocaleString()}`} sub={`${annualHours} hours/year recovered`} />
              <Metric label="Meeting Value" value={`$${meetingValue.toLocaleString()}`} sub="AI handles discovery 24/7" />
              <Metric label="Content Velocity" value={`$${contentValue.toLocaleString()}`} sub="Always-on thought leadership" />
              <Metric label="Team Leverage" value={`$${teamMultiplier.toLocaleString()}`} sub="Knowledge available instantly" />
            </div>

            <div className="card-elevated p-6">
              <div className="flex justify-between items-center text-text-secondary text-sm mb-2">
                <span>Total Annual Value</span>
                <span className="text-foreground font-heading text-lg">${totalROI.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-text-secondary text-sm mb-2">
                <span>WisdomClone Investment</span>
                <span className="text-foreground font-heading text-lg">−${cloneCost.toLocaleString()}</span>
              </div>
              <div className="border-t border-border my-3" />
              <div className="flex justify-between items-center">
                <span className="text-foreground font-heading text-lg tracking-[1px]">Net ROI Year 1</span>
                <span className="text-gold font-heading text-2xl">${netROI.toLocaleString()}</span>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="card-elevated p-8 space-y-4">
              <h3 className="font-heading text-2xl text-foreground tracking-[1px]">Get Your Personalized ROI Report</h3>
              <FormField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <FormField label="Work Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Link to="/contact" className="btn-primary w-full text-center block mt-4">Book WisdomClone Demo →</Link>
            </form>
          </div>
        )}
      </div>
    </LeadMagnetLayout>
  );
};

const SliderField = ({ label, value, setValue, min, max, step, format }: { label: string; value: number; setValue: (v: number) => void; min: number; max: number; step: number; format: (v: number) => string }) => (
  <div className="card-elevated p-6">
    <div className="flex justify-between items-baseline mb-3">
      <label className="text-xs uppercase tracking-[2px] text-text-secondary">{label}</label>
      <span className="font-heading text-2xl text-primary">{format(value)}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full accent-primary" />
  </div>
);

const Metric = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div className="card-elevated p-6">
    <div className="text-xs uppercase tracking-[2px] text-text-secondary mb-2">{label}</div>
    <div className="font-heading text-3xl text-foreground">{value}</div>
    <div className="text-sm text-text-tertiary mt-1">{sub}</div>
  </div>
);

const FormField = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <label className="block text-xs uppercase tracking-[2px] text-text-secondary mb-2">{label}</label>
    <input required type={type} value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full bg-input border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
  </div>
);

export default CloneROICalculator;
