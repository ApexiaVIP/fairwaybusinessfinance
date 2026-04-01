import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import nacfbLogo from "@/assets/nacfb.png";

const Footer = () => {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-secondary py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground text-center md:text-left">
            Get in contact with us today to understand how we can help you
          </h3>
          <Link
            to="/contact-us"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="space-y-4">
              <img src={nacfbLogo} alt="NACFB - Helping Fund UK Business" className="h-12 brightness-0 invert" />
              <p className="text-sm text-primary-foreground/80 max-w-lg leading-relaxed">
                We are registered with the ICO, ZA309916 and you can check via{" "}
                <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">
                  www.ico.org.uk
                </a>
                . We may receive commissions that will vary depending on the lender, product or other permissible
                factors. The nature of any commission model will be confirmed to you before you proceed.
              </p>
            </div>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-secondary" />
                <p>
                  Oak House, Garth Heights,<br />
                  Wilmslow Park, Wilmslow,<br />
                  Cheshire, SK9 2BA
                </p>
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
          <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
            <p>Fairway Business Finance Ltd — Reg Co No: 10283629</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
