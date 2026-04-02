import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fundingDetails: Record<string, { title: string; content: string[] }> = {
  "confidential-invoice-discounting": {
    title: "Confidential Invoice Discounting",
    content: [
      "Confidential Invoice Discounting is, quite simply, a revolving credit facility structured against your outstanding sales invoices. This allows you to put cash straight back in to the business as soon as it has been earned.",
      "This type of facility ensures your debtors are never made aware of the funders involvement, and your credit control function will continue to chase payments as normal.",
      "The funder will normally advance up to 90% of the invoice value within 24 hours of you raising the invoice, with the remaining 10% released when payment is received from your debtor.",
      "The key benefits of a CID facility is to provide an immediate boost to your cash flow, whilst also enabling you to take on additional orders and potentially negotiate supplier discounts by paying your suppliers early.",
    ],
  },
  factoring: {
    title: "Factoring",
    content: [
      "Disclosed Invoice Factoring is an Invoice Factoring solution that advances money to a company as it issues new invoices.",
      "As it is a disclosed facility, it means that your customers will be aware of the involvement of the factoring company, and a notice of assignment is normally placed on your invoices, requesting payments are made directly to the funder.",
      "The credit control team of the chosen funder will then take the responsibility for securing payments from your customers. This gives you peace of mind, frees up valuable time, and of course provides you with access to funds immediately.",
    ],
  },
  "abl-facilities": {
    title: "ABL Facilities",
    content: [
      "Full Asset Based Lending facilities are normally offered to larger companies and mid-sized corporates, although it is now increasingly available for smaller businesses as well.",
      "ABL is usually provided on a similar basis to Invoice Finance, with funding being extended against debts, but in an ABL arrangement this is complemented by finance against a wider pool of assets, typically including stock, property, plant and machinery, and also potentially intangibles such as intellectual property or forward income streams.",
      "As well as funding existing and growing businesses, ABL funding can also be used in mergers and acquisitions, management buyouts and turnaround situations.",
      "We deal with a number of independent ABL funders who provide such facilities.",
    ],
  },
  "single-invoice-spot-factoring": {
    title: "Single Invoice / Spot Factoring",
    content: [
      "Rather than opting for a \"whole of turnover\" facility, some clients have a requirement to fund one-off invoices.",
      "This facility is referred to as \"Spot\" or \"Selective\" factoring, and is most beneficial for companies whose main debtors pay promptly and quickly, but who may have one-off cash flow requirements at certain times of the year.",
      "We have access to a variety of selective invoice finance funders, all of whom have their own specialties and preferences, for which we can assess and guide our clients.",
    ],
  },
  "trade-finance": {
    title: "Trade Finance",
    content: [
      "Fairway Business Finance has access to a whole variety of trade finance providers, who provide appropriate facilities for businesses who are importing or exporting goods.",
      "Normally the funder will pay the supplier directly, on the client's behalf, once firm orders have been placed and upon receipt of shipping documents and / or delivery. The repayment source of the trade line will be via an agreed Invoice Finance facility once the sales invoice is raised.",
      "Our funders are very experienced in arranging Letters of Credit / Bonds and Guarantees and export Credit Insurance when needed.",
    ],
  },
  "stock-finance": {
    title: "Stock Finance",
    content: [
      "Stock acquisition, whilst often funded by a traditional Bank overdraft or trade line, sometimes requires specialist funding options.",
      "Where clients do not necessarily have confirmed forward orders, or are acquiring \"one off\" stock e.g. liquidation stock, then a bespoke Stock Finance line is often the answer.",
      "We use a number of specialist funders who provide such facilities.",
    ],
  },
  "purchase-order-finance": {
    title: "Purchase Order Finance",
    content: [
      "Many companies have the ability to obtain firm orders, but cannot obtain funding via their bank to fund such orders, particularly if the client is a new start business, or the purchase order is under £50k in value.",
      "Fairway Business Finance has funded purchase orders for as low as £10k for companies trading both within the UK and those with a need for import / export finance.",
      "We have a number of bespoke funders who are very keen to fund such growth for new start businesses, or established businesses with relatively low levels of turnover.",
    ],
  },
  "asset-finance": {
    title: "Asset Finance",
    content: [
      "Asset Finance is a facility used to acquire all manner of business assets – plant and machinery, vehicles, IT equipment.",
      "Normally a fixed or variable Hire Purchase or Leasing agreement, which enables the client to spread the cost of their business asset over a typical term of between 24 and 60 months.",
      "We deal with a large number of independent asset finance funders, who also offer \"sale and leaseback\" facilities, when business owners wish to raise capital against existing assets owned within their business.",
    ],
  },
  "enterprise-finance-guarantee-scheme": {
    title: "Enterprise Finance Guarantee Scheme",
    content: [
      "The Enterprise Finance Guarantee is a scheme for SMEs intended primarily to improve the availability of working capital through term loans and the consolidation of overdrafts.",
      "It also supports lending for business growth and development, in cases where a sound proposition may otherwise be declined due to a lack of security.",
      "We deal with a number of funders who are experienced in helping clients apply for loans under this scheme, with a very high success rate.",
    ],
  },
  "property-finance": {
    title: "Property Finance",
    content: [
      "We have access to all forms of property finance, from 30 year commercial mortgages, to short term bridging or development finance.",
      "Our funders provide support for all forms of commercial, development and buy to let finance.",
    ],
  },
};

const FundingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? fundingDetails[slug] : undefined;

  if (!detail) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Link to="/funding-options" className="text-primary hover:underline">← Back to Funding Options</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative gradient-hero py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/funding-options"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-secondary mb-5 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Funding Options
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground"
          >
            {detail.title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-6">
            {detail.content.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-foreground/75 leading-relaxed text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-secondary/25 transition-all"
            >
              Get in touch to discuss <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FundingDetail;
