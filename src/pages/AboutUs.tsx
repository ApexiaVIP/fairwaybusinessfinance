const AboutUs = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
          <div className="w-16 h-1 bg-secondary mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {[
              "Fairway Business was set up by Patrick Murphy in 2001, after a successful 20-year career in commercial finance. Patrick previously held senior positions within the UK Commercial banking sector, and during his career has developed expert knowledge of all types of business finance available to SME businesses.",
              "The majority of our clients are referred to us on the recommendation of Commercial Bank Managers, Corporate Advisors, or Accountants. We also receive referrals from existing and previous clients. They use our services time and again to assist companies who are seeking independent commercial business advice.",
              "We work with our clients to assess and identify the most suitable funding solution to meet their needs. With access to every funder in the UK, we will then move quickly to arrange an introduction to the most suitable funder to match their requirements.",
              "In certain instances, our clients need to raise funds very quickly. We pride ourselves on being accessible at all times, and certainly do not operate on a 9 to 5 basis. If you need urgent advice, a call to 07748 408971 will always be responded to swiftly.",
              "It is a fundamental aspect of our business that we provide impartial, objective and appropriate advice to our clients.",
              "We are full members of the National Association of Commercial Finance Brokers, and comply fully with their code of conduct and principles of business.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80 leading-relaxed text-lg">{text}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-12 border-l-4 border-secondary pl-6 py-4 bg-muted rounded-r-lg">
            <p className="text-foreground/80 italic leading-relaxed text-lg">
              We have been working in the Corporate Finance market for over 30 years, and have been established as an independent business for over 15 years. We do not advertise, all our business comes by referral from Bank Managers, Accountants and Corporate Advisors, who use our services time and again to assist clients who are looking for impartial independent advice.
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
