import type { FC } from 'react'
import { Rocket } from 'lucide-react'
import contactImg from '@/assets/contact_section.png'

interface ContactProps {
  variant?: 'light' | 'dark'
  reverse?: boolean
}

const Contact: FC<ContactProps> = ({ variant = 'light', reverse = false }) => {
  const isDark = variant === 'dark'

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} rounded-[3rem] overflow-hidden shadow-2xl ${isDark ? 'bg-gray-80' : 'bg-[#F8FAFB]'}`}>
          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-12 md:p-20">
            {/* Rocket Icon */}
            <div className={`w-16 h-16 ${isDark ? 'bg-white/10' : 'bg-[#E6F4F5]'} rounded-2xl flex items-center justify-center mb-10`}>
              <Rocket className={`w-8 h-8 ${isDark ? 'text-white' : 'text-[#00B2BD]'}`} />
            </div>

            {/* Heading */}
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#1A1A1A]'} leading-tight mb-12`}>
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
                className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto">
            <img 
              src={contactImg} 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
