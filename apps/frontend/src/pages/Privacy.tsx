import type React from "react";
import { motion } from "framer-motion";

const Privacy: React.FC = () => {
	return (
		<div className="bg-white text-black min-h-screen">
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
						className="text-[clamp(3rem,8vw,6rem)] font-black text-black tracking-tighter uppercase leading-none text-center mb-8"
					>
						Privacy <span className="text-transparent border-text">Policy</span>
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-gray-600 text-center max-w-2xl mx-auto text-lg"
					>
						Your privacy is important to us. This policy explains how we handle your personal data.
					</motion.p>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-12">
						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">1. Information We Collect</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									We collect several different types of information for various purposes to provide and improve our Service to you:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (e.g., email address, name).</li>
									<li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used.</li>
									<li><strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">2. How We Use Your Information</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>Proven Path uses the collected data for various purposes:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>To provide and maintain our Service</li>
									<li>To notify you about changes to our Service</li>
									<li>To provide customer support</li>
									<li>To gather analysis or valuable information so that we can improve our Service</li>
									<li>To monitor the usage of our Service</li>
									<li>To detect, prevent and address technical issues</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">3. Disclosure of Data</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									We may disclose your personal information in the good faith belief that such action is necessary to:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>To comply with a legal obligation</li>
									<li>To protect and defend the rights or property of Proven Path</li>
									<li>To prevent or investigate possible wrongdoing in connection with the Service</li>
									<li>To protect the personal safety of users of the Service or the public</li>
									<li>To protect against legal liability</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">4. Security of Data</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">5. Service Providers</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">6. Links to Other Sites</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
								</p>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wider">7. Changes to This Privacy Policy</h2>
							<div className="prose max-w-none text-gray-700 space-y-4">
								<p>
									We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
								</p>
							</div>
						</section>
					</div>
				</div>
			</section>

			<style>{`
				.border-text {
					-webkit-text-stroke: 1px black;
				}
			`}</style>
		</div>
	);
};

export default Privacy;
