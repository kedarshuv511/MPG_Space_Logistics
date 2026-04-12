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
import { Ship } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

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
  { title: "Fire Safety System (NFPA Compliant)", description: "Ceiling sprinklers, Automatic hydrants, hose reels, and extinguishers", icon: Flame },
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
  const ORIGIN_COORDS = "28.455,76.656944";

  type LocationGroup = "all" | "rail" | "airport" | "seaport" | "nh" | "sh" | "road" | "parks";
  type LocationItem = {
    id: string;
    group: Exclude<LocationGroup, "all">;
    icon: any;
    label: string;
    value: string;
    destination: string; // Address/place query (Google will resolve it)
    children?: LocationItem[];
  };

  const locationGroups: { id: LocationGroup; label: string }[] = [
    { id: "all", label: "All" },
    { id: "airport", label: "Airport" },
    { id: "seaport", label: "Seaport" },
    { id: "rail", label: "Railway" },
    { id: "nh", label: "National Highways" },
    { id: "sh", label: "State Highways" },
    { id: "road", label: "Road / Hubs" },
    { id: "parks", label: "Industrial Parks" },
  ];

  const locationItems: LocationItem[] = [
    { id: "delhi-railway", group: "rail", icon: Train, label: "Delhi Railway Station", value: "~72 KM", destination: "New Delhi Railway Station" },
    { id: "rohtak-junction", group: "rail", icon: Train, label: "Rohtak Junction", value: "~45 KM", destination: "Rohtak Junction Railway Station" },
    { id: "rewari-junction", group: "rail", icon: Train, label: "Rewari Junction", value: "~35 KM", destination: "Rewari Junction Railway Station" },

    { id: "delhi-airport", group: "airport", icon: Airplay, label: "Delhi Airport (Indira Gandhi Intl)", value: "~60 KM", destination: "Indira Gandhi International Airport" },
    { id: "hisar-airport", group: "airport", icon: Airplay, label: "Hisar Airport (domestic)", value: "~120 KM", destination: "Hisar Airport" },

    { id: "kandla-port", group: "seaport", icon: Ship, label: "Kandla Port (Seaport)", value: "Long-haul", destination: "Deendayal Port Authority (Kandla Port)" },

    {
      id: "national-highways",
      group: "nh",
      icon: Compass,
      label: "National Highways (Nearby)",
      value: "Multiple",
      destination: "NH 71, Haryana",
      children: [
        { id: "nh-71", group: "nh", icon: Compass, label: "NH 71 (Nearest Point: Amadalpur / Rewari–Jhajjar Hwy)", value: "On-site", destination: "NH 71, Amadalpur, Rewari, Haryana" },
        { id: "nh-48", group: "nh", icon: Compass, label: "NH 48 (Nearest Access Point)", value: "Nearby", destination: "Bilaspur Chowk, NH 48, Gurugram, Haryana" },
        { id: "nh-352w", group: "nh", icon: Compass, label: "NH 352W (Jhajjar / Rohtak side)", value: "Nearby", destination: "NH 352W, Haryana" },
      ],
    },
    {
      id: "state-highways",
      group: "sh",
      icon: Map,
      label: "State Highways / Key State Roads",
      value: "Multiple",
      destination: "Rewari, Haryana",
      children: [
        // These are modeled as "state roads" so you can rename to the exact SH numbers/names you prefer.
        { id: "sh-rewari-jhajjar", group: "sh", icon: Map, label: "Rewari–Jhajjar Road", value: "Nearby", destination: "Rewari Jhajjar Road, Haryana" },
        { id: "sh-rewari-pataudi", group: "sh", icon: Map, label: "Rewari–Pataudi Road", value: "Nearby", destination: "Rewari Pataudi Road, Haryana" },
        { id: "sh-jhajjar-rohtak", group: "sh", icon: Map, label: "Jhajjar–Rohtak Road", value: "Nearby", destination: "Jhajjar Rohtak Road, Haryana" },
      ],
    },

    { id: "gurugram-hubs", group: "road", icon: Map, label: "Gurugram / Industrial Hubs", value: "~40 KM", destination: "Gurugram, Haryana" },
    { id: "imt-manesar", group: "road", icon: Map, label: "IMT Manesar", value: "~40 KM", destination: "IMT Manesar, Gurugram, Haryana" },
    { id: "kmp-junction", group: "road", icon: Compass, label: "KMP Expressway (junction)", value: "~22 KM", destination: "KMP Expressway" },
    { id: "bilaspur-chowk", group: "road", icon: Briefcase, label: "Bilaspur Chowk", value: "~18 KM", destination: "Bilaspur Chowk, Gurugram, Haryana" },

    {
      id: "nearby-parks",
      group: "parks",
      icon: Briefcase,
      label: "Nearby Logistics / Industrial Parks (Kundli, Manesar clusters)",
      value: "Regional",
      destination: "Kundli Industrial Area, Sonipat, Haryana",
      children: [
        // Update/replace these destinations with your preferred parks (names/addresses).
        { id: "kundli-industrial-area", group: "parks", icon: Briefcase, label: "Kundli Industrial Area (Sonipat)", value: "Regional", destination: "Kundli Industrial Area, Sonipat, Haryana" },
        { id: "manesar-industrial-cluster", group: "parks", icon: Briefcase, label: "Manesar Industrial Cluster", value: "Regional", destination: "Manesar, Gurugram, Haryana" },
        { id: "bhiwadi-industrial-area", group: "parks", icon: Briefcase, label: "Bhiwadi Industrial Area", value: "Regional", destination: "Bhiwadi, Rajasthan" },
        { id: "dharuhera-industrial-area", group: "parks", icon: Briefcase, label: "Dharuhera Industrial Area", value: "Regional", destination: "Dharuhera, Haryana" },
      ],
    },
  ];

  const [activeLocationGroup, setActiveLocationGroup] = useState<LocationGroup>("all");
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [openParentId, setOpenParentId] = useState<string | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const queueSelectLocation = (id: string, opts?: { openSubmenu?: boolean }) => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => {
      setSelectedLocationId(id);
      if (opts?.openSubmenu) setOpenParentId(id);
    }, 80);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const flattenedLocationItems = useMemo(() => {
    const flat: LocationItem[] = [];
    for (const item of locationItems) {
      flat.push(item);
      if (item.children?.length) flat.push(...item.children);
    }
    return flat;
  }, []);

  const selectedLocation = useMemo(() => {
    if (!selectedLocationId) return null;
    return flattenedLocationItems.find((i) => i.id === selectedLocationId) ?? null;
  }, [flattenedLocationItems, selectedLocationId]);

  const filteredLocationItems = useMemo(() => {
    const group = activeLocationGroup;
    return locationItems.filter((item) => group === "all" || item.group === group);
  }, [activeLocationGroup]);

  const googleMapsApiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const mapEmbedSrc = useMemo(() => {
    if (!selectedLocation) {
      return `https://www.google.com/maps?q=${encodeURIComponent(ORIGIN_COORDS)}&z=12&output=embed`;
    }
    const saddr = encodeURIComponent(ORIGIN_COORDS);
    const daddr = encodeURIComponent(selectedLocation.destination);
    // This embed form renders Google’s standard directions view (blue route) without requiring a JS API integration.
    return `https://www.google.com/maps?output=embed&z=11&saddr=${saddr}&daddr=${daddr}&dirflg=d`;
  }, [ORIGIN_COORDS, selectedLocation]);

  const openInGoogleMapsHref = useMemo(() => {
    if (!selectedLocation) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ORIGIN_COORDS)}`;
    }
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(ORIGIN_COORDS)}&destination=${encodeURIComponent(
      selectedLocation.destination
    )}&travelmode=driving`;
  }, [ORIGIN_COORDS, selectedLocation]);

  const DirectionsMap = ({
    apiKey,
    origin,
    destination,
  }: {
    apiKey: string;
    origin: { lat: number; lng: number };
    destination: string | null;
  }) => {
    const mapElRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);
    const rendererRef = useRef<any>(null);
    const serviceRef = useRef<any>(null);
    const [ready, setReady] = useState(false);

    const loadScript = (key: string) => {
      return new Promise<void>((resolve, reject) => {
        const w = window as any;
        if (w.google?.maps) return resolve();

        const existing = document.getElementById("google-maps-js");
        if (existing) {
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", () => reject(new Error("Google Maps script failed to load")));
          return;
        }

        const script = document.createElement("script");
        script.id = "google-maps-js";
        script.async = true;
        script.defer = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Google Maps script failed to load"));
        document.head.appendChild(script);
      });
    };

    useEffect(() => {
      let cancelled = false;
      loadScript(apiKey)
        .then(() => {
          if (cancelled) return;
          const w = window as any;
          if (!mapElRef.current) return;

          mapRef.current = new w.google.maps.Map(mapElRef.current, {
            center: origin,
            zoom: 11,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
          });
          rendererRef.current = new w.google.maps.DirectionsRenderer({
            map: mapRef.current,
            suppressMarkers: false,
            preserveViewport: false,
          });
          serviceRef.current = new w.google.maps.DirectionsService();
          setReady(true);
        })
        .catch(() => {
          // If the JS API cannot load (missing key / blocked), we'll silently fall back to iframe embed below.
          setReady(false);
        });

      return () => {
        cancelled = true;
        try {
          if (rendererRef.current) rendererRef.current.setMap(null);
        } catch {
          // ignore
        }
      };
    }, [apiKey, origin.lat, origin.lng]);

    useEffect(() => {
      if (!ready) return;
      if (!destination) return;
      const w = window as any;
      const service = serviceRef.current;
      const renderer = rendererRef.current;
      if (!service || !renderer) return;

      service.route(
        {
          origin,
          destination,
          travelMode: w.google.maps.TravelMode.DRIVING,
        },
        (result: any, status: any) => {
          if (status === w.google.maps.DirectionsStatus.OK && result) {
            renderer.setDirections(result);
            const bounds = result?.routes?.[0]?.bounds;
            if (bounds && mapRef.current?.fitBounds) {
              mapRef.current.fitBounds(bounds);
            }
          }
        }
      );
    }, [ready, destination, origin]);

    return <div ref={mapElRef} className="w-full h-full" />;
  };

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
      <div className="w-full px-4 sm:px-6 lg:px-8">
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

        {/* Location Advantages (wider than the rest, without horizontal overflow) */}
        <div className="max-w-[1600px] mx-auto mt-16">
          <div className="mb-6 mt-12">
            <h3 className="text-primary text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
              Location Advantages
            </h3>
            <div className="mt-3 h-1 w-24 bg-primary" />
          </div>

          {/* Category row (centered, one line, no scrolling) */}
          <div className="flex justify-center mb-4">
            <div className="flex flex-nowrap items-center justify-center gap-2">
	              {locationGroups.map((g) => (
	                <button
	                  key={g.id}
	                  type="button"
	                  onClick={() => setActiveLocationGroup(g.id)}
	                  className={`px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold border transition-colors whitespace-nowrap ${
	                    activeLocationGroup === g.id
	                      ? "bg-primary text-white border-primary"
	                      : "bg-white text-foreground border-slate-200 hover:border-primary/30 hover:bg-primary/5"
	                  }`}
	                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-6 items-start">
            {/* Map (left) */}
            <div className="rounded-lg overflow-hidden border bg-white/50">
              <div className="h-[45vh] md:h-[70vh] w-full">
                {googleMapsApiKey ? (
                  <DirectionsMap
                    apiKey={googleMapsApiKey}
                    origin={{ lat: 28.455, lng: 76.656944 }}
                    destination={selectedLocation?.destination ?? null}
                  />
                ) : (
                  <iframe
                    title="Warehouse location map"
                    src={mapEmbedSrc}
                    className="w-full h-full"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-3 flex items-center justify-between bg-white/60 border-t">
                <a
                  href={openInGoogleMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent underline"
                >
                  Open in Google Maps
                </a>
                <div className="text-sm text-muted-foreground">Approx. coordinates: 28.455, 76.656944</div>
              </div>
            </div>

            {/* Options + submenus (right) */}
            <div className="flex flex-col space-y-4 md:h-[70vh]">
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-bold text-lg mb-2">Why this location matters</h4>
                <p className="text-sm text-muted-foreground">
                  Strategically placed with regional connectivity and logistics infrastructure that supports fast distribution and lower transit times. Distances shown are approximate.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:overflow-y-auto md:pr-2">
                {filteredLocationItems.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedLocationId === item.id;
                  const isParksParent = item.id === "nearby-parks";
                  const isNationalHighwaysParent = item.id === "national-highways";
                  const isStateHighwaysParent = item.id === "state-highways";
                  const hasChildren = !!item.children?.length;
                  const shouldOpenOnHover = isParksParent || isNationalHighwaysParent || isStateHighwaysParent;
                  const isOpen = openParentId === item.id;

                  return (
                    <div key={item.id} className="space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLocationId(item.id);
                          if (shouldOpenOnHover && hasChildren) {
                            setOpenParentId((prev) => (prev === item.id ? null : item.id));
                          }
                        }}
                        onMouseEnter={() => queueSelectLocation(item.id, { openSubmenu: shouldOpenOnHover && hasChildren })}
                        onFocus={() => queueSelectLocation(item.id, { openSubmenu: shouldOpenOnHover && hasChildren })}
                        className={`w-full text-left flex items-center gap-4 p-4 rounded-lg border shadow-sm transition-all ${
                          isSelected
                            ? "bg-primary/5 border-primary/30 ring-2 ring-primary/20"
                            : "bg-white border-slate-200 hover:shadow-md hover:border-primary/20"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                          <span className="sr-only">{item.label}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                        {shouldOpenOnHover && hasChildren && (
                          <div className="text-xs font-semibold text-muted-foreground">
                            {isOpen ? "Hide" : "Show"}
                          </div>
                        )}
                      </button>

                      {shouldOpenOnHover && isOpen && item.children?.length ? (
                        <div className="pl-6 grid grid-cols-1 gap-2">
                          {item.children.map((child) => {
                            const ChildIcon = child.icon;
                            const childSelected = selectedLocationId === child.id;
                            return (
                              <button
                                key={child.id}
                                type="button"
                                onClick={() => setSelectedLocationId(child.id)}
                                onMouseEnter={() => queueSelectLocation(child.id)}
                                onFocus={() => queueSelectLocation(child.id)}
                                className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                  childSelected
                                    ? "bg-primary/5 border-primary/30 ring-2 ring-primary/20"
                                    : "bg-white border-slate-200 hover:border-primary/20 hover:bg-primary/5"
                                }`}
                                aria-pressed={childSelected}
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center">
                                  <ChildIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm truncate">{child.label}</div>
                                  <div className="text-xs text-muted-foreground">{child.value}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
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
