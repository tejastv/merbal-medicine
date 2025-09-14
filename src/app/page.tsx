import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
