import logo from "@/assets/MPG_LOGO/transparent-logo.svg";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="w-full px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <a href="#top" aria-label="Back to top" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt="MPG Space and Logistics"
                  className="h-28 sm:h-32 md:h-40 lg:h-44 w-auto object-contain brightness-0 invert"
                />
              </a>

              <p className="mt-4 text-sm md:text-base text-background/80 leading-relaxed max-w-xl text-justify indent-6">
                Grade A warehousing and distribution space on the Jhajjar–Rewari (NH 352) corridor,
                designed for high-throughput operations and efficient Delhi NCR coverage. 
                Mr. Sudhir Gupta and Mr. Vishesh Gupta are the visionary founders of the 
                organization, bringing rich experience in the warehousing, logistics, and industrial 
                space sector. With a deep understanding of modern business requirements, they are 
                committed to delivering strategically located, reliable, and future-ready warehouse 
                solutions that meet the evolving needs of clients in today’s fast-moving modern logistics and 
                commercial era.
              </p>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-background hover:text-background/90 underline underline-offset-4"
                >
                  Leasing inquiries
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-bold tracking-wide uppercase text-background/80">
                Corporate Office
              </div>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/80 mt-0.5" />
                <div className="text-sm md:text-base text-background/90 leading-relaxed">
                  MPG Space & Logistics, GF, Trunk Market, Sadar Bazar,
                  <br />
                  Gurugram, Haryana 122001
                </div>
              </div>

              <div className="mt-6 text-sm font-bold tracking-wide uppercase text-background/80">
                Contact
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-background/80 mt-0.5" />
                  <div className="text-sm md:text-base">
                    <div className="text-background/80">Send an email</div>
                    <a
                      className="text-background hover:text-background/90 underline underline-offset-4"
                      href="mailto:leasing@mpgspacelogistic.in"
                    >
                      leasing@mpgspacelogistic.in
                    </a>
                    <div>
                      <a
                        className="text-background hover:text-background/90 underline underline-offset-4"
                        href="mailto:vishesh@mpgspacelogistic.in"
                      >
                        vishesh@mpgspacelogistic.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-background/10" />

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-background/80 mt-0.5" />
                  <div className="text-sm md:text-base">
                    <div className="text-background/80">Say hello</div>
                    <a
                      className="text-background hover:text-background/90 underline underline-offset-4"
                      href="tel:+919810075922"
                    >
                      +91-9810075922
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-bold tracking-wide uppercase text-background/80">
                Quick Links
              </div>
              <nav className="mt-4 grid grid-cols-1 gap-3 text-sm md:text-base">
                <a className="text-background/90 hover:text-background underline underline-offset-4" href="#services">
                  About
                </a>
                <a className="text-background/90 hover:text-background underline underline-offset-4" href="#site-plan">
                  Site Plan
                </a>
                <a className="text-background/90 hover:text-background underline underline-offset-4" href="#gallery">
                  Gallery
                </a>
                <a className="text-background/90 hover:text-background underline underline-offset-4" href="#specifications">
                  Specifications
                </a>
                <a className="text-background/90 hover:text-background underline underline-offset-4" href="#contact">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left: copyright */}
            <div className="w-full md:w-auto text-sm text-background/70 text-center md:text-left">
              © {year} MPG Space and Logistics. All rights reserved.
            </div>

            {/* Center: illustrative images notice - centered in the row on md+ */}
            <div className="w-full md:flex-1 text-center">
              <div className="inline-block text-xs text-background/55">
                Images used in this website are for illustrative purpose only.
              </div>
            </div>

            {/* Right: leasing contact */}
            <div className="w-full md:w-auto text-sm text-background/70 text-center md:text-right">
              Leasing:{" "}
              <a className="text-background/80 hover:text-background underline underline-offset-4" href="mailto:leasing@mpgspacelogistic.in">
                leasing@mpgspacelogistic.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
