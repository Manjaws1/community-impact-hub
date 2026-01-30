import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Sprout, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Programmes = () => {
  const programmes = [
    {
      title: "Economic Empowerment",
      description: "Providing vocational training, micro-credit support, and skills acquisition workshops to empower women and youth.",
      icon: <Users className="w-12 h-12 text-primary" />,
      features: ["Tailoring & Fashion Design", "Soap Making & Crafts", "Financial Literacy"],
      image: "/images/economic-empowerment.png"
    },
    {
      title: "Agro-Business Support",
      description: "Enhancing food security through sustainable farming practices, seedling distribution, and market access.",
      icon: <Sprout className="w-12 h-12 text-secondary" />,
      features: ["Seedling Distribution", "Farming Tools", "Market Access Support"],
      image: "/images/agro-business.png"
    },
    {
      title: "Health & Wellness",
      description: "Community health outreach, sanitation workshops, and maternal health support for rural areas.",
      icon: <Heart className="w-12 h-12 text-accent" />,
      features: ["Medical Outreach", "Sanitation Workshops", "Maternal Care"],
      image: "/images/health-wellness.png"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">Our Programmes</h1>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
                Targeted initiatives designed to foster self-reliance and sustainable growth in our communities.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Programme List */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:gap-24">
              {programmes.map((prog, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} bg-card p-10 lg:p-12 rounded-3xl shadow-lg border border-border/50`}>
                    <div className="flex-1 space-y-8">
                      <div className="p-4 bg-muted/50 rounded-full w-fit mb-4">
                        {prog.icon}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground font-serif">{prog.title}</h3>
                      <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed">{prog.description}</p>
                      <ul className="space-y-4 mt-6">
                        {prog.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-4 text-lg lg:text-xl text-foreground/80">
                            <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button size="lg" variant="outline" className="mt-8 text-lg px-8 py-6 h-auto">Learn More <ArrowRight className="ml-2 w-5 h-5"/></Button>
                    </div>
                    <div className="flex-1 w-full h-80 lg:h-[500px] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-xl">
                       <img 
                        src={prog.image} 
                        alt={prog.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </Reveal> 
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
              <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Want to support these initiatives?</h2>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-xl px-10 py-6 h-auto" asChild>
                      <Link to="/donate">Make a Donation</Link>
                  </Button>
              </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Programmes;
