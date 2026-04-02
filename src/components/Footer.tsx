import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import nacfbLogo from "@/assets/nacfb.png";

const Footer = () => {
  return (
    <footer>
      {/* CTA Banner */}
      <section className="relative overflow-hidden gradient-hero py-16 md:py-20">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to discuss your funding needs?
          </h3>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Get impartial, expert advice tailored to your business requirements.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-foreground text-background py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Branding */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
                  F
                </div>
                <div>
                  <span className="font-heading text-lg font-bold text-background leading-tight block">
                    Fairway
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-background/50 font-medium">
                    Business Finance
                  </span>
                </div>
              </div>
              <img src={nacfbLogo} alt="NACFB - Helping Fund UK Business" className="h-10 brightness-0 invert opacity-60" />
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-bold text-background mb-2">Contact</h4>
              <div className="space-y-3 text-sm text-background/60">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-secondary" />
                  <p>Oak House, Garth Heights,<br />Wilmslow Park, Wilmslow,<br />Cheshire, SK9 2BA</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-secondary" />
                  <a href="tel:07748408971" className="hover:text-secondary transition-colors">07748 408971</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0 text-secondary" />
                  <a href="mailto:fbfinance@btinternet.com" className="hover:text-secondary transition-colors">fbfinance@btinternet.com</a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-bold text-background mb-2">Legal</h4>
              <p className="text-sm text-background/50 leading-relaxed">
                We are registered with the ICO, ZA309916 and you can check via{" "}
                <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">
                  www.ico.org.uk
                </a>
                . We may receive commissions that will vary depending on the lender, product or other permissible
                factors. The nature of any commission model will be confirmed to you before you proceed.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
            <p>© {new Date().getFullYear()} Fairway Business Finance Ltd — Reg Co No: 10283629</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
