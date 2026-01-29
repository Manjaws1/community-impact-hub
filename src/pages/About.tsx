import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const About = () => {
  const coreValues = [
    {
      title: "Compassion",
      description: "We serve with empathy and genuine care for every individual.",
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct.",
    },
    {
      title: "Accountability",
      description: "We are responsible stewards of the resources entrusted to us.",
    },
    {
      title: "Collaboration",
      description: "We work together with communities, partners, and stakeholders.",
    },
    {
      title: "Excellence",
      description: "We strive for quality and effectiveness in all our programmes.",
    },
    {
      title: "Respect",
      description: "We honour the dignity and worth of every person we serve.",
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
            style={{ backgroundImage: "url('/about-bg.png')" }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
                About Us
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-800 font-medium drop-shadow-sm">
                Learn more about our organisation, our mission, and the values that guide our work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Background
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Divine Ligth was established to address the pressing needs 
                of underserved communities through faith-inspired action. What began 
                as a local initiative has grown into a recognised non-profit 
                organisation serving thousands of individuals and families.
              </p>
              <p>
                Over the years, we have developed comprehensive programmes in 
                community outreach, welfare support, and sustainable development. 
                Our approach is rooted in collaboration—working directly with the 
                communities we serve to understand their unique challenges and 
                co-create solutions that make a lasting difference.
              </p>
              <p>
                Today, we continue to expand our reach while maintaining the 
                personal, community-centred approach that has defined our work 
                from the beginning. We remain committed to transparency, 
                accountability, and measurable impact in all that we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To serve and empower underserved communities through compassionate 
                  outreach, sustainable development programmes, and collaborative 
                  partnerships, guided by our faith and commitment to human dignity.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every individual has the opportunity to thrive—
                  where communities are empowered, families are supported, and 
                  hope is restored through collective action and unwavering compassion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide our decisions, shape our culture, and 
                define how we engage with the communities we serve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
