import type React from "react";
import logo from "@/assets/logo.png";

interface LogoProps {
	className?: string;
	iconOnly?: boolean;
	variant?: "default" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, variant = "default" }) => {
	const isDark = variant === "dark";
	const textColor = isDark ? "#000000" : "#FFFFFF";
	const subtextColor = isDark ? "#000000" : "#00D2FF";

	return (
		<div className={`flex items-center gap-3 ${className}`}>
			{/* Logo Image */}
			<img
				src={logo}
				alt="ProvenPath Logo"
				className="h-12 md:h-16 w-auto transition-all duration-300"
				style={{ 
					filter: isDark 
						? "brightness(0)" 
						: "invert(58%) sepia(90%) saturate(2500%) hue-rotate(165deg) brightness(100%) contrast(105%)" 
				}}
			/>

			{!iconOnly && (
				<div className="flex flex-col justify-center">
					<span
						className="text-2xl md:text-3xl font-black tracking-tighter leading-none uppercase"
						style={{ color: textColor, fontFamily: "Euclid Circular B, sans-serif" }}
					>
						PROVEN PATH
					</span>
					<span
						className="text-[20px] md:text-base font-medium tracking-wide leading-none mt-1"
						style={{ color: subtextColor, fontFamily: "Euclid Circular B, sans-serif" }}
					>
						Learning Service
					</span>
				</div>
			)}
		</div>
	);
};

export default Logo;
