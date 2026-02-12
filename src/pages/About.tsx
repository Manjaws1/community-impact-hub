import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, User } from "lucide-react";
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
      <section className="relative py-20 lg:py-32 overflow-hidden bg-secondary">
         {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-secondary mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
                About PANSDI
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                We are a grassroots development organisation dedicated to poverty alleviation, self-reliance, and the empowerment of marginalised communities in Nigeria.
              </p>
            </Reveal>
        </div>
      </section>

       {/* Organization Overview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
             <Reveal>
                <div className="bg-muted p-4 rounded-3xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                    <img src="/images/team-field.png" alt="PANSDI Team in the field" className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-video bg-gray-300 transform scale-100 hover:scale-[1.02] transition-transform duration-500" />
                </div>
             </Reveal>
             <Reveal delay={0.2}>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 font-serif">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-xl lg:text-2xl leading-relaxed">
                    <p>
                        The Poverty Alleviation Network & Self-Dependence Initiative (PANSDI) was founded with a singular vision: to break the cycle of poverty through sustainable, community-led solutions. 
                    </p>
                    <p>
                        Recognizing that true empowerment comes from within, we moved beyond traditional charity models to focus on skills acquisition, economic self-reliance, and capacity building. We work directly with women, youth, and rural populations to identify their unique assets and challenges.
                    </p>
                    <p>
                        Today, PANSDI stands as a beacon of hope, driving impactful programmes in vocational training, digital inclusion, and climate resilience across Nigeria.
                    </p>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
                <Card className="h-full border-t-4 border-t-primary shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <Target className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-serif">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                    To empower marginalised communities through targeted poverty reduction initiatives, promoting self-reliance, and fostering sustainable development for a future where everyone has the tools to thrive.
                    </p>
                </CardContent>
                </Card>
            </Reveal>

            <Reveal delay={0.2}>
                <Card className="h-full border-t-4 border-t-secondary shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                        <Eye className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-serif">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                    A self-reliant society where poverty is eradicated, human dignity is upheld, and every individual is empowered to contribute meaningfully to their community's growth.
                    </p>
                </CardContent>
                </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
              <Reveal>
                  <h2 className="text-3xl font-bold mb-12 font-serif">Leadership</h2>
                  <div className="max-w-sm mx-auto">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-border/50">
                          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden">
                              {/* Placeholder for Headshot */}
                              <User className="w-full h-full text-gray-400 p-4" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary">Ossai Chuks</h3>
                          <p className="text-accent font-medium mb-4 text-lg">Executive Director</p>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                              A visionary leader passionate about social justice and community development. With years of experience in the non-profit sector, Ossai leads PANSDI with integrity and a deep commitment to impact.
                          </p>
                      </div>
                  </div>
              </Reveal>
          </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                Our Core Values
              </h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded-full"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Reveal key={index} delay={index * 0.1}>
                    <Card className="hover:-translate-y-1 transition-transform duration-300 border-none shadow-sm bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-xl font-bold text-foreground mb-3 text-primary">
                        {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                        {value.description}
                        </p>
                    </CardContent>
                    </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
