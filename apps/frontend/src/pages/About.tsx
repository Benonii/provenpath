import type React from "react";
import AboutHero from "@/components/sections/about-hero";
import Contact from "@/components/sections/contact";
import MVV from "@/components/sections/mvv";
import OurTeam from "@/components/sections/our-team";
import WhoWeAre from "@/components/sections/who-we-are";

const About: React.FC = () => {
	return (
		<div className="bg-white">
			<div className="p-6">
				<AboutHero />
			</div>
			<WhoWeAre />
			<MVV />
			<OurTeam />
			<Contact variant="dark" reverse={true} />
		</div>
	);
};

export default About;
