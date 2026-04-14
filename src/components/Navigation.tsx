import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import logo from "@/assets/MPG_LOGO/transparent-logo.svg";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = '+91-9810075922';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40 shadow-sm transition-all duration-300 hover:bg-white/90">
      <div className="w-full pr-6 md:pr-12 lg:pr-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center -ml-2 md:-ml-4">
            <div className="flex items-center">
              <a href="/" aria-label="Go to Home">
                <img src={logo} alt="MPG Space and Logistics" className="h-56 md:h-80 lg:h-96 object-contain" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-base font-semibold text-foreground hover:text-primary transition-all relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#gallery" className="text-base font-semibold text-foreground hover:text-primary transition-all relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#specifications" className="text-base font-semibold text-foreground hover:text-primary transition-all relative group">
              Specifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#benefits" className="text-base font-semibold text-foreground hover:text-primary transition-all relative group">
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-base font-semibold text-foreground hover:text-primary transition-all relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-base">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+91-9810075922"
                  onClick={(e) => {
                    // @ts-ignore
                    window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'call_nav' });
                  }}
                  className="text-foreground font-medium"
                >
                  +91-9810075922
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:leasing@mpgspacelogistics.com"
                  onClick={(e) => {
                    // fire analytics then let mailto proceed
                    // @ts-ignore
                    window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'email_nav' });
                  }}
                  className="text-foreground font-medium underline"
                >
                  leasing@mpgspacelogistics.com
                </a>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border/30">
          <div className="px-6 py-6 space-y-4">
            <a onClick={() => setOpen(false)} href="#services" className="block text-lg font-semibold text-foreground">Services</a>
            <a onClick={() => setOpen(false)} href="#gallery" className="block text-lg font-semibold text-foreground">Gallery</a>
            <a onClick={() => setOpen(false)} href="#specifications" className="block text-lg font-semibold text-foreground">Specifications</a>
            <a onClick={() => setOpen(false)} href="#benefits" className="block text-lg font-semibold text-foreground">Benefits</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-lg font-semibold text-foreground">Contact</a>
            {/* Phone and Email removed from mobile menu */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
