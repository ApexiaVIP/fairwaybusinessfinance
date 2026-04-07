import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
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
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/fbfinance@btinternet.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Contact Form Submission - Fairway Business Finance",
        }),
      });

      if (response.ok) {
        toast({ title: "Message sent successfully!", description: "We'll get back to you as soon as possible." });
        setFormData({ firstName: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({ title: "Failed to send message", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero with map & contact */}
      <section className="relative gradient-hero py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-8 h-px bg-secondary" /> Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-10"
          >
            Contact Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-5"
          >
            {/* Patrick */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={patrickImg}
                alt="Patrick Murphy - Managing Director"
                className="w-full h-64 lg:h-full object-cover object-top"
              />
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden">
              <iframe
                title="Fairway Business Finance Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.5!2d-2.2199!3d53.3290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE5JzQ0LjQiTiAywrAxMycxMS43Ilc!5e0!3m2!1sen!2suk!4v1"
                className="w-full h-64 lg:h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact details */}
            <div className="glass-dark rounded-2xl p-8 text-primary-foreground flex flex-col justify-center">
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">
                    Oak House, Garth Heights,<br />
                    Wilmslow Park, Wilmslow,<br />
                    Cheshire, SK9 2BA
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="tel:07748408971" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">07748 408971</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="mailto:fbfinance@btinternet.com" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    fbfinance@btinternet.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Consultants */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="text-secondary text-sm font-bold uppercase tracking-widest">Send a Message</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-5 py-3.5 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3.5 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <textarea
                  placeholder="Your message *"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 border border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-secondary/25 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Consultants */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-secondary text-sm font-bold uppercase tracking-widest">Speak Directly</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-8">Our Consultants</h2>
              <div className="space-y-4">
                <div className="glass rounded-2xl p-5 flex items-center gap-4">
                  <img
                    src={philSmallImg}
                    alt="Phil Brown"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">Phil Brown</h3>
                    <p className="text-xs text-muted-foreground mb-1">Senior Consultant</p>
                    <a href="mailto:philbrownfbf@gmail.com" className="text-xs text-primary hover:underline">
                      philbrownfbf@gmail.com
                    </a>
                  </div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We pride ourselves on being accessible at all times and certainly do not operate on a 9 to 5 basis. If you need urgent advice, we will always respond swiftly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
