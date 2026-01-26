import type React from "react";
import libraryHeroVideo from "@/assets/library-hero.mp4";

const LibraryHero: React.FC = () => {
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
				<source src={libraryHeroVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/60 z-10" />

			{/* Content */}
			<div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
				<span className="text-[#DBFE01] font-bold tracking-[0.3em] text-sm uppercase mb-4">
					KNOWLEDGE HUB
				</span>
				<h1 className="text-[clamp(4rem,12vw,10rem)] font-black text-white tracking-tighter uppercase leading-none">
					Library
				</h1>
			</div>
		</div>
	);
};

export default LibraryHero;
