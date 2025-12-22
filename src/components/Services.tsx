import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Shield, Clock } from "lucide-react";

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

			<div className="container mx-auto px-4 relative z-10">
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

				<div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-white via-blue-50 to-accent/10 rounded-3xl shadow-lg">
					{/* Left: Main Intro */}
					<div className="flex-1 flex flex-col justify-center text-left">
						<p className="mb-6 text-xl md:text-2xl text-foreground font-semibold">
							Located near{" "}
							<span className="text-primary font-bold">IMT Manesar in Gurgaon</span>
							, MPG Space and Logistics Private Ltd is perfectly positioned to serve
							Delhi, Gurugram, and North India’s major consumption hubs.
						</p>
						<p className="mb-6 text-lg md:text-xl text-muted-foreground">
							The warehouse is close to Bilaspur Chowk and enjoys immediate access to
							key highways —{" "}
							<span className="font-bold text-primary">
								NH-48 (Delhi-Jaipur/Mumbai Highway)
							</span>{" "}
							and{" "}
							<span className="font-bold text-primary">
								NH-352 (to Rewari/Bawal)
							</span>
							.
						</p>
						<p className="text-xl font-bold text-primary">
							MPG Space and Logistics offers a prime destination for warehousing and
							distribution in North India.
						</p>
					</div>
					{/* Right: Key Highlights */}
					<div className="flex-1 bg-white/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 shadow-2xl flex flex-col justify-center min-w-[320px]">
						<span className="block font-bold text-primary text-2xl mb-6 text-center tracking-wide">
							Key Highlights
						</span>
						<ul className="space-y-6 text-lg">
							<li className="flex items-start gap-3">
								<span className="text-primary mt-1">🏭</span>
								<span>
									<span className="font-bold text-foreground">
										Strategic Location:
									</span>{" "}
									Near important industrial areas like IMT Manesar and just a short
									drive from Gurugram and Delhi.
								</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-primary mt-1">🛣️</span>
								<span>
									<span className="font-bold text-foreground">
										Excellent Connectivity:
									</span>{" "}
									Direct access to NH-48 and NH-352, and within 35 km of Indira
									Gandhi International Airport.
								</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-primary mt-1">🏢</span>
								<span>
									<span className="font-bold text-foreground">
										Established Hub:
									</span>{" "}
									Surrounded by leading companies—Maruti Suzuki, Honda, Amazon,
									Flipkart, and major logistics providers.
								</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="text-primary mt-1">🏗️</span>
								<span>
									<span className="font-bold text-foreground">
										Modern Infrastructure:
									</span>{" "}
									Part of a well-developed warehousing belt with reliable facilities.
								</span>
							</li>
						</ul>
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
