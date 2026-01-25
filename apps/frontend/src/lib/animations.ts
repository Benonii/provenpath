import type { Variants } from "framer-motion";

export const fadeIn = (
	direction: "up" | "down" | "left" | "right" | "none" = "none",
	delay = 0,
): Variants => ({
	hidden: {
		y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
		x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
		opacity: 0,
	},
	show: {
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
});

export const staggerContainer = (
	staggerChildren?: number,
	delayChildren?: number,
): Variants => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren: delayChildren || 0,
		},
	},
});

export const textVariant = (delay?: number): Variants => ({
	hidden: {
		y: 50,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
		},
	},
});

export const scaleIn = (delay = 0): Variants => ({
	hidden: {
		scale: 0.8,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
});
