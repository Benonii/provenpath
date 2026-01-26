import type React from "react";
import Contact from "@/components/sections/contact";
import LibraryHero from "@/components/sections/library-hero";
import VideoSeries from "@/components/sections/video-series";

const Library: React.FC = () => {
	return (
		<div className="bg-white">
			<LibraryHero />
			<VideoSeries />
			<Contact variant="dark" />
		</div>
	);
};

export default Library;
