import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fundingOptions = [
  {
    title: "Confidential Invoice Discounting",
    description: "Confidential Invoice Discounting is, quite simply, a revolving credit facility structured against your outstanding sales invoices.",
    slug: "confidential-invoice-discounting",
  },
  {
    title: "Factoring",
    description: "Disclosed Invoice Factoring is an Invoice Factoring solution that advances money to a company as it issues new invoices.",
    slug: "factoring",
  },
  {
    title: "ABL Facilities",
    description: "Full Asset Based Lending facilities are normally offered to larger companies and mid-sized corporates.",
    slug: "abl-facilities",
  },
  {
    title: "Single Invoice / Spot Factoring",
    description: "Rather than opting for a \"whole of turnover\" facility, some clients have a requirement to fund one-off invoices.",
    slug: "single-invoice-spot-factoring",
  },
  {
    title: "Trade Finance",
    description: "Fairway Business Finance has access to a whole variety of trade finance providers.",
    slug: "trade-finance",
  },
  {
    title: "Stock Finance",
    description: "Stock acquisition, whilst often funded by a traditional Bank overdraft or trade line, sometimes requires specialist funding options.",
    slug: "stock-finance",
  },
  {
    title: "Purchase Order Finance",
    description: "Many companies have the ability to obtain firm orders, but cannot obtain funding via their bank to fund such orders.",
    slug: "purchase-order-finance",
  },
  {
    title: "Asset Finance",
    description: "Asset Finance is a facility used to acquire all manner of business assets – plant and machinery, vehicles, IT equipment.",
    slug: "asset-finance",
  },
  {
    title: "Enterprise Finance Guarantee Scheme",
    description: "The Enterprise Finance Guarantee is a scheme for SMEs intended primarily to improve the availability of working capital.",
    slug: "enterprise-finance-guarantee-scheme",
  },
  {
    title: "Property Finance",
    description: "We have access to all forms of property finance, from 30 year commercial mortgages, to short term bridging or development finance.",
    slug: "property-finance",
  },
];

const FundingOptions = () => {
  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Funding Options</h1>
          <div className="w-16 h-1 bg-secondary mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fundingOptions.map((option) => (
              <Link
                key={option.slug}
                to={`/funding-options/${option.slug}`}
                className="group flex items-start gap-5 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                  <span className="text-sm text-secondary font-medium mt-2 inline-block group-hover:underline">
                    More »
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundingOptions;
