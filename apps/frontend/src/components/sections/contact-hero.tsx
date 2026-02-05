import type React from "react";

const ContactHero: React.FC = () => {
	return (
		<div className="relative min-h-[40vh] md:min-h-[60vh] w-full bg-accent flex flex-col items-center justify-center pt-32 pb-20">
			<h1 className="text-[clamp(2.5rem,10vw,18rem)] font-black text-black tracking-tighter uppercase leading-[0.8] text-center px-4">
				CONTACT US
			</h1>
		</div>
	);
};

export default ContactHero;
