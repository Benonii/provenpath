import React from 'react'
import { Rocket } from 'lucide-react'
import contactImg from '@/assets/contact_section.png'

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={contactImg} 
                alt="Contact Us" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            {/* Rocket Icon */}
            <div className="w-16 h-16 bg-[#F0F9FA] rounded-2xl flex items-center justify-center mb-10">
              <Rocket className="w-8 h-8 text-[#00B2BD]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-12">
              Let's build a better <span className="font-lato font-[200] italic text-[#00B2BD]">future</span> together
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                type="button"
                className="bg-[#00B2BD] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00848D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Consultation
              </button>
              <button 
                type="button"
                className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
