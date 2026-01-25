import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type React from "react";
import mvv1 from "@/assets/mvv1.png";
import mvv2 from "@/assets/mvv2.png";
import mvv3 from "@/assets/mvv3.png";
import { fadeIn, scaleIn, staggerContainer } from "@/lib/animations";

const MVV: React.FC = () => {
	const values = [
		"Truthfulness",
		"Uprightness",
		"Confidentiality",
		"Universality",
		"Integrity",
	];

	return (
		<section className="py-32 bg-black overflow-hidden">
			<div className="container mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left Side - Text Content */}
					<motion.div
						variants={staggerContainer(0.1, 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex flex-col gap-12"
					>
						{/* Mission & Vision Row */}
						<div className="grid grid-cols-1 gap-8">
							{/* Mission */}
							<motion.div
								variants={fadeIn("right", 0)}
								whileHover={{ x: 10 }}
								className="bg-[#0A0A0A] p-10 border border-white/10 hover:border-[#DBFE01] transition-colors duration-300 group"
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="w-2 h-12 bg-[#DBFE01]" />
									<h3 className="text-3xl font-black text-white uppercase tracking-tight">
										Mission
									</h3>
								</div>
								<p className="text-[#B0B0B0] leading-relaxed text-lg">
									To help and build a self-empowered, creative, independent, and
									disciplined generation in Ethiopia.
								</p>
							</motion.div>
							{/* Vision */}
							<motion.div
								variants={fadeIn("right", 0.1)}
								whileHover={{ x: 10 }}
								className="bg-[#0A0A0A] p-10 border border-white/10 hover:border-[#DBFE01] transition-colors duration-300 group"
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="w-2 h-12 bg-[#DBFE01]" />
									<h3 className="text-3xl font-black text-white uppercase tracking-tight">
										Vision
									</h3>
								</div>
								<p className="text-[#B0B0B0] leading-relaxed text-lg">
									To see a self-empowered, creative, independent, and
									disciplined generation raising in Ethiopia.
								</p>
							</motion.div>
						</div>

						{/* Values Section */}
						<motion.div
							variants={fadeIn("right", 0.2)}
							className="mt-8"
						>
							<span className="text-[#DBFE01] font-bold tracking-[0.3em] text-xs uppercase block mb-8">
								OUR CORE VALUES
							</span>
							<motion.div
								variants={staggerContainer(0.08, 0)}
								className="flex flex-wrap gap-4"
							>
								{values.map((value, index) => (
									<motion.div
										key={value}
										variants={scaleIn(index * 0.05)}
										whileHover={{
											scale: 1.05,
											backgroundColor: "#DBFE01",
										}}
										className="group bg-transparent px-6 py-3 border border-white/20 flex items-center gap-3 cursor-default transition-colors duration-300"
									>
										<Sparkles className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
										<span className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-black transition-colors duration-300">
											{value}
										</span>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right Side - Image Grid Layout */}
					<motion.div
						variants={staggerContainer(0.15, 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="grid grid-cols-6 grid-rows-6 gap-4 h-[800px] w-full"
					>
						{/* First Image: two rows, first two columns */}
						<motion.div
							variants={fadeIn("up", 0)}
							className="row-span-3 col-span-3 relative group overflow-hidden border border-white/10"
						>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.5 }}
								src={mvv1}
								alt="MVV 1"
								className="w-full h-full object-cover transition-all duration-500"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
						</motion.div>

						{/* Second Image: next two rows, next two columns */}
						<motion.div
							variants={fadeIn("up", 0.1)}
							className="row-start-2 row-span-3 col-start-4 col-span-5 relative group overflow-hidden border border-white/10"
						>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.5 }}
								src={mvv2}
								alt="MVV 2"
								className="w-full h-full object-cover transition-all duration-500"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
						</motion.div>

						{/* Third Image: next two rows, first 3 columns */}
						<motion.div
							variants={fadeIn("up", 0.2)}
							className="row-start-5 row-span-6 col-start-1 col-span-5 relative group overflow-hidden border border-white/10"
						>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.5 }}
								src={mvv3}
								alt="MVV 3"
								className="w-full h-full object-cover transition-all duration-500"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default MVV;
