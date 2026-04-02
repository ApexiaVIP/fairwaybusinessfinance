import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const paragraphs = [
  "Fairway Business was set up by Patrick Murphy in 2001, after a successful 20-year career in commercial finance. Patrick previously held senior positions within the UK Commercial banking sector, and during his career has developed expert knowledge of all types of business finance available to SME businesses.",
  "The majority of our clients are referred to us on the recommendation of Commercial Bank Managers, Corporate Advisors, or Accountants. We also receive referrals from existing and previous clients. They use our services time and again to assist companies who are seeking independent commercial business advice.",
  "We work with our clients to assess and identify the most suitable funding solution to meet their needs. With access to every funder in the UK, we will then move quickly to arrange an introduction to the most suitable funder to match their requirements.",
  "In certain instances, our clients need to raise funds very quickly. We pride ourselves on being accessible at all times, and certainly do not operate on a 9 to 5 basis. If you need urgent advice, a call to 07748 408971 will always be responded to swiftly.",
  "It is a fundamental aspect of our business that we provide impartial, objective and appropriate advice to our clients.",
  "We are full members of the National Association of Commercial Finance Brokers, and comply fully with their code of conduct and principles of business.",
];

const AboutUs = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative gradient-hero py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-8 h-px bg-secondary" /> Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-5">
            {paragraphs.map((text, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-4 glass rounded-2xl p-6"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 relative gradient-hero rounded-2xl p-8 md:p-10"
          >
            <div className="absolute inset-0 pattern-dots opacity-15 rounded-2xl" />
            <div className="relative z-10">
              <div className="text-5xl text-secondary/40 font-heading leading-none mb-2">"</div>
              <p className="text-primary-foreground/90 italic leading-relaxed text-lg">
                We have been working in the Corporate Finance market for over 30 years, and have been established as an independent business for over 15 years. We do not advertise, all our business comes by referral from Bank Managers, Accountants and Corporate Advisors, who use our services time and again to assist clients who are looking for impartial independent advice.
              </p>
            </div>
          </motion.blockquote>

          {/* Urgent CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4"
          >
            <Phone className="w-8 h-8 text-secondary shrink-0" />
            <div className="text-center md:text-left">
              <p className="font-heading text-lg font-bold text-foreground">Need urgent advice?</p>
              <p className="text-muted-foreground text-sm">A call to 07748 408971 will always be responded to swiftly.</p>
            </div>
            <a
              href="tel:07748408971"
              className="md:ml-auto gradient-gold text-secondary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-secondary/25 transition-all shrink-0"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
