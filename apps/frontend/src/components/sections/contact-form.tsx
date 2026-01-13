import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import trailingImg from '@/assets/Trailing.png'

const ContactForm: React.FC = () => {
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

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#F8FAFB] focus:outline-none focus:border-[#00B2BD] transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-[#00B2BD] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#00848D] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Image Side with Overlay */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[618/636]">
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
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <a 
                      key={index} 
                      href="#" 
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
