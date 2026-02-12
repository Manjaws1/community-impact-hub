import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/executive", label: "Executive" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  // Filter out donate from main nav if you want it separate, but existing code has it. 
  // Wait, existing code has separate Button for donate. 
  // I will just use the existing navLinks variable.

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-secondary shadow-xl border-b border-primary/20"
          : "bg-gradient-to-b from-secondary/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between py-2">
            <Link to="/" className="flex items-center gap-3 group">
            {/* Logo with enhanced styling */}
            <img 
              src="/images/logo.png" 
              alt="PANSDI Logo" 
              className={`h-12 w-12 object-contain rounded-full shadow-md border-2 border-white/20 transition-all duration-300 ${isScrolled ? "scale-100" : "scale-110"}`} 
            />
            <span className={`text-xl font-bold tracking-tight transition-all duration-300 font-serif ${
              isScrolled ? "text-primary-foreground" : "text-primary-foreground drop-shadow-md"
            }`}>
              PANSDI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/programmes", label: "Programmes" },
              { to: "/impact", label: "Impact" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                  isActive(link.to)
                    ? "text-accent font-semibold"
                    : "text-primary-foreground/90 hover:text-accent"
                } ${isActive(link.to) ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-accent text-primary font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg border-0 animate-pulse-slow">
              <Link to="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-primary/20 bg-secondary absolute top-[72px] left-0 right-0 shadow-2xl px-6">
            <div className="flex flex-col gap-5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/programmes", label: "Programmes" },
                { to: "/impact", label: "Impact" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                    isActive(link.to)
                      ? "text-accent bg-secondary/20 font-semibold"
                      : "text-primary-foreground/90 hover:text-accent hover:bg-secondary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-3 bg-accent text-primary font-semibold hover:bg-accent/90 shadow-lg py-6">
                <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
