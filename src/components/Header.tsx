import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Funding Options", path: "/funding-options" },
  { label: "Our Team", path: "/our-team" },
  { label: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight tracking-tight">
              Fairway
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium -mt-0.5">
              Business Finance
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 gradient-gold rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="tel:07748408971"
            className="ml-3 flex items-center gap-2 gradient-gold text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            07748 408971
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {location.pathname === item.path && (
                      <ArrowRight className="w-4 h-4 text-secondary" />
                    )}
                  </span>
                </Link>
              ))}
              <a
                href="tel:07748408971"
                className="mt-2 flex items-center justify-center gap-2 gradient-gold text-secondary-foreground px-4 py-3 rounded-lg text-sm font-bold"
              >
                <Phone className="w-4 h-4" />
                07748 408971
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
