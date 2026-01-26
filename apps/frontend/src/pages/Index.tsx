import type React from "react";
import AboutUs from "@/components/sections/about";
import Clarity from "@/components/sections/clarity";
import Contact from "@/components/sections/contact";
import Destiny from "@/components/sections/destiny";
import Hero from "@/components/sections/hero";
import Library from "@/components/sections/library";
import Services from "@/components/sections/services";

const Index: React.FC = () => {
	return (
		<div className="bg-white">
			<Hero />
			<Destiny />
			<AboutUs />
			<Clarity />
			<Services />
			<Library />
			<Contact variant="dark" />
		</div>
	);
};

export default Index;
