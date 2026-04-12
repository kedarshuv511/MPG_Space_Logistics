import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SitePlan from "@/components/SitePlan";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Specifications from "@/components/Specifications";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <SitePlan />
      <Gallery />
      <Specifications />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
