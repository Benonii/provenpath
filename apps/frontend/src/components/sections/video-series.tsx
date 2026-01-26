import { Play } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";
import carousel6 from "@/assets/carousel-6.png";
import carousel7 from "@/assets/carousel-7.png";
import carousel8 from "@/assets/carousel-8.png";
import carousel9 from "@/assets/carousel-9.png";
import carousel10 from "@/assets/carousel-10.png";

interface Video {
	id: number;
	title: string;
	description: string;
	thumbnail: string;
}

const seriesData: Record<string, Video[]> = {
	"Series One": [
		{
			id: 1,
			title: "The Foundation of Growth",
			description:
				"Explore the fundamental principles that drive personal and professional development in today's rapidly changing world.",
			thumbnail: carousel1,
		},
		{
			id: 2,
			title: "Strategic Leadership",
			description:
				"Learn how to lead with purpose and clarity, inspiring your team to achieve extraordinary results through proven strategies.",
			thumbnail: carousel2,
		},
		{
			id: 3,
			title: "Mindset Mastery",
			description:
				"Discover the power of a growth mindset and how it can transform your approach to challenges and opportunities.",
			thumbnail: carousel3,
		},
	],
	"Series Two": [
		{
			id: 4,
			title: "Effective Communication",
			description:
				"Master the art of communication to build stronger relationships and influence positive change in your community.",
			thumbnail: carousel4,
		},
		{
			id: 5,
			title: "Innovation & Creativity",
			description:
				"Unleash your creative potential and learn how to foster a culture of innovation in any environment.",
			thumbnail: carousel5,
		},
		{
			id: 6,
			title: "Emotional Intelligence",
			description:
				"Develop the self-awareness and empathy needed to navigate complex social dynamics and lead effectively.",
			thumbnail: carousel7,
		},
	],
	"Series Three": [
		{
			id: 7,
			title: "Sustainable Impact",
			description:
				"Understand how to create lasting value and make a meaningful difference through sustainable practices.",
			thumbnail: carousel6,
		},
		{
			id: 8,
			title: "Digital Transformation",
			description:
				"Navigate the digital landscape and leverage technology to scale your impact and reach a wider audience.",
			thumbnail: carousel8,
		},
		{
			id: 9,
			title: "Financial Literacy",
			description:
				"Gain the financial knowledge and skills necessary to manage resources effectively and ensure long-term stability.",
			thumbnail: carousel9,
		},
		{
			id: 10,
			title: "Community Building",
			description:
				"Learn how to foster collaboration and create strong, resilient communities that thrive together.",
			thumbnail: carousel10,
		},
	],
};

const VideoSeries: React.FC = () => {
	const [activeTab, setActiveTab] = useState("Series One");

	return (
		<section className="py-32 bg-black">
			<div className="container mx-auto px-4 md:px-8">
				{/* Tabs */}
				<div className="flex justify-center gap-8 md:gap-16 mb-20 border-b border-white/10">
					{Object.keys(seriesData).map((tab) => (
						<button
							type="button"
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`pb-6 text-lg md:text-xl font-bold uppercase tracking-wider transition-all relative ${
								activeTab === tab
									? "text-[#DBFE01]"
									: "text-gray-500 hover:text-white"
							}`}
						>
							{tab}
							{activeTab === tab && (
								<div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DBFE01]" />
							)}
						</button>
					))}
				</div>

				{/* Video List */}
				<div className="flex flex-col gap-1">
					{seriesData[activeTab].map((video) => (
						<div
							key={video.id}
							className="bg-[#0A0A0A] border border-white/5 flex flex-col md:flex-row items-stretch p-0 group hover:border-[#DBFE01] transition-all duration-300"
						>
							{/* Thumbnail */}
							<div className="relative w-full md:w-[400px] aspect-video overflow-hidden shrink-0">
								<img
									src={video.thumbnail}
									alt={video.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>

								
								<button
									type="button"
									className="absolute inset-0 flex items-center justify-center cursor-pointer"
									onClick={() => toast.info("video content coming soon")}
									aria-label="Play video"
								>
									<div className="w-16 h-16 bg-[#DBFE01] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
										<Play className="w-6 h-6 text-black fill-black ml-1" />
									</div>
								</button>
							</div>

							{/* Content */}
							<div className="grow p-8 md:p-10 flex flex-col justify-center">
								<div className="flex items-start justify-between gap-4 mb-4">
									<h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight group-hover:text-[#DBFE01] transition-colors">
										{video.title}
									</h3>
									<span className="text-gray-600 font-mono text-sm">0{video.id}</span>
								</div>
								
								<p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed mb-8 font-light max-w-3xl">
									{video.description}
								</p>
								
								<button
									type="button"
									className="text-white font-bold uppercase tracking-widest text-sm border-b border-[#DBFE01] pb-1 self-start hover:text-[#DBFE01] transition-colors"
									onClick={() => toast.info("video content coming soon")}
								>
									Watch Episode
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VideoSeries;
