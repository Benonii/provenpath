import { motion, useScroll, useTransform } from "framer-motion";
import { type FC, useRef, useEffect } from "react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { toast } from "sonner";
import gsap from "gsap";

const Clarity: FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const gradientRef = useRef<HTMLDivElement>(null);
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
	const scaleGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 0.8]);
	const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

	useEffect(() => {
		if (gradientRef.current) {
			gsap.fromTo(
				gradientRef.current,
				{
					scale: 1,
					opacity: 0.1,
				},
				{
					scale: 1.25,
					opacity: 1,
					duration: 2,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				},
			);
		}
	}, []);

	const handleNotifyClick = () => {
		toast.info("The Clarity Podcast is launching soon. Stay tuned!");
	};

	return (
		<section
			ref={containerRef}
			className="relative py-20 md:py-40 bg-black overflow-hidden"
		>
			{/* Stronger Gradient Background - Reduced height for smoother transition */}
			<motion.div
				style={{ y: yBg, opacity: opacityBg }}
				className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] pointer-events-none"
			>
				<div
					ref={gradientRef}
					className="w-full h-full bg-accent-gradient-strong"
				/>
			</motion.div>

			{/* Subtle grid pattern background */}
			<motion.div
				style={{ opacity: opacityBg, y: yBg }}
				className="absolute inset-0 opacity-[0.03]"
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
						backgroundSize: "80px 80px",
					}}
				/>
			</motion.div>

			{/* Glow effect - Squashed to reduce vertical footprint */}
			<motion.div
				style={{ scale: scaleGlow }}
				className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[120px] md:w-[800px] md:h-[300px] bg-[#DBFE01]/10 rounded-full blur-[120px] pointer-events-none"
			/>

			<div className="container mx-auto px-6 md:px-8 relative z-10">
				<motion.div
					style={{ y: yText }}
					variants={staggerContainer(0.15, 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.3 }}
					className="flex flex-col items-center text-center max-w-5xl mx-auto"
				>
					{/* Section Label - YELLOW */}
					<motion.span
						variants={fadeIn("down", 0)}
						className="text-[#DBFE01] font-black tracking-[0.3em] text-sm uppercase mb-8"
					>
						PODCAST
					</motion.span>

					{/* Heading - WHITE, MASSIVE */}
					<div className="overflow-hidden">
						<motion.h2
							variants={fadeIn("up", 0.1)}
							className="text-[clamp(2rem,5vw,6rem)] font-black text-white leading-[0.9] uppercase tracking-tight"
						>
							Take your first step towards
						</motion.h2>
					</div>
					<div className="overflow-hidden mb-6 md:mb-10">
						<motion.h2
							variants={fadeIn("up", 0.2)}
							className="text-[clamp(2.5rem,5vw,6rem)] font-black text-[#DBFE01] leading-[0.9] uppercase tracking-tight"
						>
							Clarity
						</motion.h2>
					</div>

					{/* Description - GRAY */}
					<motion.p
						variants={fadeIn("up", 0.3)}
						className="text-gray-400 text-base md:text-2xl leading-relaxed mb-10 md:mb-16 max-w-3xl font-light"
					>
						Join us as we dive deep into the stories of resilience, strategy, and
						success. Real conversations with those who have walked the path and
						found their way.
					</motion.p>

					{/* CTA Button - SHARP, YELLOW, GLOW */}
					<motion.div
						variants={fadeIn("up", 0.4)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<button
							type="button"
							onClick={handleNotifyClick}
							className="bg-[#DBFE01] text-black px-6 md:px-20 py-5 md:py-8 font-black uppercase tracking-[0.2em] text-xs md:text-base
                  hover:bg-white transition-all duration-500 
                  shadow-[0_20px_60px_rgba(219,254,1,0.4)] hover:shadow-[0_30px_100px_rgba(219,254,1,0.6)]
                  cursor-pointer border-2 border-[#DBFE01] hover:border-white w-fit md:w-auto"
						>
							Notify Me When It Launches
						</button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Clarity;
