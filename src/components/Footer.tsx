import logo from "@/assets/MPG_LOGO/transparent-logo.svg";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <path
            fill="currentColor"
            d="M13.5 22v-8.1h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.8-.1-1.8-.2-2.9-.2-2.8 0-4.8 1.7-4.8 4.9v1.8H6.5v3.2h2.6V22h4.4z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <path
            fill="currentColor"
            d="M6.5 9.2H3.6V21h2.9V9.2zM5.1 3.5C4.1 3.5 3.3 4.3 3.3 5.3S4.1 7.1 5.1 7.1 6.9 6.3 6.9 5.3 6.1 3.5 5.1 3.5zM20.7 21h-2.9v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-2.9V9.2h2.8v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V21z"
          />
        </svg>
      ),
    },
    {
      label: "X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.2L6.6 22H3.5l7.3-8.4L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <path
            fill="currentColor"
            d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4A3.8 3.8 0 0 0 20 16.2V7.8A3.8 3.8 0 0 0 16.2 4H7.8z"
          />
          <path
            fill="currentColor"
            d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
          />
          <path fill="currentColor" d="M17.6 6.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="w-full pl-1 pr-6 md:pl-4 md:pr-12 lg:pl-6 lg:pr-16 py-12">
        <div className="max-w-[2200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 flex flex-col items-start">
              <a href="#top" aria-label="Back to top" className="inline-flex items-center gap-3 self-start">
                <div className="h-20 md:h-24 w-[360px] sm:w-[440px] md:w-[560px] overflow-hidden">
                  <img
                    src={logo}
                    alt="MPG Space and Logistics"
                    className="w-full h-full object-cover object-left brightness-0 invert"
                  />
                </div>
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

            <div className="md:col-span-3">
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

            <div className="md:col-span-2">
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

            <div className="md:col-span-2 md:justify-self-end">
              <div className="text-sm font-bold tracking-wide uppercase text-background/80">
                Follow Us
              </div>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={(e) => e.preventDefault()}
                    aria-label={s.label}
                    className="w-12 h-12 rounded-full border border-background/20 bg-background/5 hover:bg-background/10 hover:border-background/35 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40"
                  >
                    <span className="text-background">{s.icon}</span>
                  </a>
                ))}
              </div>
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
