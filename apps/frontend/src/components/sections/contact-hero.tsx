import type React from "react";

const ContactHero: React.FC = () => {
	return (
		<div className="relative min-h-[60vh] w-full bg-[#DBFE01] flex flex-col items-center justify-center pt-32 pb-20">
			<h1 className="text-[clamp(4rem,15vw,18rem)] font-black text-black tracking-tighter uppercase leading-[0.8] text-center">
				CONTACT US
			</h1>
		</div>
	);
};

export default ContactHero;
