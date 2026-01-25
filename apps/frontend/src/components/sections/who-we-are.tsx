import type React from "react";
import { useEffect, useRef, useState } from "react";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";
import carousel6 from "@/assets/carousel-6.png";
import carousel7 from "@/assets/carousel-7.png";
import carousel8 from "@/assets/carousel-8.png";
import carousel9 from "@/assets/carousel-9.png";
import carousel10 from "@/assets/carousel-10.png";

const WhoWeAre: React.FC = () => {
	const [scrollY, setScrollY] = useState(0);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					setScrollY(window.scrollY);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const images = [
		{ src: carousel1, id: "carousel1" },
		{ src: carousel2, id: "carousel2" },
		{ src: carousel3, id: "carousel3" },
		{ src: carousel4, id: "carousel4" },
		{ src: carousel5, id: "carousel5" },
		{ src: carousel6, id: "carousel6" },
		{ src: carousel7, id: "carousel7" },
		{ src: carousel8, id: "carousel8" },
		{ src: carousel9, id: "carousel9" },
		{ src: carousel10, id: "carousel10" },
	];

	const infiniteImages = [0, 1, 2, 3, 4].flatMap((setIndex) =>
		images.map((img) => ({
			...img,
			uniqueId: `${setIndex}-${img.id}`,
		})),
	);

	const [setWidth, setSetWidth] = useState(0);
	const setRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (setRef.current) {
			setSetWidth(setRef.current.offsetWidth);
		}

		const handleResize = () => {
			if (setRef.current) {
				setSetWidth(setRef.current.offsetWidth);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Calculate offsets based on scroll
	const loopWidth = setWidth || 3000;
	const offset1 = (scrollY * 0.1) % loopWidth;
	const offset2 = -(scrollY * 0.1) % loopWidth;
	const offset3 = (scrollY * 0.15) % loopWidth;

	return (
		<section
			ref={sectionRef}
			className="py-40 bg-black overflow-hidden"
		>
			<div className="container mx-auto px-4 md:px-8 mb-32">
				<div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
					{/* Left Side - Heading */}
					<div className="w-full md:w-1/3 sticky top-32">
						<span className="text-[#DBFE01] font-bold tracking-[0.3em] text-xs uppercase block mb-4">
							WHO WE ARE
						</span>
						<h2 className="text-[clamp(3rem,5vw,5rem)] font-black text-white leading-[0.9] tracking-tighter uppercase">
							Our <br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-[#DBFE01] to-white">
								Story
							</span>
						</h2>
					</div>

					{/* Right Side - Text */}
					<div className="w-full md:w-2/3">
						<p className="text-[#B0B0B0] text-xl md:text-2xl leading-relaxed font-light">
							Proven Path is a service-based private organization that aims to
							bring a positive impact on the generation through a learning
							platform designed and delivered by distinguished professionals on
							various societal topics.
						</p>
						<p className="text-[#666666] text-lg mt-8 leading-relaxed">
							Proven-path was founded by two visionaries who envisioned that
							equipping the young generation will save them from wallowing in
							the mire of moral destruction, creating a vibrant, disciplined and
							productive power of the social group, and benefits the country in
							a multifaceted way.
						</p>
					</div>
				</div>
			</div>

			{/* Horizontal Carousels */}
			<div className="flex flex-col gap-4 relative">
				{/* Left Fade */}
				<div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
				{/* Right Fade */}
				<div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

				{/* Row 1 - Moves Right on Scroll */}
				<div className="relative flex overflow-hidden">
					<div
						className="flex gap-4 whitespace-nowrap transition-transform duration-100 ease-out"
						style={{ transform: `translateX(${offset1 - 500}px)` }}
					>
						{/* Measurement Div */}
						<div
							ref={setRef}
							className="absolute opacity-0 pointer-events-none flex gap-4"
						>
							{images.map((img) => (
								<div
									key={`measure-${img.id}`}
									className="w-[200px] md:w-[300px] aspect-video shrink-0"
								/>
							))}
						</div>

						{infiniteImages.map((img) => (
							<div
								key={`row1-${img.uniqueId}`}
								className="w-[200px] md:w-[300px] aspect-video rounded-none overflow-hidden border border-white/10 shrink-0 relative group"
							>
								<img
									src={img.src}
									alt="Gallery Item"
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>
						))}
					</div>
				</div>

				{/* Row 2 - Moves Left on Scroll */}
				<div className="relative flex overflow-hidden">
					<div
						className="flex gap-4 whitespace-nowrap transition-transform duration-100 ease-out"
						style={{ transform: `translateX(${offset2}px)` }}
					>
						{infiniteImages.map((img) => (
							<div
								key={`row2-${img.uniqueId}`}
								className="w-[200px] md:w-[300px] aspect-video rounded-none overflow-hidden border border-white/10 shrink-0 relative group"
							>
								<img
									src={img.src}
									alt="Gallery Item"
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>
						))}
					</div>
				</div>

				{/* Row 3 - Moves Right on Scroll (Faster) */}
				<div className="relative flex overflow-hidden">
					<div
						className="flex gap-4 whitespace-nowrap transition-transform duration-100 ease-out"
						style={{ transform: `translateX(${offset3 - 800}px)` }}
					>
						{infiniteImages.map((img) => (
							<div
								key={`row3-${img.uniqueId}`}
								className="w-[200px] md:w-[300px] aspect-video rounded-none overflow-hidden border border-white/10 shrink-0 relative group"
							>
								<img
									src={img.src}
									alt="Gallery Item"
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
