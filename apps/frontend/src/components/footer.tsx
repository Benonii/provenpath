import { Link } from "@tanstack/react-router";
import { Youtube } from "lucide-react";

import facebook from "../assets/facebook-02.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin-02.png";
import twitter from "../assets/new-twitter.png";
import tiktok from "../assets/tiktok.png";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-(--gray-80) text-white">
			{/* Social Grid */}
			<div className="grid grid-cols-3 md:grid-cols-6 border-t border-b border-white/10">
				<SocialItem
					href="https://facebook.com"
					icon={
						<img
							src={facebook}
							alt="Facebook"
							className="w-10 h-10 invert brightness-0"
						/>
					}
				/>
				<SocialItem
					href="https://linkedin.com"
					icon={
						<img
							src={linkedin}
							alt="LinkedIn"
							className="w-10 h-10 invert brightness-0"
						/>
					}
				/>
				<SocialItem
					href="https://tiktok.com"
					icon={
						<img
							src={tiktok}
							alt="TikTok"
							className="w-10 h-10 invert brightness-0"
						/>
					}
				/>
				<SocialItem
					href="https://instagram.com"
					icon={
						<img
							src={instagram}
							alt="Instagram"
							className="w-10 h-10 invert brightness-0"
						/>
					}
				/>
				<SocialItem
					href="https://youtube.com"
					icon={<Youtube className="w-10 h-10" />}
				/>
				<SocialItem
					href="https://twitter.com"
					icon={
						<img
							src={twitter}
							alt="X"
							className="w-10 h-10 invert brightness-0"
						/>
					}
				/>
			</div>

			{/* Bottom Bar */}
			<div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-neutral-400">
				<p className="text-center md:text-left">&copy; {currentYear} Proven point. Powered By Someone</p>
				<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
					<FooterLink to="/terms">Terms & Conditions</FooterLink>
					<FooterLink to="/privacy">Privacy Policy</FooterLink>
					<FooterLink to="#">Cookie Policy</FooterLink>
				</div>
			</div>
		</footer>
	);
}

function SocialItem({ href, icon }: { href: string; icon: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex items-center justify-center py-8 md:py-12 border-r border-white/10 last:border-r-0 md:last:border-r-0 nth-3:border-r-0 md:nth-3:border-r border-b md:border-b-0 nth-4:border-b-0 nth-5:border-b-0 nth-6:border-b-0 overflow-hidden"
		>
			<div className="absolute inset-0 bg-accent transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
			<div className="relative z-10 transition-all duration-500 group-hover:text-black group-hover:[&_img]:invert-0 group-hover:[&_img]:brightness-0">
				{icon}
			</div>
		</a>
	);
}

function FooterLink({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			to={to}
			className="hover:text-white transition-colors duration-200 font-medium"
		>
			{children as any}
		</Link>
	);
}
