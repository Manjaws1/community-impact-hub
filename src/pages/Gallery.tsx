import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users, Heart, BookOpen } from "lucide-react";

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
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              A visual journey through our programmes, community engagement, and 
              the impact we create together. These images tell the story of 
              transformation and hope.
            </p>
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
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Our Work in Pictures
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="aspect-square rounded-lg bg-muted flex items-center justify-center"
                >
                  <div className="text-center p-4">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      [Image {item.id}]
                    </p>
                  </div>
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
