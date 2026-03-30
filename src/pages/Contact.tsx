import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  organization: z.string().trim().min(1, "Organization is required").max(200),
  title: z.string().trim().max(100).optional(),
  eventName: z.string().trim().min(1, "Event name is required").max(200),
  eventDate: z.string().trim().max(50).optional(),
  location: z.string().trim().max(200).optional(),
  audienceSize: z.string().trim().max(50).optional(),
  budget: z.string().trim().max(100).optional(),
  eventFormat: z.string().trim().max(100).optional(),
  notes: z.string().trim().max(2000).optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", organization: "", title: "", eventName: "",
    eventDate: "", location: "", audienceSize: "", budget: "", eventFormat: "", notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Inquiry Submitted", description: "Thank you. We will respond within 24 business hours." });
      setFormData({ name: "", email: "", organization: "", title: "", eventName: "", eventDate: "", location: "", audienceSize: "", budget: "", eventFormat: "", notes: "" });
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">
                Speaking Inquiry
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Book Roman for Your Event
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Complete the inquiry form and our team will respond within 24 business hours with availability, pricing, and next steps. Whether you represent a conference, speaker bureau, CEO peer group, or corporate leadership team, we are here to help you deliver an exceptional event.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { label: "Response Time", value: "Within 24 business hours" },
                  { label: "Availability", value: "United States and Canada, 2026" },
                  { label: "Formats", value: "Keynote, Workshop, Executive Briefing, Fireside Chat" },
                  { label: "Virtual", value: "In-person, virtual, and hybrid available" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="card-elevated p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Speaker Bureaus:</strong> Roman works seamlessly with bureaus. Please include your bureau name in the organization field and any specific requirements in the notes.
                </p>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card-elevated p-8 lg:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="organization" className={labelClass}>Organization *</label>
                    <input id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company or bureau" className={inputClass} />
                    {errors.organization && <p className="text-xs text-destructive mt-1">{errors.organization}</p>}
                  </div>
                  <div>
                    <label htmlFor="title" className={labelClass}>Your Title</label>
                    <input id="title" name="title" value={formData.title} onChange={handleChange} placeholder="VP Events, Bureau Director" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventName" className={labelClass}>Event Name *</label>
                  <input id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} placeholder="Annual Leadership Summit 2026" className={inputClass} />
                  {errors.eventName && <p className="text-xs text-destructive mt-1">{errors.eventName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventDate" className={labelClass}>Event Date</label>
                    <input id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="Month/Year or specific date" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="location" className={labelClass}>Location</label>
                    <input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="City, State/Province" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="audienceSize" className={labelClass}>Audience Size</label>
                    <input id="audienceSize" name="audienceSize" value={formData.audienceSize} onChange={handleChange} placeholder="e.g. 200" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="eventFormat" className={labelClass}>Format</label>
                    <select id="eventFormat" name="eventFormat" value={formData.eventFormat} onChange={handleChange} className={inputClass}>
                      <option value="">Select format</option>
                      <option value="keynote">Keynote</option>
                      <option value="workshop">Workshop</option>
                      <option value="executive-briefing">Executive Briefing</option>
                      <option value="fireside-chat">Fireside Chat</option>
                      <option value="virtual">Virtual</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClass}>Budget Range</label>
                    <input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Optional" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className={labelClass}>Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event, audience, and what you hope Roman will deliver."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Speaking Inquiry
                      <Send className="ml-2" size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
