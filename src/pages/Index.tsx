import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import aldermore from "@/assets/funders/aldermore.jpg";
import ultimate from "@/assets/funders/ultimate.png";
import catalyst from "@/assets/funders/catalyst.jpeg";
import closeBros from "@/assets/funders/close.png";
import abnAmro from "@/assets/funders/abn-amro.gif";
import investec from "@/assets/funders/investec.png";
import lloyds from "@/assets/funders/lloyds.png";
import bibby from "@/assets/funders/bibby.jpg";

const fundingOptions = [
  {
    title: "Confidential Invoice Discounting",
    description: "A revolving credit facility structured against your outstanding sales invoices.",
    slug: "confidential-invoice-discounting",
  },
  {
    title: "Factoring",
    description: "An Invoice Factoring solution that advances money to a company as it issues new invoices.",
    slug: "factoring",
  },
  {
    title: "ABL Facilities",
    description: "Full Asset Based Lending facilities normally offered to larger companies and mid-sized corporates.",
    slug: "abl-facilities",
  },
  {
    title: "Single Invoice / Spot Factoring",
    description: "Fund one-off invoices rather than opting for a whole of turnover facility.",
    slug: "single-invoice-spot-factoring",
  },
  {
    title: "Trade Finance",
    description: "Access to a whole variety of trade finance providers for importing or exporting goods.",
    slug: "trade-finance",
  },
  {
    title: "Stock Finance",
    description: "Specialist funding options for stock acquisition beyond traditional bank facilities.",
    slug: "stock-finance",
  },
  {
    title: "Purchase Order Finance",
    description: "Funding for companies who have firm orders but cannot obtain bank funding.",
    slug: "purchase-order-finance",
  },
  {
    title: "Asset Finance",
    description: "Acquire business assets – plant and machinery, vehicles, IT equipment.",
    slug: "asset-finance",
  },
  {
    title: "Enterprise Finance Guarantee",
    description: "A scheme for SMEs to improve the availability of working capital through term loans.",
    slug: "enterprise-finance-guarantee-scheme",
  },
  {
    title: "Property Finance",
    description: "All forms of property finance, from 30 year commercial mortgages to bridging finance.",
    slug: "property-finance",
  },
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

const bulletPoints = [
  "Fairway Business Finance is one of the UK's longest established independent commercial finance advisors and brokers.",
  "Whatever form of financing is required for your business, we can assist by providing clear, objective and impartial advice.",
  "From £50k turnover to £50 million turnover, we have experience of successfully providing funding to meet the individual requirements of each business.",
  "We assist all sizes of businesses, in all sectors of industry.",
  "We assess each funding requirement on its individual merits and specific needs, and will negotiate to obtain the most attractive and competitive terms available to suit each situation.",
  "Once we have discussed and identified the requirements for your business, we will swiftly arrange for you to meet the most appropriate funder for your business.",
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Do We Do
          </h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-4">
            In very simple terms, we provide <strong className="text-secondary">IMPARTIAL AND OBJECTIVE</strong> Business Funding advice to Businesses all over the UK.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-4">
            We deal with all sectors of business, and our clients range in size from £50k turnover to £50 million turnover.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-4">
            As a <strong className="text-secondary">WHOLLY INDEPENDENT</strong> business, we have access to all funders, and all forms of finance.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-4">
            This approach has enabled us to assist many hundreds of businesses over the past 15 years.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-8">
            For a swift, no cost, <strong className="text-secondary">INDEPENDENT</strong> assessment of your funding requirements, please contact us below.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Bullet Points */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-background p-6 rounded-lg shadow-sm">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            Funding Options
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12" />
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

      {/* Funders */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            Our Funders
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12" />
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            {funders.map((funder) => (
              <div key={funder.alt} className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src={funder.src} alt={funder.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 bg-primary text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-heading text-xl md:text-2xl text-primary-foreground italic">
            Clients come back to us for new requirements — <span className="text-secondary">we're always happy to help.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
