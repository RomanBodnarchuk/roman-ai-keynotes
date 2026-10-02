import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import TrainingProviderInfo from "@/components/TrainingProviderInfo";
import heroImage from "@/assets/hero-portrait.jpg";

const About = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6 block">About Roman</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Roman Bodnarchuk</h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Roman Bodnarchuk is an entrepreneur, AI trainer, and keynote speaker. He helps companies apply AI to their work through N5R.com Inc.</p>
            <p>N5R.com Inc. was incorporated in 1998. The company has provided AI training since 2017.</p>
            <p>For company training, Roman focuses on the employee's role, the employer's existing software, and the tasks the employee needs to perform. A sales team, an operations team, and an administrative team need different practical exercises.</p>
            <p>Speaking, leadership discussions, and advisory services are separate from employee skills courses proposed for Ontario Job Grant funding.</p>
          </div>
          <Link to="/contact" className="btn-primary mt-8">Discuss an event or training need</Link>
        </motion.div>
        <img src={heroImage} alt="Roman Bodnarchuk" className="w-full h-auto" loading="lazy" width={896} height={1152} />
      </div>
    </section>
    <TrainingProviderInfo />
  </PageLayout>
);
export default About;
