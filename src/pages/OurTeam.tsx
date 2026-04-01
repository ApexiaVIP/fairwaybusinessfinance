import { Link } from "react-router-dom";
import patrickImg from "@/assets/team/patrick-murphy.jpeg";
import philImg from "@/assets/team/phil-brown.jpeg";

const teamMembers = [
  {
    name: "Patrick Murphy",
    role: "Managing Director",
    image: patrickImg,
    bio: "Patrick formed Fairway Business Finance in 2001, after a successful career within the UK Commercial banking sector. During his career he has developed expert knowledge of all types of business finance available to SME businesses.",
  },
  {
    name: "Phil Brown",
    role: "Senior Consultant",
    image: philImg,
    bio: "Phil Brown, Senior Consultant at Fairway Business Finance, helping businesses with financial solutions. Phil brings extensive experience in commercial finance advisory.",
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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[350/250] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold text-foreground">{member.name}</h2>
                  <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar-style contact box */}
          <div className="mt-12 max-w-md mx-auto bg-muted p-8 rounded-lg text-center">
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
