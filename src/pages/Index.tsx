import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Specifications from "@/components/Specifications";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Specifications />
      <Benefits />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="w-full px-6 md:px-12 lg:px-16 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MPG Space and Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
