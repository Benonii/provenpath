import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket } from "lucide-react";
import { type FC, useRef } from "react";
import contactImg from "@/assets/contact_section.png";
import { fadeIn, scaleIn, staggerContainer } from "@/lib/animations";
import { BookCallDialogTrigger } from "../BookCallDialog";

interface ContactProps {
	variant?: "light" | "dark";
	reverse?: boolean;
}

const Contact: FC<ContactProps> = ({ reverse = false }) => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const yContent = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
	const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

	return (
		<section
			ref={containerRef}
			className="py-20 md:py-40 bg-black overflow-hidden"
		>
			<div className="container mx-auto px-6 md:px-8">
				<div
					className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} overflow-hidden border border-white/10`}
				>
					{/* Background Image for Mobile/Tablet */}
					<div className="absolute inset-0 z-0 md:hidden">
						<img
							src={contactImg}
							alt="Background"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/80" />
					</div>

					{/* Content Side */}
					<motion.div
						style={{ y: yContent }}
						variants={staggerContainer(0.15, 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-8 md:p-20"
					>
						{/* Icon - SHARP, YELLOW ACCENT */}
						<motion.div
							variants={scaleIn(0)}
							animate={{
								y: [0, -10, 0],
								rotate: [0, 5, -5, 0],
							}}
							transition={{
								y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
								rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
							}}
							className="w-16 h-16 md:w-20 md:h-20 bg-[#DBFE01]/10 flex items-center justify-center mb-10"
						>
							<Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#DBFE01]" />
						</motion.div>

						{/* Heading - LARGE, WHITE WITH YELLOW ACCENT */}
						<motion.h2
							variants={fadeIn("up", 0.1)}
							className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-tight mb-8 md:mb-12"
						>
							Let's build a better{" "}
							<span className="text-[#DBFE01] italic font-lato">future</span>{" "}
							together
						</motion.h2>

						{/* Buttons - SHARP EDGES */}
						<motion.div
							variants={fadeIn("up", 0.2)}
							className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
						>
							<BookCallDialogTrigger>
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-48 sm:w-auto bg-[#DBFE01] text-black px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-wider text-xs md:text-sm
                    hover:bg-white transition-all duration-500 
                    shadow-[0_15px_50px_rgba(219,254,1,0.2)] hover:shadow-[0_20px_60px_rgba(219,254,1,0.4)]"
								>
									Book Consultation
								</motion.button>
							</BookCallDialogTrigger>

							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Link
									to="/contact"
									className="w-48 sm:w-auto px-8 md:px-10 py-4 md:py-5 font-bold uppercase tracking-wider text-xs md:text-sm
                    border border-white text-white hover:bg-white hover:text-black
                    transition-all duration-500 inline-flex items-center justify-center"
								>
									Contact Us
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Image Side (Desktop Only) - SHARP */}
					<motion.div
						style={{ y: yImage }}
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="hidden md:block w-1/2 h-auto relative overflow-hidden"
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.7 }}
							className="w-full h-full"
						>
							<img
								src={contactImg}
								alt="Contact Us"
								className="w-full h-full object-cover"
							/>
						</motion.div>
						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent pointer-events-none" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
