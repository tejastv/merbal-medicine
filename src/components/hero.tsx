"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  const handleScroll = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[60dvh] md:h-[80dvh] w-full flex items-center justify-center text-center text-white !py-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-tight text-white">
          Rediscover Balance with Traditional Ayurveda
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
          Holistic healing for a healthier, more vibrant life. Experience the timeless wisdom of herbal medicine.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={handleScroll}
        >
          Explore Our Treatments
        </Button>
      </div>
    </section>
  );
};

export default Hero;