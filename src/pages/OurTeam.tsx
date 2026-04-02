import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
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
      {/* Page Hero */}
      <section className="relative gradient-hero py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-8 h-px bg-secondary" /> Meet The Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            Our Team
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={idx > 0 ? "mt-16" : ""}
            >
              <div className="glass rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-3">
                  {/* Photo & Contact */}
                  <div className="bg-primary p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden mb-5 ring-4 ring-secondary/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-foreground">{member.name}</h2>
                    <p className="text-secondary font-medium text-sm mb-5">{member.role}</p>

                    <div className="space-y-2 text-sm text-primary-foreground/70">
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-secondary transition-colors justify-center">
                        <Phone className="w-4 h-4" /> {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors justify-center">
                        <Mail className="w-4 h-4" /> {member.email}
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-5 justify-center">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="text-[11px] bg-primary-foreground/10 text-primary-foreground/80 px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="space-y-4">
                      {member.bio.map((paragraph, i) => (
                        <p key={i} className="text-foreground/75 leading-relaxed text-sm">{paragraph}</p>
                      ))}
                    </div>

                    <blockquote className="mt-8 gradient-hero rounded-xl p-5 relative">
                      <div className="absolute inset-0 pattern-dots opacity-10 rounded-xl" />
                      <div className="relative z-10 flex items-start gap-3">
                        <span className="text-3xl text-secondary/50 font-heading leading-none">"</span>
                        <p className="text-primary-foreground/80 italic leading-relaxed text-sm">{member.quote}</p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <div className="glass rounded-2xl p-10 inline-block">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">How can we help you?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Contact us at Fairway Business Finance or submit a business inquiry online.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-secondary/25 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
