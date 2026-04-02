import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import aldermore from "@/assets/funders/aldermore.jpg";
import ultimate from "@/assets/funders/ultimate.png";
import catalyst from "@/assets/funders/catalyst.jpeg";
import closeBros from "@/assets/funders/close.png";
import abnAmro from "@/assets/funders/abn-amro.gif";
import investec from "@/assets/funders/investec.png";
import lloyds from "@/assets/funders/lloyds.png";
import bibby from "@/assets/funders/bibby.jpg";

const fundingOptions = [
  { title: "Confidential Invoice Discounting", description: "A revolving credit facility structured against your outstanding sales invoices.", slug: "confidential-invoice-discounting" },
  { title: "Factoring", description: "An Invoice Factoring solution that advances money to a company as it issues new invoices.", slug: "factoring" },
  { title: "ABL Facilities", description: "Full Asset Based Lending facilities normally offered to larger companies and mid-sized corporates.", slug: "abl-facilities" },
  { title: "Single Invoice / Spot Factoring", description: "Fund one-off invoices rather than opting for a whole of turnover facility.", slug: "single-invoice-spot-factoring" },
  { title: "Trade Finance", description: "Access to a whole variety of trade finance providers for importing or exporting goods.", slug: "trade-finance" },
  { title: "Stock Finance", description: "Specialist funding options for stock acquisition beyond traditional bank facilities.", slug: "stock-finance" },
  { title: "Purchase Order Finance", description: "Funding for companies who have firm orders but cannot obtain bank funding.", slug: "purchase-order-finance" },
  { title: "Asset Finance", description: "Acquire business assets – plant and machinery, vehicles, IT equipment.", slug: "asset-finance" },
  { title: "Enterprise Finance Guarantee", description: "A scheme for SMEs to improve the availability of working capital through term loans.", slug: "enterprise-finance-guarantee-scheme" },
  { title: "Property Finance", description: "All forms of property finance, from 30 year commercial mortgages to bridging finance.", slug: "property-finance" },
];

const funders = [
  { src: aldermore, alt: "Aldermore" },
  { src: ultimate, alt: "Ultimate Finance" },
  { src: catalyst, alt: "Catalyst" },
  { src: closeBros, alt: "Close Brothers" },
  { src: abnAmro, alt: "ABN AMRO Commercial Finance" },
  { src: investec, alt: "Investec" },
  { src: lloyds, alt: "Lloyds Bank" },
  { src: bibby, alt: "Bibby Financial Services" },
];

const stats = [
  { icon: Users, value: "500+", label: "Businesses Helped" },
  { icon: Briefcase, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "£50M", label: "Max Turnover" },
  { icon: Shield, value: "100%", label: "Independent" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative gradient-hero min-h-[85vh] flex items-center">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-secondary" />
                Independent Business Finance Advisors
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]"
            >
              Impartial Funding
              <br />
              <span className="text-gradient-gold">Advice You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl leading-relaxed"
            >
              As a wholly independent business, we have access to all funders and all forms of finance — serving UK businesses from £50k to £50 million turnover.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
              >
                Get Free Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/funding-options"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                View Funding Options
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fairway */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              The Fairway Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Longest Established", text: "One of the UK's longest established independent commercial finance advisors and brokers." },
              { title: "Clear & Impartial", text: "Whatever form of financing is required, we provide clear, objective and impartial advice." },
              { title: "All Business Sizes", text: "From £50k turnover to £50 million turnover, we assist all sizes of businesses, in all sectors." },
              { title: "Individual Approach", text: "We assess each funding requirement on its individual merits and specific needs." },
              { title: "Competitive Terms", text: "We negotiate to obtain the most attractive and competitive terms available for each situation." },
              { title: "Swift Introductions", text: "Once identified, we swiftly arrange for you to meet the most appropriate funder for your business." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-8 card-hover group"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-20 md:py-28 bg-muted/50 pattern-dots">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Funding Options
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {fundingOptions.map((option, i) => (
              <motion.div
                key={option.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to={`/funding-options/${option.slug}`}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:gradient-gold transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">{option.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funders */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Trusted Partners</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Our Funders
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 max-w-4xl mx-auto">
            {funders.map((funder, i) => (
              <motion.div
                key={funder.alt}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-center justify-center h-14 w-28 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
              >
                <img src={funder.src} alt={funder.alt} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style tagline */}
      <section className="py-16 gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl text-primary-foreground italic max-w-3xl mx-auto"
          >
            "Clients come back to us for new requirements —{" "}
            <span className="text-gradient-gold not-italic font-bold">we're always happy to help.</span>"
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
