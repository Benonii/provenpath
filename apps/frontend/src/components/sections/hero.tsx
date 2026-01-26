import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { FC } from "react";
import bgVideo from "@/assets/bg-1.mp4";

const Hero: FC = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Video Background - FULL SCREEN, NO ROUNDED CORNERS */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0 brightness-100"
			>
				<source src={bgVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/40 z-10" />

			{/* Content - MASSIVE CENTERED TEXT */}
			<div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
				{/* PROVEN PATH - Thematic Animation: Validation + Forward Journey */}
				<div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
					{/* PROVEN - Checkmark Validation Motion (bounce down like a stamp) */}
					<div className="flex">
						{Array.from("PROVEN").map((char, i) => (
							<motion.span
								key={char}
								animate={{
									y: [0, 15, -5, 0],
									scale: [1, 0.95, 1.03, 1],
									opacity: [0.7, 1, 1, 0.7],
								}}
								transition={{
									duration: 1.2,
									delay: i * 0.15,
									repeat: Infinity,
									repeatDelay: 3,
									ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
								}}
								className="text-[clamp(5rem,14vw,11rem)] font-black tracking-tighter leading-none inline-block text-white"
							>
								{char}
							</motion.span>
						))}
					</div>

					{/* PATH - Strong Forward Motion with Multiple Trails */}
					<div className="flex relative">
						{Array.from("PATH").map((char, i) => (
							<div key={char} className="relative">
								{/* Main letter */}
								<motion.span
									animate={{
										x: [0, 8, 0],
										color: ["#00D2FF", "#FFFFFF", "#00D2FF"],
									}}
									transition={{
										duration: 2,
										delay: i * 0.15,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="text-[clamp(4rem,14vw,11rem)] font-black tracking-tighter leading-none inline-block relative z-10"
								>
									{char}
								</motion.span>

								{/* Trail 1 - Close */}
								<motion.span
									animate={{
										x: [0, 30, 60],
										opacity: [0.5, 0.25, 0],
										scale: [1, 0.96, 0.92],
									}}
									transition={{
										duration: 1.2,
										delay: i * 0.15,
										repeat: Infinity,
										ease: "easeOut",
									}}
									className="text-[clamp(4rem,14vw,11rem)] font-black tracking-tighter leading-none inline-block absolute top-0 left-0 text-accent pointer-events-none"
									style={{ filter: "blur(1px)" }}
								>
									{char}
								</motion.span>

								{/* Trail 2 - Far */}
								<motion.span
									animate={{
										x: [0, 50, 100],
										opacity: [0.3, 0.15, 0],
										scale: [1, 0.93, 0.86],
									}}
									transition={{
										duration: 1.5,
										delay: i * 0.15 + 0.1,
										repeat: Infinity,
										ease: "easeOut",
									}}
									className="text-[clamp(4rem,14vw,11rem)] font-black tracking-tighter leading-none inline-block absolute top-0 left-0 text-white pointer-events-none"
									style={{ filter: "blur(3px)" }}
								>
									{char}
								</motion.span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
			>
				<span className="text-white/80 text-xs font-bold tracking-widest uppercase drop-shadow-md">
					Scroll
				</span>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
				>
					<ArrowUpRight className="w-6 h-6 text-accent rotate-135" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
