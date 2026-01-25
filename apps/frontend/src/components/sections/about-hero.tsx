import type React from "react";
import aboutHeroVideo from "@/assets/about-hero.mp4";

const AboutHero: React.FC = () => {
	return (
		<div className="relative h-[140vw] md:h-screen w-full overflow-hidden">
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
				<span className="text-[#DBFE01] font-bold tracking-[0.3em] text-sm uppercase mb-4">
					PROVEN PATH
				</span>
				<h1 className="text-[clamp(4rem,10vw,8rem)] font-black text-white tracking-tighter uppercase leading-none">
					About Us
				</h1>
			</div>
		</div>
	);
};

export default AboutHero;
