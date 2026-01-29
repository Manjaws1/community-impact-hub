import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Scale } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const Executive = () => {
  const executiveTeam = [
    {
      role: "Board Chairperson",
      description:
        "Provides strategic leadership and oversight, ensuring the organisation remains true to its mission and maintains the highest standards of governance.",
    },
    {
      role: "Executive Director",
      description:
        "Leads day-to-day operations, programme implementation, and stakeholder engagement. Accountable to the Board for organisational performance.",
    },
    {
      role: "Secretary",
      description:
        "Manages official correspondence, documentation, and ensures compliance with regulatory requirements and organisational policies.",
    },
    {
      role: "Treasurer",
      description:
        "Oversees financial management, budgeting, and reporting. Ensures transparent stewardship of all funds and resources.",
    },
    {
      role: "Programmes Coordinator",
      description:
        "Designs, implements, and monitors community programmes. Ensures activities align with organisational objectives and community needs.",
    },
    {
      role: "Outreach Lead",
      description:
        "Coordinates community engagement, volunteer mobilisation, and partnership development with local stakeholders.",
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
            style={{ backgroundImage: "url('/executive-bg.png')" }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
                Our Leadership
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-800 font-medium drop-shadow-sm">
                Meet the dedicated team responsible for guiding our organisation 
                with integrity, accountability, and a commitment to our mission.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Accountability
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our leadership is accountable to donors, partners, and the 
                  communities we serve through regular reporting and transparent 
                  operations.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Scale className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Governance
                </h3>
                <p className="text-sm text-muted-foreground">
                  We operate under a structured governance framework with clear 
                  roles, responsibilities, and oversight mechanisms.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Expertise
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team brings diverse experience in community development, 
                  finance, administration, and programme management.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Executive Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveTeam.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted shrink-0">
                        <User className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {member.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Our Commitment to Good Governance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to the highest standards of organisational 
              governance. Our Board meets regularly to review progress, assess 
              risks, and ensure that resources are used effectively. We conduct 
              annual audits and publish reports to maintain transparency with 
              our supporters and stakeholders.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Executive;
