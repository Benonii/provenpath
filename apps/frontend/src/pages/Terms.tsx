import type React from "react";
import { motion } from "framer-motion";

const Terms: React.FC = () => {
	return (
		<div className="bg-black text-white min-h-screen">
			{/* Hero Section */}
			<section className="relative py-32 px-4 overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					<div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
					<div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
				</div>
				
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.span 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-accent font-bold tracking-[0.3em] text-sm uppercase mb-4 block text-center"
					>
						LEGAL
					</motion.span>
					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-[clamp(3rem,8vw,6rem)] font-black text-white tracking-tighter uppercase leading-none text-center mb-8"
					>
						Terms & <span className="text-transparent border-text">Conditions</span>
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-gray-400 text-center max-w-2xl mx-auto text-lg"
					>
						Please read these terms and conditions carefully before using our services.
					</motion.p>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-12">
						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">1. Introduction</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									Welcome to Proven Path. These terms and conditions outline the rules and regulations for the use of Proven Path's Website and Services.
								</p>
								<p>
									By accessing this website we assume you accept these terms and conditions. Do not continue to use Proven Path if you do not agree to take all of the terms and conditions stated on this page.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">2. Intellectual Property Rights</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									Other than the content you own, under these Terms, Proven Path and/or its licensors own all the intellectual property rights and materials contained in this Website.
								</p>
								<p>
									You are granted limited license only for purposes of viewing the material contained on this Website.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">3. Restrictions</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>You are specifically restricted from all of the following:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Publishing any Website material in any other media;</li>
									<li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
									<li>Publicly performing and/or showing any Website material;</li>
									<li>Using this Website in any way that is or may be damaging to this Website;</li>
									<li>Using this Website in any way that impacts user access to this Website;</li>
									<li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">4. Your Content</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Proven Path a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
								</p>
								<p>
									Your Content must be your own and must not be invading any third-party's rights. Proven Path reserves the right to remove any of Your Content from this Website at any time without notice.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">5. No warranties</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									This Website is provided "as is," with all faults, and Proven Path expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">6. Limitation of liability</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									In no event shall Proven Path, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Proven Path, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">7. Indemnification</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									You hereby indemnify to the fullest extent Proven Path from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">8. Governing Law & Jurisdiction</h2>
							<div className="prose prose-invert max-w-none text-gray-300 space-y-4">
								<p>
									These Terms will be governed by and interpreted in accordance with the laws of the State of Kenya, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Kenya for the resolution of any disputes.
								</p>
							</div>
						</section>
					</div>
				</div>
			</section>

			<style>{`
				.border-text {
					-webkit-text-stroke: 1px white;
				}
			`}</style>
		</div>
	);
};

export default Terms;
