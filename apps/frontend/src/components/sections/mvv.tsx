import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type React from "react";
import mvv1 from "@/assets/mvv1.png";
import mvv2 from "@/assets/mvv2.png";
import mvv3 from "@/assets/mvv3.png";
import { fadeIn } from "@/lib/animations";

const MVV: React.FC = () => {
	const values = [
		"Truthfulness",
		"Uprightness",
		"Confidentiality",
		"Universality",
		"Integrity",
	];

	return (
		<section className="py-24 md:py-32 bg-black overflow-hidden relative">
			{/* Background Decorative Text - Subtle */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.01] select-none">
				<span className="absolute top-10 left-10 text-[20rem] font-black text-white leading-none">
					PURPOSE
				</span>
			</div>

			<div className="container mx-auto px-4 md:px-8 relative z-10">
				{/* Section Header */}
				<motion.div
					variants={fadeIn("down", 0)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false }}
					className="mb-12 md:mb-16"
				>
					<div className="w-12 h-1 bg-accent mb-6" />
					<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
						Our <span className="text-accent">Foundation</span>
					</h2>
				</motion.div>

				{/* Bento Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
					
					{/* Mission Card - Top Left (Wide) */}
					<motion.div
						variants={fadeIn("right", 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false }}
						className="md:col-span-8 md:row-span-2 bg-[#0A0A0A] border border-white/10 p-8 md:p-12 relative group overflow-hidden flex flex-col justify-between"
					>
						{/* Glow Effect */}
						<div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-colors duration-500" />
						
						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-1 h-8 bg-accent" />
								<span className="text-accent font-black tracking-[0.3em] text-xs uppercase">01 / MISSION</span>
							</div>
							<h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
								Empowering the <br /> <span className="text-accent">Next Generation</span>
							</h3>
							<p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-xl">
								To help and build a self-empowered, creative, independent, and disciplined generation in Ethiopia through innovative education and mentorship.
							</p>
						</div>

						<div className="mt-12 relative z-10">
							<div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/link cursor-pointer">
								Learn More 
								<Sparkles className="w-4 h-4 text-accent group-hover/link:rotate-12 transition-transform" />
							</div>
						</div>

						{/* Decorative Image Integration */}
						<div className="absolute bottom-0 right-0 w-full h-full opacity-100 transition-opacity duration-700 pointer-events-none">
							<img src={mvv1} alt="" className="w-full h-full object-cover object-right" />
							<div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
						</div>
					</motion.div>

					{/* Vision Card - Top Right (Tall) */}
					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false }}
						className="md:col-span-4 md:row-span-3 bg-[#0A0A0A] border border-white/10 p-8 relative group overflow-hidden flex flex-col"
					>
						<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/15 transition-colors duration-500" />
						
						<div className="relative z-10 mb-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-1 h-8 bg-accent" />
								<span className="text-accent font-black tracking-[0.3em] text-xs uppercase">02 / VISION</span>
							</div>
							<h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
								A Future <br /> Reimagined
							</h3>
							<p className="text-gray-400 text-lg leading-relaxed font-light">
								To see a self-empowered, creative, independent, and disciplined generation raising in Ethiopia, leading the way in global innovation.
							</p>
						</div>

						<div className="flex-1 relative overflow-hidden mt-4 border border-white/5">
							<img src={mvv2} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
							<div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />
						</div>
					</motion.div>

					{/* Values Card - Middle Left (Tall) */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false }}
						className="md:col-span-4 md:row-span-3 bg-[#0A0A0A] border border-white/10 p-8 relative group overflow-hidden flex flex-col"
					>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
						
						<div className="relative z-10 mb-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-1 h-8 bg-accent" />
								<span className="text-accent font-black tracking-[0.3em] text-xs uppercase">03 / VALUES</span>
							</div>
							<h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
								Our Core <br /> Principles
							</h3>
						</div>

						<div className="space-y-4 relative z-10">
							{values.map((value) => (
								<div key={value} className="flex items-center gap-4 group/item">
									<div className="w-2 h-2 bg-accent rotate-45 group-hover/item:scale-150 transition-transform" />
									<span className="text-gray-400 group-hover/item:text-white transition-colors font-bold uppercase tracking-widest text-xs">
										{value}
									</span>
								</div>
							))}
						</div>

						<div className="mt-auto pt-12">
							<div className="grid grid-cols-3 gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
								{[1, 2, 3].map((i) => (
									<div key={i} className="aspect-square border border-white/20 flex items-center justify-center">
										<Sparkles className="w-4 h-4 text-white" />
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Small Accent Card - Middle Center */}
					<motion.div
						variants={fadeIn("up", 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false }}
						className="md:col-span-4 md:row-span-1 bg-accent p-8 flex items-center justify-center relative overflow-hidden group"
					>
						<div className="relative z-10 text-black text-center">
							<span className="font-black text-2xl uppercase tracking-tighter leading-none">
								Everything <br /> in one place
							</span>
						</div>
						<div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-150 transition-transform duration-700">
							<Sparkles className="w-24 h-24 text-black" />
						</div>
					</motion.div>

					{/* Community Card - Bottom Right (Wide) */}
					<motion.div
						variants={fadeIn("up", 0.5)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false }}
						className="md:col-span-8 md:row-span-2 bg-[#0A0A0A] border border-white/10 p-8 md:p-12 relative group overflow-hidden flex flex-col md:flex-row gap-8"
					>
						<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
						
						<div className="flex-1 relative z-10 flex flex-col justify-between">
							<div>
								<h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
									Community <br /> <span className="text-accent">Driven</span>
								</h3>
								<p className="text-gray-400 leading-relaxed font-light">
									We believe in the power of collective growth. Our community is the heartbeat of everything we do.
								</p>
							</div>
							<div className="mt-8 flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/link cursor-pointer">
								Join Us <Sparkles className="w-4 h-4 text-accent" />
							</div>
						</div>

						<div className="flex-1 relative h-48 md:h-auto overflow-hidden border border-white/5">
							<img src={mvv3} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default MVV;
