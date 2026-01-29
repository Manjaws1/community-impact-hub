import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organisation Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">
                Divine Light
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering communities through faith, compassion, and sustainable development.
            </p>
            <Button asChild className="mt-4 bg-accent text-primary font-semibold hover:bg-accent/90 shadow-lg">
              <Link to="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Support Our Mission
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/executive" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  [Street Address]<br />
                  [City, Region]<br />
                  [Country]
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">[Phone Number]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">[Email Address]</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span>8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Divine Light. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Registered Non-Profit Organisation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
