import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Heart, Users, HandHeart, Lightbulb, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const Home = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Reaching underserved communities with essential services, education, and support programmes.",
    },
    {
      icon: HandHeart,
      title: "Welfare Support",
      description:
        "Providing food assistance, healthcare access, and emergency relief to families in need.",
    },
    {
      icon: Lightbulb,
      title: "Empowerment Programmes",
      description:
        "Equipping individuals with skills training, mentorship, and resources for sustainable livelihoods.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-32 overflow-hidden">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow scale-105"
            style={{ backgroundImage: "url('/divine-light-bg.png')" }}
          />
          {/* Dark Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-md">
                Transforming Lives Through Compassion and Action
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-100 font-medium mb-8 drop-shadow-md">
                We are a faith-based organisation committed to serving communities, 
                empowering individuals, and creating lasting change. Through transparent 
                governance and sustainable programmes, we work alongside local communities 
                to build a brighter future for all.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 bg-transparent hover:bg-white text-white hover:text-primary border-white">
                  <Link to="/gallery">View Our Work</Link>
                </Button>
                <Button asChild size="lg" className="animate-pulse-slow transition-all duration-300 hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/donate">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Focus Areas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We concentrate our efforts where they can make the greatest impact, 
                working hand-in-hand with communities to address their most pressing needs.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-transparent hover:border-primary/20">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        <area.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Together, We Make a Difference
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Every contribution, no matter the size, helps us extend our reach 
                and deepen our impact. Join us in our mission to serve those who 
                need it most.
              </p>
              <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105 shadow-lg">
                <Link to="/donate">
                  <Heart className="mr-2 h-4 w-4" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get Involved
                </h2>
                <p className="text-muted-foreground mb-6">
                  Whether you wish to volunteer your time, partner with us on 
                  programmes, or contribute financially, there are many ways to 
                  be part of our work. We welcome individuals, businesses, and 
                  organisations who share our vision for positive community change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="transition-transform duration-300 hover:scale-105">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="transition-transform duration-300 hover:scale-105">
                    <Link to="/executive">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-muted rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Transparent governance and financial accountability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Community-led approach to programme design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Regular impact reporting and updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Established presence and local expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Commitment to sustainable, long-term solutions
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
