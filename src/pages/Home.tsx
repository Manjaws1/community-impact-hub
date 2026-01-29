import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Heart, Users, HandHeart, Lightbulb, ArrowRight } from "lucide-react";

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
      <section className="relative py-20 lg:py-32 bg-muted/30 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Lives Through Compassion and Action
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We are a faith-based organisation committed to serving communities, 
              empowering individuals, and creating lasting change. Through transparent 
              governance and sustainable programmes, we work alongside local communities 
              to build a brighter future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">View Our Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="animate-pulse-slow">
                <Link to="/donate">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-24 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Focus Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We concentrate our efforts where they can make the greatest impact, 
              working hand-in-hand with communities to address their most pressing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <area.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Together, We Make a Difference
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Every contribution, no matter the size, helps us extend our reach 
              and deepen our impact. Join us in our mission to serve those who 
              need it most.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Support Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/executive">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
