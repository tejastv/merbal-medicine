import {
  Scale,
  HeartPulse,
  Flame,
  Wind,
  Sparkles,
  User,
  Bone,
  Accessibility,
  Gem,
  Droplets,
  Heart,
  Brain,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const services = [
  {
    icon: <Scale className="h-8 w-8 text-accent" />,
    title: "Weight Gain / Loss",
    description: "Personalized plans to achieve your ideal weight.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-accent" />,
    title: "Piles",
    description: "Effective and gentle relief from discomfort.",
  },
  {
    icon: <Flame className="h-8 w-8 text-accent" />,
    title: "Acidity",
    description: "Natural solutions to balance digestive health.",
  },
  {
    icon: <Wind className="h-8 w-8 text-accent" />,
    title: "Sinus & Gas Trouble",
    description: "Herbal remedies for respiratory and digestive ease.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: "Skin Allergy",
    description: "Soothing treatments for clear, healthy skin.",
  },
  {
    icon: <User className="h-8 w-8 text-accent" />,
    title: "Hairfall",
    description: "Strengthen your roots and promote hair growth.",
  },
  {
    icon: <Bone className="h-8 w-8 text-accent" />,
    title: "Joint Pains",
    description: "Improve mobility and reduce joint inflammation.",
  },
  {
    icon: <Accessibility className="h-8 w-8 text-accent" />,
    title: "Paralysis",
    description: "Supportive therapies to aid in recovery.",
  },
  {
    icon: <Gem className="h-8 w-8 text-accent" />,
    title: "Kidney Stones",
    description: "Natural methods to manage and prevent kidney stones.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-accent" />,
    title: "Blood Pressure",
    description: "Herbal support for maintaining healthy blood pressure.",
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Cholesterol",
    description: "Balancing lipid levels for a healthy heart.",
  },
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: "Migraine",
    description: "Holistic relief from chronic headaches and migraines.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Our Treatments
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A holistic approach to your health and wellness.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
