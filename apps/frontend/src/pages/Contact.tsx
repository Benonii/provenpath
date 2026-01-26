import type React from "react";
import ContactForm from "@/components/sections/contact-form";
import ContactHero from "@/components/sections/contact-hero";

const Contact: React.FC = () => {
	return (
		<div className="bg-white">
			<ContactHero />
			<ContactForm />
		</div>
	);
};

export default Contact;
