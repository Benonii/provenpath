import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Logo from "@/components/logo";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";

interface NavItem {
	path: string;
	label: string;
	hash?: string;
}

const navItems: NavItem[] = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About Us" },
	{ path: "/library", label: "Library" },
	{ path: "/#services", label: "Services" },
	{ path: "#", label: "Influential's Path" },
	{ path: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showContent, setShowContent] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	const isActive = (path: string, hash?: string) => {
		if (hash) {
			return location.pathname === path && location.hash === hash;
		}
		return location.pathname === path && !location.hash;
	};

	// Handle scroll for contact page header variant
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle animation sequencing
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isOpen) {
			// Delay text appearance until sheet is fully open (approx 1500ms now due to slower animation)
			timeout = setTimeout(() => {
				setShowContent(true);
			}, 1500);
		} else {
			setShowContent(false);
		}
		return () => clearTimeout(timeout);
	}, [isOpen]);

	const isContactPage = location.pathname === "/contact";
	const useDarkHeader = isContactPage && !scrolled;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 pt-4 transition-colors duration-300 ${
				useDarkHeader
					? "bg-transparent"
					: "bg-linear-to-b from-black/80 via-black/40 to-transparent"
			}`}
		>
			<div className="relative flex items-center justify-between px-4 md:px-12 py-4">
				{/* Logo */}
				<Link to="/" className="flex items-center z-50">
					<Logo
						variant={useDarkHeader ? "dark" : "default"}
						className="scale-75 md:scale-100 origin-left"
					/>
				</Link>

				{/* Menu button */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className={`${
							useDarkHeader
								? "text-black hover:opacity-70"
								: "text-accent hover:text-white"
						} transition-colors transform hover:scale-110 duration-300`}
					>
						<Menu className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
					</button>

					<SheetContent
						side="right"
						className="w-full md:w-[35vw] md:max-w-none bg-accent border-l-0 p-12 md:p-20 flex flex-col justify-center items-center text-black"
					>
						<nav className="flex flex-col items-center gap-4 md:gap-6 w-full">
							{navItems.map((item, index) => {
								const active = isActive(item.path, item.hash);
								const delay = index * 200;

								return (
									<React.Fragment
										key={item.hash ? `${item.path}#${item.hash}` : item.path}
									>
										{/* Divider after Home */}
										{index === 1 && (
											<div className="w-48 h-px bg-black/10 my-4" />
										)}

										{/* Divider before Contact */}
										{index === navItems.length - 1 && (
											<div className="w-48 h-px bg-black/10 my-4" />
										)}

										<div
											className={`transition-all duration-1000 ease-out transform ${
												showContent
													? "opacity-100 translate-y-0"
													: "opacity-0 -translate-y-4"
											}`}
											style={{ transitionDelay: `${delay}ms` }}
										>
											<SheetClose asChild>
												<Link
													to={item.path}
													hash={item.hash}
													onClick={(e) => {
														if (item.label === "Influential's Path") {
															e.preventDefault();
															toast.info("Coming Soon!");
															return;
														}
														if (item.label !== "Services") {
															window.scrollTo(0, 0);
														}
													}}
													className={`group relative block text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.85] tracking-tighter transition-all duration-300 ${
														active ? "opacity-20" : "hover:opacity-60"
													}`}
												>
													{item.label}

													{/* Animated Strikethrough */}
													{active && (
														<span
															className={`absolute left-1/2 top-1/2 h-[4px] md:h-[8px] bg-black block transition-all duration-1000 ease-out -translate-x-1/2 -translate-y-1/2 ${
																showContent ? "w-[120%]" : "w-0"
															}`}
															style={{
																transitionDelay: `${navItems.length * 200 + 500}ms`,
															}}
														/>
													)}
												</Link>
											</SheetClose>
										</div>
									</React.Fragment>
								);
							})}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Header;
