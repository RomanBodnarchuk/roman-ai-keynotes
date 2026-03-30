import { motion } from "framer-motion";
import { ArrowRight, Download, FileText, Image, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const Resources = () => {
  const resources = [
    { icon: FileText, title: "Speaker One-Sheet (PDF)", desc: "A single-page overview of Roman's keynote topics, bio, and booking details. Perfect for bureau submissions and event committee review.", cta: "Download One-Sheet" },
    { icon: FileText, title: "Speaker Bio (Short & Long)", desc: "Approved short and long-form bios for event programs, websites, and promotional materials.", cta: "Download Bios" },
    { icon: FileText, title: "Keynote Summary PDF", desc: "Detailed summary of all available keynote topics with descriptions, audience fit, and takeaways.", cta: "Download Keynote Summary" },
    { icon: Image, title: "Headshots (ZIP)", desc: "High-resolution professional headshots in multiple formats for event marketing and media use.", cta: "Download Headshots" },
    { icon: Mic, title: "Emcee Introduction Copy", desc: "Approved introduction script for event emcees and moderators.", cta: "Download Intro Copy" },
    { icon: FileText, title: "AV Requirements", desc: "Technical specifications for stage setup, microphone, video, and presentation requirements.", cta: "Download AV Specs" },
  ];

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <SectionHeading
            label="Resources"
            title="Downloadable Speaker Materials"
            description="Everything you need to evaluate, promote, and prepare for a Roman Bodnarchuk keynote engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{item.desc}</p>
                <button className="btn-secondary !py-2.5 !px-5 !text-xs w-fit">
                  <Download className="mr-2" size={14} />
                  {item.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="card-elevated p-8 max-w-xl mx-auto">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Need Something Specific?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                If you need custom materials, additional assets, or specific formats, contact us and we will prepare them for you.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
