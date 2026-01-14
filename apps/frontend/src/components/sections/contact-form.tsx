import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import trailingImg from '@/assets/Trailing.png'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { sendContactForm } from '@/lib/api'

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

export type ContactFormInputs = z.infer<typeof contactFormSchema>

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const contactMutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: (data) => {
      console.log("Email sent successfully!!")
      toast.success(data?.message || "Message sent! We'll get back to you shortly.")
      reset()
    },
    onError: (error) => {
      toast.error(error.message || 'An error occured. Please try again!')
    },
  })

  const onSubmit = (data: ContactFormInputs) => {
    contactMutation.mutate(data)
  }
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Lets Get In <span className="text-[#00B2BD]">Touch</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-xl">
              Ready to take the next step? Schedule a complimentary consultation with our team and discover how we can help you achieve your goals.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register('firstName')}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email')}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phoneNumber')}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  {...register('message')}
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="bg-[#00B2BD] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#00848D] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? 'Sending...' : 'Contact Us'}
              </button>
            </form>
          </div>

          {/* Image Side with Overlay */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-4xl overflow-hidden shadow-2xl aspect-618/636">
              <img
                src={trailingImg}
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 md:p-12 text-white">
                <div className="space-y-6 mb-8">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-sm md:text-base font-medium">
                      ibsa@provenpath.et | ashenafi@provenpath.et
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-sm md:text-base font-medium">
                      +251910335501
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-sm md:text-base font-medium">
                      State, City, Country.
                    </span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-8">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a 
                      key={Icon.displayName || i} 
                      href="/" 
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
