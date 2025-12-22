import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Layers,
  Warehouse,
  Wind,
  Flame,
  Shield,
  Users,
  Accessibility,
  Droplet,
  Sparkles,
  Bolt,
  Compass,
  CalendarCheck,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import { Train, Airplay, Map } from "lucide-react";
import { useMemo } from "react";

// I. Dimensions & Capacity
const dimensionsCapacity = [
  { label: "Built-Up Area", value: "125,000 Sq. Ft.", highlight: true },
  { label: "Land Area", value: "7 Acres (Approx. 304,920 Sq. Ft.)", highlight: true },
  { label: "Center/Eave Height", value: "16 meters", highlight: false },
  { label: "Clear Height", value: "13 meters", highlight: false },
  { label: "Loading Docks", value: "27 docks", highlight: false },
  { label: "Dock Height", value: "4 feet", highlight: false },
  { label: "Dock Apron Depth", value: "92 Feet", highlight: false },
  { label: "Internal Road Width", value: "40 Feet", highlight: false },
  { label: "Mezzanine Floor", value: "565 sq meters (Approx. 6,081 sq ft)", highlight: false },
  { label: "Parking Area", value: "1.5 Acres", highlight: true },
  { label: "Flooring Type", value: "FM-2", highlight: false },
  { label: "Warehouse Grade", value: "Grade A / Class 1", highlight: false },
];

// II. Building Infrastructure
const buildingInfrastructure = [
  { title: "PEB Frame Construction", description: "Pre-Engineered Building structure", icon: Building2 },
  { title: "Fresh Air Supply", description: "Louvers for proper ventilation", icon: Wind },
  { title: "Glass Wool Insulation", description: "Temperature maintenance system", icon: Layers },
  { title: "5 Dock Levellers", description: "Facilitates safe loading and unloading", icon: Warehouse },
];

// III. Key Utilities & Safety
const keyUtilitiesSafety = [
  { title: "Fire Safety System (NFPA Compliant)", description: "Automatic hydrants, hose reels, and extinguishers", icon: Flame },
  { title: "Electricity & Pump Room", description: "Dedicated utility infrastructure", icon: Bolt },
  { title: "STP & Water Storage", description: "On-site sewage treatment and reserve tanks", icon: Lightbulb },
  { title: "Rain Water Harvesting", description: "Sustainable stormwater capture and recharge", icon: Droplet },
  { title: "24/7 Security & Monitoring", description: "Guard room, surveillance, controlled access", icon: Shield },
];

// IV. Site & Operational Amenities
const siteOperationalAmenities = [
  { title: "Modern Washroom Facilities", description: "Total 3 Washrooms: Staff, Labour (separate), and Visitor facilities. First: 7 WCs + 5 Urinals + 1 Handicap WC. Second: 6 WCs + 4 Urinals + 1 Handicap WC. Third: 2 WCs + 2 Urinals + Bath Shower.", icon: Users },
  { title: "Barrier-Free Access", description: "Universal design with ramped entries", icon: Accessibility },
  { title: "On-Call Maintenance", description: "Dedicated facility support team", icon: Sparkles },
  { title: "New Construction", description: "Ready for immediate occupancy", icon: CalendarCheck },
  { title: "Commercial Zone", description: "Individually owned industrial parcel", icon: Briefcase },
  { title: "Vastu Compliant", description: "Traditional architectural alignment", icon: Compass },
];

const Specifications = () => {
  const primaryMetrics = useMemo(() => {
    return dimensionsCapacity.filter((d) =>
      ["Built-Up Area", "Land Area", "Parking Area"].includes(d.label)
    );
  }, []);

  const remainingMetrics = useMemo(() => {
    return dimensionsCapacity.filter((d) =>
      !["Built-Up Area", "Land Area", "Parking Area"].includes(d.label)
    );
  }, []);

  const IconTile = ({
    title,
    description,
    icon: Icon,
    premium = false,
    cardClasses = "",
  }: {
    title: string;
    description: string;
    icon: any;
    premium?: boolean;
    cardClasses?: string;
  }) => {
    return (
      <Card className={`group relative overflow-hidden border shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-[1.01] ${cardClasses}`}>
        {premium && (
          <div className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center gap-1">
            <span className="text-orange-700">⭐</span>
            <span>SUPERIOR</span>
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg border bg-background flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1 text-foreground">{title}</h4>
              {title === 'Modern Washroom Facilities' ? (
                <div className="text-sm text-muted-foreground">
                  <div className="mb-1">Total 3 Washrooms:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Staff, Labour (separate), Visitor</li>
                    <li>First: 7 WCs + 5 Urinals + 1 Handicap WC</li>
                    <li>Second: 6 WCs + 4 Urinals + 1 Handicap WC</li>
                    <li>Third: 2 WCs + 2 Urinals + Bath Shower</li>
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="specifications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Cutting-Edge Warehouse Specifications</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Clear, compliant, and operationally ready industrial infrastructure
          </p>
        </div>

        {/* Location Advantages removed here and will be placed after Site & Operational Amenities */}

        {/* Dimensions & Capacity */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Dimensions & Capacity</h3>
          </div>

          {/* Primary metrics row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {primaryMetrics.map((item, index) => (
              <Card key={index} className="relative overflow-hidden border shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-[1.01] bg-slate-50 border-slate-200">
                <CardContent className="p-6">
                  <Badge className="absolute top-4 right-4 bg-orange-100 text-orange-600 font-bold flex items-center gap-1">
                    <span role="img" aria-label="star">⭐</span> FEATURED
                  </Badge>
                  <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                  <div className="text-2xl font-bold text-foreground">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Remaining metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {remainingMetrics.map((item, index) => (
              <Card key={index} className="relative overflow-hidden border shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-[1.01] bg-slate-50 border-slate-200">
                <CardContent className="p-6">
                  {item.label === 'Flooring Type' && (
                    <Badge className="absolute top-4 right-4 bg-orange-100 text-orange-600 font-bold flex items-center gap-1">
                      <span role="img" aria-label="star">⭐</span> SUPERIOR
                    </Badge>
                  )}
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-base md:text-lg font-semibold text-foreground">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Building Infrastructure */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex items-center gap-3 mb-6 mt-20">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Building Infrastructure</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingInfrastructure.map((f, idx) => (
              <IconTile
                key={idx}
                title={f.title}
                description={f.description}
                icon={f.icon}
                premium={f.title === "Glass Wool Insulation"}
                cardClasses="bg-orange-50 border-orange-200"
              />
            ))}
          </div>
        </div>

        {/* Key Utilities & Safety */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 mt-20">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Key Utilities & Safety</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyUtilitiesSafety.map((f, idx) => (
              <IconTile
                key={idx}
                title={f.title}
                description={f.description}
                icon={f.icon}
                premium={f.title === "Fire Safety System (NFPA Compliant)" || f.title === "Rain Water Harvesting"}
                cardClasses="bg-blue-50 border-blue-200"
              />
            ))}
          </div>
        </div>

        {/* Site & Operational Amenities */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 mt-20">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Site & Operational Amenities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteOperationalAmenities.map((f, idx) => (
              <IconTile
                key={idx}
                title={f.title}
                description={f.description}
                icon={f.icon}
                premium={f.title === "Barrier-Free Access" || f.title === "New Construction"}
                cardClasses="bg-teal-50 border-teal-200"
              />
            ))}
          </div>
        </div>

        {/* Location Advantages (static curated) */}
        <div className="max-w-7xl mx-auto mt-16 px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6 mt-12">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Location Advantages</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 items-start">
            <div className="rounded-lg overflow-hidden border bg-white/50">
              <div className="h-[45vh] md:h-[70vh] w-full">
                <iframe
                  title="Warehouse location map"
                  src={`https://www.google.com/maps?q=28.455,76.656944&z=12&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-3 flex items-center justify-between bg-white/60 border-t">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=28.455,76.656944`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent underline"
                >
                  Open in Google Maps
                </a>
                <div className="text-sm text-muted-foreground">Approx. coordinates: 28.455, 76.656944</div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 h-[45vh] md:h-[70vh]">
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-bold text-lg mb-2">Why this location matters</h4>
                <p className="text-sm text-muted-foreground">
                  Strategically placed with regional connectivity and logistics infrastructure that supports fast distribution and lower transit times. Distances shown are approximate.
                </p>
              </div>

              <div className="overflow-y-auto pr-2 grid grid-cols-1 gap-3">
                {[
                  { icon: Train, label: "Delhi Railway Station", value: "~72 KM" },
                  { icon: Train, label: "Rohtak Junction", value: "~45 KM" },
                  { icon: Train, label: "Rewari Junction", value: "~35 KM" },
                  { icon: Airplay, label: "Delhi Airport (Indira Gandhi Intl)", value: "~60 KM" },
                  { icon: Airplay, label: "Hisar Airport (domestic)", value: "~120 KM" },
                  { icon: Map, label: "Gurugram / Industrial Hubs", value: "~40 KM" },
                  { icon: Map, label: "IMT Manesar", value: "~40 KM" },
                  { icon: Compass, label: "KMP Expressway (junction)", value: "~22 KM" },
                  { icon: Briefcase, label: "Bilaspur Chowk", value: "~18 KM" },
                  { icon: Briefcase, label: "Nearby Logistics / Industrial Parks (Kundli, Manesar clusters)", value: "Regional" },
                ].map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                        <span className="sr-only">{p.label}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{p.label}</div>
                        <div className="text-sm text-muted-foreground">{p.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
