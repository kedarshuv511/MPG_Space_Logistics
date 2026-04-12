import sitePlanImg from "@/assets/Site_plan.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Expand, Download } from "lucide-react";

const SitePlan = () => {
  return (
    <section id="site-plan" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-primary text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
              Site Plan
            </h2>
            <div className="mt-3 h-1 w-24 bg-primary" />
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">
              A complete view of the warehouse layout, docks, circulation, and site features.
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Expand className="h-4 w-4" />
                  View Full Size
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle className="text-lg font-bold">Site Plan</DialogTitle>
                </DialogHeader>
                <div className="px-6 pb-6">
                  <div className="max-h-[80vh] overflow-auto rounded-lg border bg-white">
                    <img
                      src={sitePlanImg}
                      alt="MPG Space & Logistics site plan"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    Tip: Use pinch-to-zoom on mobile or browser zoom on desktop.
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button asChild variant="ghost" className="gap-2">
              <a href={sitePlanImg} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Open Image
              </a>
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="w-full rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                aria-label="Open site plan full size"
              >
                <div className="h-[62vh] md:h-[74vh] w-full bg-slate-50">
                  <img
                    src={sitePlanImg}
                    alt="MPG Space & Logistics site plan"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden">
              <DialogHeader className="px-6 pt-6">
                <DialogTitle className="text-lg font-bold">Site Plan</DialogTitle>
              </DialogHeader>
              <div className="px-6 pb-6">
                <div className="max-h-[80vh] overflow-auto rounded-lg border bg-white">
                  <img
                    src={sitePlanImg}
                    alt="MPG Space & Logistics site plan"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default SitePlan;

