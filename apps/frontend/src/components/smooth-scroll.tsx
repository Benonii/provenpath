import Lenis from "lenis";
import type React from "react";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
	children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 2.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // Ultra smooth exponential easing
			smoothWheel: true,
			wheelMultiplier: 1.1, // Slightly more responsive start
			touchMultiplier: 2,
		});

		lenisRef.current = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Add lenis class to html for CSS targeting
		document.documentElement.classList.add("lenis");

		return () => {
			lenis.destroy();
			document.documentElement.classList.remove("lenis");
		};
	}, []);

	// Scroll to top when pathname changes
	useEffect(() => {
		if (lenisRef.current) {
			lenisRef.current.scrollTo(0, { immediate: true });
		}
	}, []);

	return <>{children}</>;
};

export default SmoothScroll;
