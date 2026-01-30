import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, TrendingUp, Users } from "lucide-react";

const Impact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Impact</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
                Real stories of change, resilience, and hope from the communities we serve.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 -mt-10 relative z-10">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                      { label: "Lives Touched", value: "5,000+", icon: Users },
                      { label: "Communities Served", value: "20+", icon: TrendingUp },
                      { label: "Graduation Rate", value: "95%", icon: TrendingUp }, // Placeholder icon
                  ].map((stat, i) => (
                      <Reveal key={i} delay={i * 0.1}>
                          <div className="bg-card p-10 rounded-xl shadow-lg text-center border border-border">
                              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                              <h3 className="text-5xl font-bold text-primary mb-3">{stat.value}</h3>
                              <p className="text-xl text-muted-foreground font-medium">{stat.label}</p>
                          </div>
                      </Reveal>
                  ))}
              </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <Reveal>
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Beneficiary Stories</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <Reveal delay={0.2}>
                <div className="bg-muted/30 p-10 lg:p-12 rounded-3xl relative h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 italic mb-10 pt-10 leading-relaxed font-serif">
                      "Before PANSDI, I struggled to feed my family. The tailoring workshop gave me a skill that now sustains us. I am proud to be independent and able to send my children to school."
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img src="/images/beneficiary-tailoring.png" alt="Mrs. Nkechi" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Mrs. Nkechi</h4>
                      <p className="text-lg text-muted-foreground">Tailoring Beneficiary</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="bg-muted/30 p-10 lg:p-12 rounded-3xl relative h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 italic mb-10 pt-10 leading-relaxed font-serif">
                      "The digital literacy training opened my eyes. I can now manage my farm records using a computer. It has changed my business."
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img src="/images/beneficiary-agro.png" alt="Musa Ibrahim" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Musa Ibrahim</h4>
                      <p className="text-lg text-muted-foreground">Agro-Business Trainee</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Before/After Placeholder */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
              <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold mb-10">Transformation Gallery</h2>
                  <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src="/images/transformation.png" alt="Transformation Before and After" className="w-full h-auto" />
                  </div>
              </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Impact;
