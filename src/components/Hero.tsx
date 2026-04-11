import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MapPin, Check } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import mainImage from "@/assets/Main_image.png";
import mainImage2 from "@/assets/main_2.png";
import mainImage3 from "@/assets/main_3.png";
import mainImage4 from "@/assets/main_4.png";
import mainImage5 from "@/assets/main_5.png";

// Array of warehouse images in your preferred order
const heroImages = [
  mainImage,   // Main_image.png
  mainImage3,  // main_3.png
  mainImage2,  // main_2.png
  mainImage5,  // main_5.png
  mainImage4,  // main_4.png
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Click-to-call with confirmation (mobile friendly)
  const handleCallClick = (phone = '+919810075922') => {
    const label = `Call ${phone.replace('+', '')}`;
    if (typeof window !== 'undefined') {
      // small confirm to avoid accidental taps
      if (window.confirm(`Call ${phone}?`)) {
        // analytics event if available
        // @ts-ignore
        window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: label });
        window.location.href = `tel:${phone}`;
      }
    }
  };

  return (
  // Stack columns on small screens, side-by-side on md+
  // Add top margin to compensate for the fixed header so the hero starts directly below it.
  <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row overflow-hidden mt-20 md:mt-24">
  {/* Left Column - Content Area (40% width). On small screens we show images first, so order this second on mobile */}
  <div className="order-2 md:order-1 w-full md:w-[35%] bg-[#282a2e] flex items-center py-6 md:py-8 px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Slightly smaller headings on mobile for better balance */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-2 animate-fade-in-up">
            <span className="block bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              Prime Warehouse / Industrial Space
            </span>
            <span className="block text-lg md:text-2xl lg:text-3xl font-bold text-accent mt-4 animate-fade-in-up animation-delay-100">
              <span className="inline-block animate-wave" style={{ animationDelay: '0ms' }}>A</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '50ms' }}>v</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '100ms' }}>a</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '150ms' }}>i</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '200ms' }}>l</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '250ms' }}>a</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '300ms' }}>b</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '350ms' }}>l</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '400ms' }}>e</span>
              <span className="inline-block"> </span>
              <span className="inline-block animate-wave" style={{ animationDelay: '450ms' }}>f</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '500ms' }}>o</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '550ms' }}>r</span>
              <span className="inline-block"> </span>
              <span className="inline-block animate-wave" style={{ animationDelay: '600ms' }}>L</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '650ms' }}>e</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '700ms' }}>a</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '750ms' }}>s</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '800ms' }}>e</span>
              <span className="inline-block"> </span>
              <span className="inline-block animate-wave" style={{ animationDelay: '850ms' }}>N</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '900ms' }}>o</span>
              <span className="inline-block animate-wave" style={{ animationDelay: '950ms' }}>w</span>
            </span>
          </h1>
          

          
          {/* Badge - Repositioned */}
          <div className="mb-8 mt-6 animate-fade-in-up animation-delay-200">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 w-full md:w-auto">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-lg md:text-xl font-bold text-white leading-relaxed">
                Available - 304,920 Sq Ft <span className="font-bold">Grade A</span> Warehouse
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
            <MapPin className="inline h-5 w-5 mr-2 text-accent" />
            NH 71, Rewari-Jhajjhar Highway | Village: Amadalpur
            {/* Drawer trigger opens an accessible drawer with the map */}
            <Drawer>
              <DrawerTrigger asChild>
                <button type="button" className="ml-3 inline-flex items-center gap-2 text-sm font-medium text-accent underline underline-offset-2">
                  View on map
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Warehouse location</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 h-[60vh] md:h-[70vh]">
                  <iframe
                    title="Warehouse location"
                    src={`https://www.google.com/maps?q=28.455,76.656944&z=16&output=embed`}
                    className="w-full h-full rounded"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=28.455,76.656944`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-accent underline"
                  >
                    Open in Google Maps
                  </a>
                  <DrawerClose asChild>
                    <button className="px-4 py-2 bg-gray-100 rounded">Close</button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-10 animate-fade-in-up animation-delay-400">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <div className="text-2xl md:text-3xl font-bold text-white">125,000</div>
              </div>
              <div className="text-sm font-semibold text-white/90 mt-2">Sq Ft Built-Up</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <div className="text-2xl md:text-3xl font-bold text-white">27</div>
              </div>
              <div className="text-sm font-semibold text-white/90 mt-2">Loading Docks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <div className="text-2xl md:text-3xl font-bold text-white">16m</div>
              </div>
              <div className="text-sm font-semibold text-white/90 mt-2">Center Height</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <div className="text-2xl md:text-3xl font-bold text-white">1.5 Acre</div>
              </div>
              <div className="text-sm font-semibold text-white/90 mt-2">Parking Area</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
            <Button asChild size="lg" className="text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/50 group">
              <a href="#specifications">
                Access Full Specs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50">
              Download Brochure
            </Button>
          </div>

          {/* Industries Section */}
          <div className="mt-12 animate-fade-in-up animation-delay-600">
            <p className="text-base md:text-lg text-white/70 mb-4 text-left font-semibold">Ideal for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {['E-Commerce', 'Logistics', 'FMCG', 'Automotive', 'Manufacturing'].map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 font-bold stroke-[3]" />
                  <span className="text-sm font-medium text-white/90">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* Right Column - Visual Area (60% width). */}
  <div className="order-1 md:order-2 w-full md:w-[65%] bg-white">
        <div className="relative w-full h-[42vh] min-h-[320px] md:h-full md:min-h-[80vh]">
          <img
            src={heroImages[currentImageIndex]}
            alt="Warehouse"
            className="w-full h-full object-cover object-center transition-all duration-500"
          />
          {/* Animated image indicator dots */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show image ${idx + 1}`}
                onClick={() => handleDotClick(idx)}
                className={`w-3.5 h-3.5 rounded-full border-2 border-orange-400 focus:outline-none transition-all duration-300
                  ${currentImageIndex === idx ? 'bg-orange-500 shadow-md scale-105' : 'bg-transparent hover:bg-orange-100'}
                `}
                style={{
                  opacity: currentImageIndex === idx ? 1 : 0.5,
                  borderWidth: currentImageIndex === idx ? 2 : 1,
                  boxShadow: currentImageIndex === idx ? '0 2px 8px rgba(255,140,0,0.10)' : undefined,
                  transition: 'all 0.25s cubic-bezier(.4,0,.2,1)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* map is handled via the Drawer component above */}
    </section>
  );
};

export default Hero;
