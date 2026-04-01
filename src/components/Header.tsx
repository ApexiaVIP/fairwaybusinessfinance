import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Fairway Business Finance
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-secondary bg-primary"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:07748408971"
            className="ml-4 flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            07748 408971
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-secondary bg-primary"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:07748408971"
            className="mt-2 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-md text-sm font-bold"
          >
            <Phone className="w-4 h-4" />
            07748 408971
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
