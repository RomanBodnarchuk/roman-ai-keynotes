import { useState } from "react";
import { Link } from "react-router-dom";
import LeadMagnetLayout from "@/components/LeadMagnetLayout";

const KnowledgeLossCalculator = () => {
  const [seniorEmployees, setSeniorEmployees] = useState(20);
  const [avgSalary, setAvgSalary] = useState(180000);
  const [turnoverRate, setTurnoverRate] = useState(12);
  const [yearsExperience, setYearsExperience] = useState(15);
  const [productivityLoss, setProductivityLoss] = useState(35);
  const [showResults, setShowResults] = useState(false);

  const departingEmployees = Math.round((seniorEmployees * turnoverRate) / 100);
  const replacementCost = departingEmployees * avgSalary * 1.5;
  const knowledgeValue = departingEmployees * yearsExperience * 12000;
  const productivityImpact = (seniorEmployees * avgSalary * productivityLoss) / 100;
  const totalAnnualLoss = replacementCost + knowledgeValue + productivityImpact;
  const cloneInvestment = seniorEmployees * 8000;
  const netSavings = totalAnnualLoss - cloneInvestment;

  return (
    <LeadMagnetLayout
      eyebrow="Knowledge Risk Quantifier"
      title={<>Your Annual <span className="text-primary">Knowledge Loss</span></>}
      description="Every senior expert who leaves takes 15+ years of irreplaceable knowledge with them. Calculate the dollar cost of your unprotected institutional intelligence."
    >
      <div className="space-y-6">
        <SliderField label="Number of Senior Experts" value={seniorEmployees} setValue={setSeniorEmployees} min={5} max={500} step={5} format={(v) => `${v} people`} />
        <SliderField label="Average Senior Salary" value={avgSalary} setValue={setAvgSalary} min={80000} max={500000} step={10000} format={(v) => `$${v.toLocaleString()}`} />
        <SliderField label="Annual Turnover Rate" value={turnoverRate} setValue={setTurnoverRate} min={2} max={40} step={1} format={(v) => `${v}%`} />
        <SliderField label="Average Years of Experience" value={yearsExperience} setValue={setYearsExperience} min={3} max={40} step={1} format={(v) => `${v} years`} />
        <SliderField label="Productivity Loss During Transition" value={productivityLoss} setValue={setProductivityLoss} min={10} max={75} step={5} format={(v) => `${v}%`} />

        {!showResults ? (
          <button onClick={() => setShowResults(true)} className="btn-primary w-full mt-8">Calculate My Knowledge Loss →</button>
        ) : (
          <div className="space-y-8 mt-12">
            <div className="card-elevated p-10 text-center border-primary">
              <div className="text-xs uppercase tracking-[2px] text-text-secondary mb-3">Your Annual Knowledge Loss</div>
              <div className="font-heading text-6xl md:text-7xl text-primary leading-none">
                ${totalAnnualLoss.toLocaleString()}
              </div>
              <div className="text-sm text-text-tertiary mt-3">Lost every year. Compounding annually.</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
              <Metric label="Replacement Cost" value={`$${replacementCost.toLocaleString()}`} sub={`${departingEmployees} departures/yr`} />
              <Metric label="Knowledge Value Lost" value={`$${knowledgeValue.toLocaleString()}`} sub="Tribal knowledge gone" />
              <Metric label="Productivity Impact" value={`$${productivityImpact.toLocaleString()}`} sub="During transitions" />
            </div>

            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl text-foreground tracking-[1px] mb-4">The WisdomClone Solution</h3>
              <div className="space-y-3 text-text-secondary">
                <div className="flex justify-between"><span>Annual knowledge loss</span><span className="text-foreground font-heading">${totalAnnualLoss.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>WisdomClone investment</span><span className="text-foreground font-heading">−${cloneInvestment.toLocaleString()}</span></div>
                <div className="border-t border-border my-3" />
                <div className="flex justify-between text-lg"><span className="text-foreground font-heading tracking-[1px]">Net Annual Savings</span><span className="text-gold font-heading text-2xl">${netSavings.toLocaleString()}</span></div>
              </div>
            </div>

            <div className="border border-primary p-10 text-center bg-primary/5">
              <h3 className="font-heading text-3xl text-foreground tracking-[1px] mb-3">Protect Your Institutional Knowledge</h3>
              <p className="text-text-secondary mb-6">WisdomClone.ai captures expert knowledge before it walks out the door. Permanent. Searchable. Always available.</p>
              <Link to="/contact" className="btn-primary">Book WisdomClone Demo →</Link>
            </div>
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
    <div className="font-heading text-2xl text-foreground">{value}</div>
    <div className="text-sm text-text-tertiary mt-1">{sub}</div>
  </div>
);

export default KnowledgeLossCalculator;
