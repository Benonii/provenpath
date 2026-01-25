import type React from "react";
import logo from "@/assets/logo.png";

interface LogoProps {
	className?: string;
	iconOnly?: boolean;
	variant?: "default" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, variant = "default" }) => {
	const isDark = variant === "dark";
	const cyanColor = "#22D3EE";
	const textColor = isDark ? "#000000" : "#FFFFFF";

	return (
		<div className={`flex items-center gap-3 ${className}`}>
			{/* Logo Image */}
			<img
				src={logo}
				alt="ProvenPath Logo"
				className={`h-12 md:h-16 w-auto transition-all duration-300 ${
					isDark ? "brightness-0" : ""
				}`}
			/>

			{!iconOnly && (
				<div className="flex flex-col justify-center">
					<span
						className="text-xl md:text-2xl font-black tracking-tighter leading-none uppercase"
						style={{ color: textColor, fontFamily: "Euclid Circular B, sans-serif" }}
					>
						PROVEN PATH
					</span>
					<span
						className="text-[10px] md:text-xs font-medium tracking-wide leading-none mt-1"
						style={{ color: cyanColor, fontFamily: "Euclid Circular B, sans-serif" }}
					>
						Learning Service
					</span>
				</div>
			)}
		</div>
	);
};

export default Logo;
