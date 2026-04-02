import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fundingOptions = [
  { title: "Confidential Invoice Discounting", description: "Confidential Invoice Discounting is, quite simply, a revolving credit facility structured against your outstanding sales invoices.", slug: "confidential-invoice-discounting" },
  { title: "Factoring", description: "Disclosed Invoice Factoring is an Invoice Factoring solution that advances money to a company as it issues new invoices.", slug: "factoring" },
  { title: "ABL Facilities", description: "Full Asset Based Lending facilities are normally offered to larger companies and mid-sized corporates.", slug: "abl-facilities" },
  { title: "Single Invoice / Spot Factoring", description: "Rather than opting for a \"whole of turnover\" facility, some clients have a requirement to fund one-off invoices.", slug: "single-invoice-spot-factoring" },
  { title: "Trade Finance", description: "Fairway Business Finance has access to a whole variety of trade finance providers.", slug: "trade-finance" },
  { title: "Stock Finance", description: "Stock acquisition, whilst often funded by a traditional Bank overdraft or trade line, sometimes requires specialist funding options.", slug: "stock-finance" },
  { title: "Purchase Order Finance", description: "Many companies have the ability to obtain firm orders, but cannot obtain funding via their bank to fund such orders.", slug: "purchase-order-finance" },
  { title: "Asset Finance", description: "Asset Finance is a facility used to acquire all manner of business assets – plant and machinery, vehicles, IT equipment.", slug: "asset-finance" },
  { title: "Enterprise Finance Guarantee Scheme", description: "The Enterprise Finance Guarantee is a scheme for SMEs intended primarily to improve the availability of working capital.", slug: "enterprise-finance-guarantee-scheme" },
  { title: "Property Finance", description: "We have access to all forms of property finance, from 30 year commercial mortgages, to short term bridging or development finance.", slug: "property-finance" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const FundingOptions = () => {
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
            <span className="w-8 h-px bg-secondary" /> Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            Funding Options
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
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
                  className="group flex items-start gap-5 p-6 rounded-2xl glass card-hover h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:gradient-gold transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium mt-3 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundingOptions;
