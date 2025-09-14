"use client";

import { useState, useTransition } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { getHerbImages } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Bot } from "lucide-react";

const formSchema = z.object({
  herbName: z.string().min(3, "Herb name must be at least 3 characters."),
});

const Gallery = () => {
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      herbName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setImages([]);
    startTransition(async () => {
      const result = await getHerbImages(values.herbName);
      if (result.error) {
        toast({
          title: "Generation Failed",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.data) {
        setImages(result.data);
        toast({
          title: "Images Generated!",
          description: `Successfully created images for ${values.herbName}.`,
        });
      }
    });
  };

  return (
    <section id="gallery" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-accent">
            Medicinal Herb Gallery
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Generate images of Ayurvedic herbs with our AI tool.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Generate Herb Images</CardTitle>
              <CardDescription>
                Enter the name of a medicinal herb to see it in various settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="herbName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Herb Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Ashwagandha, Turmeric" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isPending ? "Generating..." : "Generate"}
                    {!isPending && <Bot className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-8 md:mt-0">
            <h3 className="text-2xl font-headline mb-4 text-center md:text-left">Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {isPending &&
                Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="aspect-square w-full rounded-lg" />
                ))}
              {!isPending && images.length > 0 &&
                images.map((src, i) => (
                  <div key={i} className="aspect-square relative rounded-lg overflow-hidden border shadow-sm">
                    <Image
                      src={src}
                      alt={`Generated image of ${form.getValues("herbName")} ${i + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 15vw"
                    />
                  </div>
                ))}
              {!isPending && images.length === 0 && (
                 <div className="sm:col-span-3 text-center text-muted-foreground py-10 border-2 border-dashed rounded-lg">
                    <p>Images will appear here once generated.</p>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
