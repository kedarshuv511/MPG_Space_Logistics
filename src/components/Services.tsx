import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Shield, Clock, MapPin, Route, Warehouse, Ruler } from "lucide-react";

const services = [
	{
		icon: Package,
		title: "Large-Scale Storage",
		description:
			"125,000 sq ft of premium warehouse space with 565 sq meter mezzanine floor for maximum storage capacity.",
	},
	{
		icon: Truck,
		title: "Efficient Loading Operations",
		description:
			"27 loading docks with 5 dock levellers and 28-meter driveway for smooth logistics operations.",
	},
	{
		icon: Shield,
		title: "Complete Security",
		description:
			"24/7 security monitoring, fire fighting systems, fire alarms, and dedicated guard room for asset protection.",
	},
	{
		icon: Clock,
		title: "Premium Infrastructure",
		description:
			"Grade A facility with PEB construction, glass wool insulation, FM-2 flooring, and modern amenities.",
	},
];

const Services = () => {
	return (
		<section
			id="services"
			className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
			>
			{/* Background decoration */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
			</div>

				<div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-block mb-4">
							<span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
								Our Services
						</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
						About - MPG Space & Logistics
					</h2>
					</div>

					<div className="w-full max-w-[1600px] mx-auto">
						<div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7 md:p-10">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
								{/* Left: Description */}
								<div className="text-left">
									<h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
										Strategic location for{" "}
										<span className="text-primary">Delhi NCR</span> distribution
									</h3>
									<div className="mt-4 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
										<p>
											MPG Space & Logistics is a Grade A warehouse on the Jhajjar–Rewari
											belt, positioned to cover Delhi NCR consumption demand and the
											industrial markets of southern Haryana.
										</p>
										<p>
											Located along the NH 352 corridor (formerly NH 71), the site connects
											smoothly towards NH 48 (Delhi–Jaipur) and Gurugram-side routes. This
											supports faster inbound/outbound movement for 3PL, e-commerce, FMCG,
											and manufacturing supply chains.
										</p>
										<p>
											The surrounding Luhari logistics belt has attracted blue-chip
											occupiers such as DHL, Amazon, Flipkart, Myntra, Kuehne + Nagel,
											Nissan Motors, and Miniso Lifestyle, reinforcing the area as an
											established warehouse and distribution micro-market.
										</p>
										<p>
											Multi-modal accessibility is strong, with Gurugram roughly 40 km away,
											Indira Gandhi International Airport around 60 km, and New Delhi
											Railway Station about 72–75 km. The corridor also links towards the
											Kundli–Manesar–Palwal (KMP) Expressway at approximately 22 km.
										</p>
									</div>

									<div className="mt-6 flex flex-wrap gap-2">
										<span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
											NH 352 (ex NH 71)
										</span>
										<span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
											NH 48 connectivity
										</span>
										<span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
											High-throughput operations
										</span>
									</div>
								</div>

								{/* Right: Highlights + facts */}
								<div className="text-left">
									<div className="text-lg font-bold text-foreground">Key highlights</div>

									<div className="mt-4 grid grid-cols-2 gap-3">
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="text-xs font-semibold text-muted-foreground">Built-up</div>
											<div className="text-lg font-extrabold text-foreground">125,000 sq ft</div>
										</div>
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="text-xs font-semibold text-muted-foreground">Loading docks</div>
											<div className="text-lg font-extrabold text-foreground">27 docks</div>
										</div>
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="text-xs font-semibold text-muted-foreground">Center height</div>
											<div className="text-lg font-extrabold text-foreground">16 m</div>
										</div>
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="text-xs font-semibold text-muted-foreground">Flooring</div>
											<div className="text-lg font-extrabold text-foreground">FM-2</div>
										</div>
									</div>

									<ul className="mt-6 space-y-4 text-base md:text-lg">
										<li className="flex items-start gap-3">
											<span className="mt-1 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
												<MapPin className="h-5 w-5 text-primary" />
											</span>
											<div>
												<div className="font-bold text-foreground">Regional coverage</div>
												<div className="text-muted-foreground">
													Strong reach to Gurugram/Manesar, Rewari, Dharuhera, Bawal, and
													Delhi NCR lanes.
												</div>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="mt-1 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
												<Route className="h-5 w-5 text-primary" />
											</span>
											<div>
												<div className="font-bold text-foreground">Practical connectivity</div>
												<div className="text-muted-foreground">
													Located for smoother dispatch planning with linkage towards NH 48
													and major industrial corridors.
												</div>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="mt-1 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
												<Warehouse className="h-5 w-5 text-primary" />
											</span>
											<div>
												<div className="font-bold text-foreground">Throughput-ready design</div>
												<div className="text-muted-foreground">
													Layout and dock capacity built for high-volume inbound/outbound
													operations.
												</div>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="mt-1 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
												<Ruler className="h-5 w-5 text-primary" />
											</span>
											<div>
												<div className="font-bold text-foreground">Modern Grade A spec</div>
												<div className="text-muted-foreground">
													PEB construction, glass wool insulation, FM-2 flooring, and safety
													features aligned to warehouse operations.
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{services.map((service, index) => (
							<Card
							key={index}
							className="group relative overflow-hidden border-2 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
						>
							{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<CardContent className="p-8 relative z-10">
								<div className="relative mb-6">
									<div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
									<div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
										<service.icon className="h-8 w-8 text-white" />
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
									{service.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
