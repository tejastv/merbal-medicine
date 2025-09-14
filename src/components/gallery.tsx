"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    condition: "Weight Management",
    content: "After struggling with weight for years, Dr. Vaidraj's Ayurvedic approach transformed my life. I lost 15 kg naturally and feel more energetic than ever!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Patel",
    condition: "Chronic Acidity",
    content: "The personalized treatment plan completely resolved my acidity issues. No more burning sensation or discomfort after meals. Truly holistic healing!",
    rating: 5,
    avatar: "RP",
  },
  {
    name: "Anjali Mehta",
    condition: "Sinus Problems",
    content: "Seasonal allergies used to debilitate me every spring. Thanks to Dr. Vaidraj's herbal remedies, I can now enjoy the outdoors without constant sneezing and congestion.",
    rating: 4,
    avatar: "AM",
  },
  {
    name: "Vikram Singh",
    condition: "Piles Treatment",
    content: "I was skeptical about non-surgical treatment for piles, but the Ayurvedic approach not only healed me but also prevented recurrence. Highly recommended!",
    rating: 5,
    avatar: "VS",
  },
  {
    name: "Sunita Desai",
    condition: "Stress & Anxiety",
    content: "The herbal formulations and lifestyle guidance helped me manage my anxiety naturally. I've found peace and balance without any side effects.",
    rating: 5,
    avatar: "SD",
  },
  {
    name: "Amit Kumar",
    condition: "Joint Pain",
    content: "As a fitness enthusiast, joint pain was limiting my activities. The Ayurvedic treatment restored my mobility and reduced inflammation significantly.",
    rating: 4,
    avatar: "AK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Patient Testimonials
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Hear from people who transformed their health with our Ayurvedic treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white dark:bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 text-accent">
                <Quote className="h-6 w-6" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <blockquote className="text-lg md:text-xl italic text-foreground">
                "Ayurveda is not just about treating disease, but about creating a balance that prevents illness and promotes longevity. Our approach treats the root cause, not just the symptoms."
              </blockquote>
              <div className="mt-4">
                <p className="font-headline text-accent font-semibold">- Dr. A. Srinivas Vaidraj</p>
                <p className="text-sm text-muted-foreground">B.A.M.S., Practicing Ayurveda for 20+ Years</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
