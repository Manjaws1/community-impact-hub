
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Heart, Users, Notebook, Sprout, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ImpactCarousel } from "@/components/ImpactCarousel";

const Home = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Economic Empowerment",
      description:
        "Vocational training, micro-credit support, and skill acquisition for women and youth.",
    },
    {
      icon: Notebook, // Using Notebook instead of Computer/Wifi if not available, representing digital literacy/education
      title: "Digital Inclusion",
      description:
        "Bridging the digital divide with tech literacy programs for the modern age.",
    },
    {
      icon: Sprout,
      title: "Climate Resilience",
      description:
        "Promoting sustainable farming and eco-friendly practices in rural communities.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-secondary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             {/* Gradient Backup if image fails */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/30" />
            
            {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left: Text */}
            <div className="text-left text-white space-y-6">
              <Reveal>
                <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-medium text-sm rounded-full mb-4 border border-accent/20">
                    Trusted NGO in Nigeria
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">
                  Empowering Communities, <br/>
                  <span className="text-accent">Building Futures.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                  PANSDI is dedicated to poverty reduction, self-reliance, and sustainable development for marginalised women, youth, and rural populations.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90 shadow-lg shadow-accent/20">
                    <Link to="/donate">
                      <Heart className="mr-2 h-5 w-5 fill-current" />
                      Donate Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white hover:border-white">
                    <Link to="/programmes">
                      View Programmes
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: Carousel Component */}
            <div className="relative">
                 <Reveal delay={0.3}>
                    <ImpactCarousel />
                 </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">
                Our Core Focus Areas
              </h2>
              <p className="text-muted-foreground text-lg">
                We concentrate our efforts where they can make the greatest impact, 
                working hand-in-hand with communities to address their most pressing needs.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/40 bg-card overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                      <area.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {area.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-secondary relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/10" />
         <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
         
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
              Join us in creating lasting change.
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Your support can turn vulnerability into resilience and poverty into prosperity.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-2xl">
                <Link to="/contact">Get Involved Now <ArrowRight className="ml-2 w-5 h-5"/></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
