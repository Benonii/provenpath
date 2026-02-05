import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type React from "react";
import aboutHeroVideo from "@/assets/about-hero.mp4";

const AboutHero: React.FC = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src={aboutHeroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/60 z-10" />

			{/* Content */}
			<div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
				<span className="text-accent font-bold tracking-[0.3em] text-sm uppercase mb-4">
					PROVEN PATH
				</span>
				<h1 className="text-[clamp(4rem,10vw,8rem)] font-black text-white tracking-tighter uppercase leading-none">
					About Us
				</h1>
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

export default AboutHero;
