import { Link } from "react-router-dom";
import patrickImg from "@/assets/team/patrick-murphy.jpeg";
import philImg from "@/assets/team/phil-brown.jpeg";

const teamMembers = [
  {
    name: "Patrick Murphy",
    role: "Managing Director",
    image: patrickImg,
    phone: "07748 408971",
    email: "fbfinance@btinternet.com",
    expertise: ["Invoice Finance", "Asset Finance", "Trade Finance", "Commercial Mortgages", "Factoring"],
    bio: [
      "Patrick formed Fairway Business Finance in 2001, after a successful career within the UK Commercial Banking sector.",
      "Over the past 15 years, he has established very close relationships with all of the principal funders within the UK Invoice Finance, ABL and Asset Finance sector.",
      "This enables Fairway Business Finance to assess those businesses which approach us in an impartial and objective manner, in the knowledge that we have a very wide portfolio of funders available to us.",
      "Patrick's approach to Business Finance is very simple – if there is a suitable funding facility available for a business, we will identify it and arrange a facility offer swiftly, discreetly and in direct collaboration with our client, and very often in collaboration with their Bank also.",
      "A positive \"can do\" approach to identifying Business Finance solutions has resulted in many years of successful, repeat business, with satisfied introducers and clients returning to us again and again.",
      "If you require advice on any aspect of Business Finance, call Patrick on 07748 408971 for an immediate response.",
    ],
    quote: "Objective advice, Impartiality and speed of service are the foundations on which Fairway Business Finance was established",
  },
  {
    name: "Phil Brown",
    role: "Senior Consultant",
    image: philImg,
    phone: "07487 612832",
    email: "philbrownfbf@gmail.com",
    expertise: ["Invoice Finance", "Trade Finance", "Fixed Asset", "Commercial Mortgage", "Banking"],
    bio: [
      "Phil Brown, Senior Consultant at Fairway Business Finance, helping business with financial solutions.",
      "Phil is vastly experienced in Invoice Finance, Trade, Fixed Asset, Commercial Mortgage and Banking. He has worked as a Corporate Director in Business Development and Invoice Finance for many years with a leading major bank.",
      "Previously Phil started work in Banking Sales and Business Development, Credit and Risk (Asset Finance) with assignments to Leasing and Corporate transactions across the North West.",
      "He became Area Sales Manager, Senior Sales Representative and Area Manager in Invoice Finance in the Midlands, Black Country and Shropshire.",
    ],
    quote: "Honesty and integrity underpin Phil's working practice and he believes in a commercial chivalry with all his clients.",
  },
];

const OurTeam = () => {
  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Team</h1>
          <div className="w-16 h-1 bg-secondary mt-4" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className={`${idx > 0 ? "mt-16 pt-16 border-t border-border" : ""}`}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Photo & contact info */}
                <div>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[350/250] object-cover object-top"
                    />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{member.name}</h2>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                        📞 {member.phone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        ✉️ {member.email}
                      </a>
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-foreground mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio & quote */}
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="text-foreground/80 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>

                  <blockquote className="mt-6 border-l-4 border-secondary pl-5 py-3 bg-muted rounded-r-lg">
                    <p className="text-foreground/80 italic leading-relaxed">{member.quote}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 max-w-md mx-auto bg-muted p-8 rounded-lg text-center">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">How can we help you?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Contact us at Fairway Business Finance or submit a business inquiry online.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
