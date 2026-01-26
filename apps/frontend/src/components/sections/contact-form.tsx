import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import trailingImg from "@/assets/Trailing.png";
import { sendContactForm } from "@/lib/api";

const contactFormSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	phoneNumber: z.string().optional(),
	message: z.string().min(1, "Message is required"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(contactFormSchema),
	});

	const contactMutation = useMutation({
		mutationFn: sendContactForm,
		onSuccess: (data) => {
			console.log("Email sent successfully!!");
			toast.success(
				data?.message || "Message sent! We'll get back to you shortly.",
			);
			reset();
		},
		onError: (error) => {
			toast.error(error.message || "An error occured. Please try again!");
		},
	});

	const onSubmit = (data: ContactFormInputs) => {
		contactMutation.mutate(data);
	};
	return (
		<section className="py-32 bg-black">
			<div className="container mx-auto px-4 md:px-8">
				<div className="flex flex-col lg:flex-row gap-20 items-start">
					{/* Form Side */}
					<div className="w-full lg:w-1/2">
						<h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-8 uppercase tracking-tight leading-none">
							Let's Get In <span className="text-[#DBFE01]">Touch</span>
						</h2>
						<p className="text-[#B0B0B0] text-lg mb-12 max-w-xl font-light leading-relaxed">
							Ready to take the next step? Schedule a complimentary consultation
							with our team and discover how we can help you achieve your goals.
						</p>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<input
										type="text"
										placeholder="First Name"
										{...register("firstName")}
										className="w-full px-6 py-5 rounded-none border-b border-white/20 bg-transparent text-white placeholder-gray-600 focus:outline-none focus:border-[#DBFE01] transition-colors"
									/>
									{errors.firstName && (
										<p className="text-red-500 text-sm mt-2 font-mono">
											{errors.firstName.message}
										</p>
									)}
								</div>
								<div>
									<input
										type="text"
										placeholder="Last Name"
										{...register("lastName")}
										className="w-full px-6 py-5 rounded-none border-b border-white/20 bg-transparent text-white placeholder-gray-600 focus:outline-none focus:border-[#DBFE01] transition-colors"
									/>
									{errors.lastName && (
										<p className="text-red-500 text-sm mt-2 font-mono">
											{errors.lastName.message}
										</p>
									)}
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<input
										type="email"
										placeholder="Email Address"
										{...register("email")}
										className="w-full px-6 py-5 rounded-none border-b border-white/20 bg-transparent text-white placeholder-gray-600 focus:outline-none focus:border-[#DBFE01] transition-colors"
									/>
									{errors.email && (
										<p className="text-red-500 text-sm mt-2 font-mono">
											{errors.email.message}
										</p>
									)}
								</div>
								<div>
									<input
										type="tel"
										placeholder="Phone Number"
										{...register("phoneNumber")}
										className="w-full px-6 py-5 rounded-none border-b border-white/20 bg-transparent text-white placeholder-gray-600 focus:outline-none focus:border-[#DBFE01] transition-colors"
									/>
									{errors.phoneNumber && (
										<p className="text-red-500 text-sm mt-2 font-mono">
											{errors.phoneNumber.message}
										</p>
									)}
								</div>
							</div>
							<div>
								<textarea
									placeholder="Message"
									rows={6}
									{...register("message")}
									className="w-full px-6 py-5 rounded-none border-b border-white/20 bg-transparent text-white placeholder-gray-600 focus:outline-none focus:border-[#DBFE01] transition-colors resize-none"
								/>
								{errors.message && (
									<p className="text-red-500 text-sm mt-2 font-mono">
										{errors.message.message}
									</p>
								)}
							</div>
							<button
								type="submit"
								disabled={contactMutation.isPending}
								className="bg-[#DBFE01] text-black px-12 py-6 font-black uppercase tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
							>
								{contactMutation.isPending ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>

					{/* Image Side with Overlay */}
					<div className="w-full lg:w-1/2">
						<div className="relative rounded-none overflow-hidden border border-white/10 w-full lg:aspect-auto lg:h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
							<img
								src={trailingImg}
								alt="Contact Us"
								className="w-full h-full object-cover transition-all duration-700"
							/>

							{/* Overlay Content */}
							<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-10 md:p-16 text-white">
								<div className="space-y-8 mb-12">
									{/* Email */}
									<div className="flex items-center gap-6 group">
										<div className="w-12 h-12 flex items-center justify-center bg-[#DBFE01]/10 group-hover:bg-[#DBFE01] transition-colors duration-300">
											<Mail className="w-6 h-6 text-[#DBFE01] group-hover:text-black transition-colors" />
										</div>
										<span className="text-lg font-bold tracking-wide">
											ibsa@provenpath.et
										</span>
									</div>

									{/* Phone */}
									<div className="flex items-center gap-6 group">
										<div className="w-12 h-12 flex items-center justify-center bg-[#DBFE01]/10 group-hover:bg-[#DBFE01] transition-colors duration-300">
											<Phone className="w-6 h-6 text-[#DBFE01] group-hover:text-black transition-colors" />
										</div>
										<span className="text-lg font-bold tracking-wide">
											+251 910 335 501
										</span>
									</div>

									{/* Address */}
									<div className="flex items-center gap-6 group">
										<div className="w-12 h-12 flex items-center justify-center bg-[#DBFE01]/10 group-hover:bg-[#DBFE01] transition-colors duration-300">
											<MapPin className="w-6 h-6 text-[#DBFE01] group-hover:text-black transition-colors" />
										</div>
										<span className="text-lg font-bold tracking-wide">
											Addis Ababa, Ethiopia
										</span>
									</div>
								</div>

								{/* Social Icons */}
								<div className="flex gap-4">
									{[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
										<a
											key={Icon.displayName || i}
											href="/"
											className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DBFE01] hover:border-[#DBFE01] group transition-all duration-300"
										>
											<Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
