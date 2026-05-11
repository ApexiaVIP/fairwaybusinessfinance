const PrivacyNotice = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Privacy Notice</h1>
      <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">Who we are</h2>
          <p>
            Fairway Business Finance Limited are Commercial Finance Brokers based in Wilmslow, Cheshire.
          </p>
          <p>Our registered address is Victoria House, Victoria Road, Hale, Altrincham WA15 9AF.</p>
          <p><strong>ICO Registration Number:</strong> ZA309916</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">What data do we collect?</h2>
          <p>Our Company collects the following data:</p>
          <ul className="list-disc pl-6">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">How do we collect your data?</h2>
          <p>You directly provide Our Company with most of the data we collect. We collect data and process data when you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Register online or other communication methods for our services.</li>
            <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
            <li>Use or view our website via your browser's cookies.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">How will we use your data?</h2>
          <p>Our Company collects your data so that we can process your application and manage your request.</p>
          <p>
            When Our Company processes your data, it may send your data to, and also use the resulting information from,
            credit reference agencies to prevent fraudulent purchases.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">How do we store your data?</h2>
          <p>Our Company securely stores your data at Oak House, Garth Heights, Wilmslow, Cheshire SK9 2BA.</p>
          <p>
            Our Company will keep your personal data for 6 years. Once this time period has expired, we will delete,
            shred or fully anonymise the data we hold on you.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">What are your data protection rights?</h2>
          <p>Our Company would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The right to access</strong> – You have the right to request Our Company for copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that Our Company correct any information you believe is inaccurate. You also have the right to request Our Company to complete the information you believe is incomplete.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that Our Company erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that Our Company restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to Our Company's processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that Our Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p className="mt-4">
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at:{" "}
            <a href="mailto:fbfinance@btinternet.com" className="text-primary underline">fbfinance@btinternet.com</a>,
            call us on 07748 408971, or write to us at Oak House, Garth Heights, Wilmslow, Cheshire SK9 2BA.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">Changes to our privacy policy</h2>
          <p>
            Our Company keeps its privacy policy under regular review and places any updates on this web page.
            This privacy policy was last updated on 3 January 2021.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">How to contact us</h2>
          <p>
            If you have any questions about Our Company's privacy policy, the data we hold on you, or you would like to
            exercise one of your data protection rights, please do not hesitate to contact us.
          </p>
          <p>
            Email: <a href="mailto:fbfinance@btinternet.com" className="text-primary underline">fbfinance@btinternet.com</a><br />
            Call: 07748 408971<br />
            Write: Oak House, Garth Heights, Wilmslow, Cheshire SK9 2BA
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-3">How to contact the appropriate authority</h2>
          <p>
            Should you wish to report a complaint or if you feel that Our Company has not addressed your concern in a
            satisfactory manner, you may contact the Information Commissioner's Office (ICO):
          </p>
          <p>
            Website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.ico.org.uk</a><br />
            Helpline: 0303 123 1113
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyNotice;
