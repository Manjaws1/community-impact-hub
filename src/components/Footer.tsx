import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Organisation Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="PANSDI Logo" className="h-14 w-14 object-contain rounded-full bg-white shadow-sm p-1" />
              <span className="text-2xl font-bold text-foreground font-serif">
                PANSDI
              </span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower marginalised communities in Nigeria through poverty reduction, self-reliance, and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Support Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <span className="text-lg text-muted-foreground">
                  Lagos, Nigeria<br />
                  (Office Address Placeholder)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg text-muted-foreground">+234 807 751 3753</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg text-muted-foreground">povalcrus@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">
              Office Hours
            </h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
              <li>Saturday: By Appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Poverty Alleviation Network & Self-Dependence Initiative. All rights reserved.
            </p>
            <p className="text-base text-muted-foreground font-medium">
              Registered NGO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
