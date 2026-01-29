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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60 border-b border-primary/20 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Logo: White background on blue header for pop, transparent on hero */}
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isScrolled ? "bg-white" : "bg-white/10 backdrop-blur-sm"}`}>
              <Heart className={`h-5 w-5 ${isScrolled ? "text-primary" : "text-white"}`} />
            </div>
            <span className="text-xl font-bold text-white">
              Divine Light
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.to)
                    ? "text-accent font-bold"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4 animate-pulse-slow bg-accent text-accent-foreground hover:bg-accent/90 border-0">
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
          <nav className="lg:hidden py-4 border-t border-white/10 bg-primary absolute top-16 left-0 right-0 shadow-xl px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(link.to)
                      ? "text-accent font-bold"
                      : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
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
