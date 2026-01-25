import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { Briefcase, User, Users, Zap } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const services = [
	{
		icon: User,
		title: "Personal Development",
		description:
			"Unlock your potential and build lasting habits that transform your life trajectory.",
		size: "large",
	},
	{
		icon: Users,
		title: "Family Challenges",
		description:
			"Strengthen relationships and improve communication within your family unit.",
		size: "normal",
	},
	{
		icon: Zap,
		title: "Life Skills",
		description:
			"Align your priorities for fulfillment and master essential life competencies.",
		size: "normal",
	},
	{
		icon: Briefcase,
		title: "Business Development",
		description:
			"Scale your venture with proven frameworks and strategic guidance from experts.",
		size: "large",
	},
];

const ServiceCard = ({
	service,
	index,
}: {
	service: (typeof services)[0];
	index: number;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			variants={fadeIn("up", index * 0.1)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
			className={`group relative bg-[#0A0A0A] border border-white/10 p-6 md:p-10 lg:p-12
        transition-colors duration-500 cursor-pointer overflow-hidden
        hover:border-[#DBFE01]/50 perspective-[1000px]`}
		>
			{/* Yellow top border on hover */}
			<div
				className="absolute top-0 left-0 right-0 h-[3px] bg-[#DBFE01] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
				style={{ transform: "translateZ(30px)" }}
			/>

			{/* Icon */}
			<div className="mb-6" style={{ transform: "translateZ(60px)" }}>
				<service.icon className="w-8 h-8 text-white/60 group-hover:text-[#DBFE01] transition-colors duration-300" />
			</div>

			{/* Title */}
			<h3
				className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#DBFE01] transition-colors duration-300"
				style={{ transform: "translateZ(50px)" }}
			>
				{service.title}
			</h3>

			{/* Description */}
			<p
				className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-sm md:text-lg"
				style={{ transform: "translateZ(40px)" }}
			>
				{service.description}
			</p>

			{/* Hover glow effect */}
			<div
				className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#DBFE01]/0 group-hover:bg-[#DBFE01]/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none"
				style={{ transform: "translateZ(-20px)" }}
			/>
		</motion.div>
	);
};

const Services: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);

	return (
		<section
			ref={containerRef}
			id="services"
			className="relative w-full py-20 md:py-40 bg-black overflow-hidden perspective-[1000px]"
		>
			{/* Stronger Gradient Background */}
			<motion.div
				style={{ y: yBg }}
				className="absolute inset-0 bg-accent-gradient pointer-events-none"
			/>

			{/* Subtle background pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Content */}
			<motion.div
				variants={staggerContainer(0.1, 0.2)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.15 }}
				className="relative z-10 container mx-auto px-6 md:px-8"
			>
				{/* Section Header */}
				<div className="text-center mb-16 md:mb-20">
					<motion.span
						variants={fadeIn("down", 0)}
						className="text-[#DBFE01] font-black tracking-[0.3em] text-sm uppercase block mb-6"
					>
						WHAT WE OFFER
					</motion.span>
					<div className="overflow-hidden">
						<motion.h2
							variants={fadeIn("up", 0.1)}
							className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white tracking-tight uppercase leading-[0.9]"
						>
							SERVICES
						</motion.h2>
					</div>
				</div>

				{/* Bento Grid - SHARP CORNERS */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{services.map((service, index) => (
						<ServiceCard key={service.title} service={service} index={index} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Services;
