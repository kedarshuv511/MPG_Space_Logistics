import { Check, Award, TrendingUp, Shield, MapPin, Clock, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const benefits = [
	{
		icon: MapPin,
		title: "Prime Strategic Location",
		description:
			"NH 71, Rewari Jhajjhar Highway sitting direct connectivity to Reliance Met City, Rohtak-Hissar, Kundli, Palwal, Manesar, and NH 48.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: Award,
		title: "Grade A/Class 1 Warehouse",
		description:
			"Premium facility with PEB construction, FM-2 flooring, and 16-meter center height for maximum operational efficiency.",
		color: "from-purple-500 to-pink-500",
	},
	{
		icon: TrendingUp,
		title: "Massive Capacity",
		description:
			"125,000 sq ft built-up area on 304,920 sq ft plot with additional 565 sq meter mezzanine floor for extensive storage needs.",
		color: "from-green-500 to-emerald-500",
	},
	{
		icon: Zap,
		title: "Superior Infrastructure",
		description:
			"27 loading docks with 5 dock levellers, 28-meter driveway, and 4-feet dock height for seamless logistics operations.",
		color: "from-orange-500 to-red-500",
	},
	{
		icon: Shield,
		title: "Climate Controlled",
		description:
			"Glass wool insulation and fresh air louvers maintain optimal temperature for sensitive goods protection.",
		color: "from-indigo-500 to-blue-500",
	},
	{
		icon: Clock,
		title: "Complete Safety Systems",
		description:
			"Comprehensive fire fighting system, 24/7 security with guard room, and fire alarm for maximum protection.",
		color: "from-yellow-500 to-orange-500",
	},
	{
		icon: Users,
		title: "Premium Facilities",
		description:
			"3 modern washrooms with 15+ units, wheelchair accessibility, STP, rain water harvesting, and dedicated parking for 1.5 acres.",
		color: "from-teal-500 to-cyan-500",
	},
	{
		icon: Check,
		title: "Immediately Available",
		description:
			"New construction ready for occupancy. North-east facing property with Vastu compliance and on-call maintenance staff.",
		color: "from-pink-500 to-rose-500",
	},
];

const Benefits = () => {
	const [showModal, setShowModal] = useState(false);

	const handleScheduleVisitClick = () => {
		setShowModal(true);
		if (typeof window !== "undefined") {
			window.gtag &&
				window.gtag("event", "click", {
					event_category: "cta",
					event_label: "schedule_site_visit",
				});
		}
	};

	return (
		<section id="benefits" className="py-24 relative overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/40"></div>

			{/* Floating orbs */}
			<div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
			<div
				className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
				style={{ animationDelay: "1s" }}
			></div>

			<div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-block mb-4">
						<span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
							Why Choose Us
						</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
						Everything You Need to{" "}
						<span className="bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
							Succeed
						</span>
					</h2>
					<p className="text-xl text-white/90 max-w-3xl mx-auto">
						Industry-leading warehouse solutions backed by experience and
						innovation
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div className="p-6 relative z-10">
								<div className="flex items-start space-x-4">
									<div
										className={`relative flex-shrink-0 w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
									>
										<benefit.icon className="h-7 w-7 text-white" />
										<div className="absolute -inset-1 bg-gradient-to-br opacity-30 blur rounded-xl"></div>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
											{benefit.title}
										</h3>
										<p className="text-white/80 leading-relaxed">
											{benefit.description}
										</p>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* CTA Section */}
				<div className="mt-16 text-center">
					<div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6">
						<p className="text-white text-lg mb-4">
							Ready to elevate your logistics operations?
						</p>
						<button
							onClick={handleScheduleVisitClick}
							className="px-8 py-3 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
						>
							Schedule a Site Visit Today
						</button>
					</div>
				</div>

				{showModal && (
					<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
						<div className="bg-white rounded-lg p-6 w-96">
							<h2 className="text-lg font-bold mb-4">
								Schedule a Site Visit
							</h2>
							<p className="text-sm mb-4">
								Please contact us at +91 9810075922 to schedule your visit.
							</p>
							<button
								onClick={() => setShowModal(false)}
								className="px-4 py-2 bg-accent text-white rounded"
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Benefits;
