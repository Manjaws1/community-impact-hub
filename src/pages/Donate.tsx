import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  CreditCard,
  Building,
  Smartphone,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const Donate = () => {
  const donationSupports = [
    "Food assistance and nutrition programmes for vulnerable families",
    "Educational resources and scholarships for children",
    "Healthcare access and medical outreach initiatives",
    "Skills training and livelihood empowerment projects",
    "Emergency relief and disaster response efforts",
    "Community infrastructure development",
  ];

  const donationMethods = [
    {
      icon: CreditCard,
      title: "Online Donation",
      description:
        "Make a secure donation using your credit or debit card through our online payment platform.",
      action: "Donate Online",
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description:
        "Transfer directly to our organisation's bank account. Contact us for banking details.",
      action: "Get Bank Details",
    },
    {
      icon: Smartphone,
      title: "Mobile Money",
      description:
        "Donate conveniently via mobile money transfer. Contact us for mobile payment details.",
      action: "Get Mobile Details",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow scale-105"
            style={{ backgroundImage: "url('/donate-bg.png')" }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm p-2 flex items-center justify-center shadow-lg">
                  <img src="/images/logo.png" alt="PANSDI Logo" className="h-full w-full object-contain rounded-full" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
                Your Generosity Changes Lives
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-800 font-medium opacity-90 drop-shadow-sm">
                Every donation, regardless of size, brings hope and creates 
                lasting change in the communities we serve. Together, we can 
                make a difference.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Your Donation Matters
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
                As a registered non-profit organisation, we rely entirely on 
                the generosity of individuals, businesses, and partners to fund 
                our programmes. Your contribution directly supports our work in 
                the community.
              </p>
            </div>

            <Card className="mb-12 shadow-lg">
              <CardContent className="p-10">
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Your Donation Supports:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {donationSupports.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How to Donate
              </h2>
              <p className="text-muted-foreground">
                Choose the donation method that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {donationMethods.map((method, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <method.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      {method.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">{method.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal>
                <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                        Transparency & Accountability
                        </h3>
                        <p className="text-muted-foreground mb-4">
                        PANSDI is a registered non-profit organisation committed to the transparent and responsible use of all donations. We ensure that every Naira contributes directly to our mission.
                        </p>
                        <p className="text-sm font-medium text-primary">
                        Verified Non-Profit Organisation
                        </p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join the community of supporters who are helping us transform 
              lives. Your gift today will create ripples of positive change 
              for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Us for Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
