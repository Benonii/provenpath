import { motion, useScroll, useTransform } from "framer-motion";
import { type FC, useRef } from "react";
import ashenafi from "@/assets/ashenafi.png";
import ibsa from "@/assets/ibsa.png";
import { fadeIn, staggerContainer } from "@/lib/animations";

const OurTeam: FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
	const opacityBg = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8, 1],
		[0, 1, 1, 0],
	);

	const team = [
		{
			name: "Ibsa Merga Olika",
			role: "Co-founder and CEO of Proven Path",
			description:
				"A development-oriented sociologist who believes social change is a constant and inevitable phenomenon that needs pioneers to modulate it to the beacon of moral standards, development indicators, social cohesion, and individual well-being.",
			image: ibsa,
			reverse: false,
		},
		{
			name: "Ashenafi Eruwa Sulito",
			role: "Co-founder and Deputy CEO of Proven Path",
			description:
				"A development-oriented sociologist who believes social change is a constant and inevitable phenomenon that needs pioneers to modulate it to the beacon of moral standards, development indicators, social cohesion, and individual well-being.",
			image: ashenafi,
			reverse: true,
		},
	];

	return (
		<section
			ref={containerRef}
			className="py-32 bg-white relative overflow-hidden"
		>
			{/* Subtle grid pattern background */}
			<motion.div
				style={{ opacity: opacityBg, y: yBg }}
				className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-[0.01] pointer-events-none"
			>
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 210, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 210, 255, 0.3) 1px, transparent 1px)`,
						backgroundSize: "80px 80px",
						maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
						WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
					}}
				/>
			</motion.div>

			<div className="container mx-auto px-4 md:px-8 relative z-10">
				<div className="text-center mb-20">
					<span className="text-accent font-bold tracking-[0.3em] text-xs uppercase block mb-4">
						LEADERSHIP
					</span>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						transition={{ duration: 0.8 }}
						className="text-[clamp(3rem,5vw,5rem)] font-black text-black uppercase tracking-tighter"
					>
						Our Team
					</motion.h2>
				</div>

				<div className="flex flex-col gap-24 md:gap-32">
					{team.map((member) => (
						<motion.div
							key={member.name}
							variants={staggerContainer(0.2, 0.3)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							className={`flex flex-col ${member.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-24`}
						>
							{/* Image Column */}
							<motion.div
								variants={fadeIn(member.reverse ? "right" : "left", 0)}
								className={`w-full md:w-1/2 flex ${member.reverse ? "md:justify-end" : "md:justify-start"} justify-center`}
							>
								<motion.div
									whileHover={{ scale: 1.02, y: -5 }}
									transition={{ duration: 0.3 }}
									className="w-full max-w-[340px] md:max-w-[500px] aspect-500/560 rounded-none overflow-hidden border border-black/10 group relative"
								>
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover transition-all duration-500"
									/>
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent opacity-60" />
									
									{/* Yellow overlay line on hover */}
									<div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
								</motion.div>
							</motion.div>

							{/* Text Column */}
							<motion.div
								variants={fadeIn(member.reverse ? "left" : "right", 0.2)}
								className="w-full md:w-1/2"
							>
								<div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
									<h3 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-black mb-6 uppercase tracking-tight leading-none">
										{member.name}
									</h3>
									<p className="text-accent mb-8 font-bold tracking-widest uppercase text-sm md:text-base">
										{member.role}
									</p>
									<p className="text-[#444444] text-[clamp(1.1rem,1.5vw,1.4rem)] leading-relaxed font-light">
										{member.description}
									</p>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
