import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import TrainingProviderInfo from "@/components/TrainingProviderInfo";

const Contact = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">Speaking inquiry</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Book Roman for your event</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">Email Roman with your organization, event date, location, audience, preferred format, and goals. Availability, fees, and terms will be confirmed for your event.</p>
          <div className="card-elevated p-8 space-y-5">
            <h2 className="text-xl font-heading font-bold">Contact Roman directly</h2>
            <a className="btn-primary" href="mailto:roman@n5r.com?subject=Speaking%20inquiry">Open an email inquiry</a>
            <p className="text-muted-foreground">Or copy this address: <a href="mailto:roman@n5r.com" className="underline">roman@n5r.com</a></p>
            <p className="text-sm text-muted-foreground">The link opens your email application. You review and send the message there. No inquiry is submitted by this page.</p>
            <p className="text-sm text-muted-foreground">Please include only the information needed to discuss your event. Do not email trainee identity documents or sensitive employee records.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <TrainingProviderInfo />
  </PageLayout>
);
export default Contact;
