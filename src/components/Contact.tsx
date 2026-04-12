import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { FormEvent, useState } from "react";
import sendMessageImg from "@/assets/sned_message.jpg";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // Try to parse JSON error response
        const json = await res.json().catch(() => null);
        const msg = json?.error || json?.errors?.[0]?.message || "Submission failed.";
        setErrorMessage(msg);
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Network error");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to optimize your supply chain? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>
              {/*
                NOTE: This form is a static frontend form. It had no name attributes
                or submit action previously, so submissions did not send anywhere.
                This version submits via fetch to Formspree and shows an in-site
                success/error message (no redirect).
              */}
              <form action="https://formspree.io/f/maqwbopg" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe"
                    className="transition-all focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="_replyto" /* Formspree uses `_replyto` to set Reply-To for email replies */
                    type="email" 
                    placeholder="john@company.com"
                    className="transition-all focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="transition-all focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your storage and logistics needs..."
                    rows={4}
                    className="transition-all focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                {/* optional hidden subject for Formspree or other services */}
                <input type="hidden" name="_subject" value="New contact form submission" />

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg group" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-6 rounded-lg border bg-slate-50 overflow-hidden">
                  <img
                    src={sendMessageImg}
                    alt="Send message illustration"
                    className="w-full h-56 md:h-64 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </form>
              {status === 'success' && (
                <div className="mt-4 p-4 rounded bg-green-50 border border-green-200 text-green-800">
                  Thanks — your message was sent successfully. We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 rounded bg-red-50 border border-red-200 text-red-800">
                  Sorry — there was a problem submitting your message. {errorMessage ? `(${errorMessage})` : ''}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Location</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          MPG Space & Logistics, NH 71, Rewari-Jhajjhar Highway<br />
                          Amadalpur, District Jhajjhar, Haryana 124103, India<br />
                          Coordinates: 28°27'18"N 76°39'25"E<br />
                          <span className="text-sm mt-2 block font-medium">Connected to: Reliance Met City, Rohtak-Hissar, Kundli, Palwal, Manesar, NH 48</span>
                        </p>
                        <div className="mt-3">
                          <Drawer>
                            <DrawerTrigger asChild>
                              <button className="inline-flex items-center gap-2 px-3 py-2 rounded bg-accent text-white text-sm">
                                View on map
                              </button>
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle>Warehouse location</DrawerTitle>
                              </DrawerHeader>
                              <div className="p-4 h-[55vh] md:h-[70vh]">
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
                        </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                                  <p className="text-muted-foreground leading-relaxed">
                                    For inquiries and site visits<br />
                                    <span className="font-semibold text-foreground mt-2 inline-block">Available for immediate occupancy</span>
                                  </p>
                                  <div className="mt-3">
                                    <button
                                      onClick={() => {
                                        if (typeof window !== 'undefined' && window.confirm('Call +91 98100 75922?')) {
                                          // @ts-ignore
                                          window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'call_contact' });
                                          window.location.href = 'tel:+919810075922';
                                        }
                                      }}
                                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-accent text-white text-sm"
                                    >
                                      Call +91 9810075922
                                    </button>
                                    <div className="mt-3">
                                      <a
                                        href="mailto:mpgspacelogistics.com"
                                        onClick={() => {
                                          // @ts-ignore
                                          window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'email_contact' });
                                        }}
                                        className="inline-flex items-center gap-2 px-3 py-2 rounded bg-accent text-white text-sm"
                                      >
                                        <Mail className="h-4 w-4" />
                                        mpgspacelogistics.com
                                      </a>
                                    </div>
                                  </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Property Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Type: Commercial Warehouse<br />
                      Owner: Individual<br />
                      Status: <span className="font-semibold text-primary">New Construction - Ready to Move</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">125K</div>
                    <div className="text-xs text-muted-foreground">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">27</div>
                    <div className="text-xs text-muted-foreground">Docks</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Grade A</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Security</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
