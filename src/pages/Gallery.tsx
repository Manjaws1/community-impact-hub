import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users, Heart, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const Gallery = () => {
  const galleryCategories = [
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Images from our field visits, community meetings, and grassroots engagement activities.",
    },
    {
      icon: Heart,
      title: "Welfare Programmes",
      description:
        "Documentation of our food distribution, healthcare initiatives, and emergency relief efforts.",
    },
    {
      icon: BookOpen,
      title: "Empowerment Initiatives",
      description:
        "Photographs from skills training workshops, educational programmes, and mentorship sessions.",
    },
    {
      icon: Camera,
      title: "Events & Celebrations",
      description:
        "Moments captured during special events, programme milestones, and community gatherings.",
    },
  ];

  // Placeholder gallery items
  const galleryItems = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    placeholder: true,
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-slow scale-105"
            style={{ backgroundImage: "url('/gallery-bg.png')" }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
                Gallery
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-800 font-medium drop-shadow-sm">
                A visual journey through our programmes, community engagement, and 
                the impact we create together. These images tell the story of 
                transformation and hope.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              What You'll Find Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {galleryCategories.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gallery Grid */}
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Work in Pictures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                  "/images/economic-empowerment.png",
                  "/images/team-field.png",
                  "/images/beneficiary-tailoring.png",
                  "/images/agro-business.png",
                  "/images/transformation.png",
                  "/images/beneficiary-agro.png",
                  "/images/health-wellness.png"
              ].map((src, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Images will be added as programmes are documented. Check back regularly for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Be Part of the Story
            </h2>
            <p className="text-muted-foreground">
              Every image represents lives touched and communities transformed. 
              Your support helps us continue this work and create more stories of impact.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
