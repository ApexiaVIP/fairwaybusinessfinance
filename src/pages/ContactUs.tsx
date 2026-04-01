import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import patrickImg from "@/assets/team/patrick-murphy-full.jpeg";
import philSmallImg from "@/assets/team/phil-brown-small.jpeg";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jamesacton007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Contact Form Submission - Fairway Business Finance",
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ firstName: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Top section with photo, map placeholder and contact details */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Patrick photo */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={patrickImg}
                alt="Patrick Murphy - Managing Director"
                className="w-full h-72 lg:h-full object-cover object-top"
              />
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <iframe
                title="Fairway Business Finance Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.5!2d-2.2199!3d53.3290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE5JzQ0LjQiTiAywrAxMycxMS43Ilc!5e0!3m2!1sen!2suk!4v1"
                className="w-full h-72 lg:h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact details */}
            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-8 text-primary-foreground">
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 text-secondary" />
                  <p className="text-sm leading-relaxed">
                    Oak House,<br />
                    Garth Heights,<br />
                    Wilmslow Park,<br />
                    Wilmslow,<br />
                    Cheshire,<br />
                    SK9 2BA
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-secondary" />
                  <a href="tel:07748408971" className="text-sm hover:text-secondary transition-colors">07748 408971</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-secondary" />
                  <a href="mailto:fbfinance@btinternet.com" className="text-sm hover:text-secondary transition-colors">
                    fbfinance@btinternet.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Consultants */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Contact Us</h2>
              <div className="w-16 h-1 bg-secondary mb-8" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="First name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Our Consultants */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Our Consultants</h2>
              <div className="w-16 h-1 bg-secondary mb-8" />
              <div className="flex items-start gap-4 bg-muted p-6 rounded-lg">
                <img
                  src={philSmallImg}
                  alt="Phil Brown"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Phil Brown</h3>
                  <p className="text-sm text-muted-foreground mb-2">Senior Consultant</p>
                  <p className="text-sm text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:philbrownfbf@gmail.com" className="text-primary hover:underline">
                      philbrownfbf@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
