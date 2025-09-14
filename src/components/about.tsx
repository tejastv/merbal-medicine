import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === "vaidraj-portrait"
  );

  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Meet A. Srinivas Vaidraj
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Your guide to a healthier life through Ayurveda.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0 md:p-6">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="md:col-span-1">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={400}
                    height={400}
                    className="rounded-t-lg md:rounded-lg aspect-square object-cover w-full h-auto"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <div className="md:col-span-2 p-6 md:p-0">
                <h3 className="text-2xl font-bold font-headline">
                  A Legacy of Healing
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  A. Srinivas Vaidraj continues a proud family tradition of
                  Ayurvedic practice, bringing decades of inherited knowledge and
                  clinical experience to his patients. With a deep understanding
                  of herbal remedies and holistic health, he is dedicated to
                  providing natural, effective solutions for a wide range of
                  health concerns.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  His approach combines the timeless wisdom of Ayurveda with a
                  personalized touch, ensuring that each patient receives care
                  tailored to their unique constitution and health goals. He
                  believes in empowering individuals to take control of their
                  health and well-being through balanced living and the gentle
                  power of nature.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
