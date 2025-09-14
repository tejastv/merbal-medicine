import { Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Start your journey towards better health today.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <a href="tel:9704661391" className="text-muted-foreground hover:text-primary transition-colors">
                    9704661391
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    Devipada, Borivali (East), Mumbai - 400066
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
