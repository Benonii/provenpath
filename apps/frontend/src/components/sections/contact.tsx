import type { FC } from 'react'
import { Rocket } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import contactImg from '@/assets/contact_section.png'
import { fadeIn, staggerContainer, scaleIn } from '@/lib/animations'
import { Button } from '../ui/button'
import { BookCallDialogTrigger } from '../BookCallDialog'

interface ContactProps {
  variant?: 'light' | 'dark'
  reverse?: boolean
}

const Contact: FC<ContactProps> = ({ variant = 'light', reverse = false }) => {
  const isDark = variant === 'dark'

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`relative flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ${isDark ? 'bg-gray-80' : 'bg-[#F8FAFB]'}`}>
          
          {/* Background Image for Mobile/Tablet */}
          <div className="absolute inset-0 z-0 md:hidden">
            <img 
              src={contactImg} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-black/50'}`} />
          </div>

          {/* Content Side */}
          <motion.div 
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 md:p-20"
          >
            {/* Rocket Icon */}
            <motion.div 
              variants={scaleIn(0)}
              className={`w-14 h-14 md:w-16 md:h-16 ${isDark ? 'bg-white/10' : 'bg-[#E6F4F5] md:bg-[#E6F4F5] bg-white/20'} backdrop-blur-sm md:backdrop-blur-none rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10`}
            >
              <Rocket className={`w-7 h-7 md:w-8 md:h-8 ${isDark ? 'text-white' : 'text-white md:text-[#00B2BD]'}`} />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={fadeIn('up', 0.1)}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-white md:text-[#1A1A1A]'} leading-tight mb-10 md:mb-12`}
            >
              Let's build a better <span className={`font-lato font-bold italic text-[#00F2FF]`}>future</span> together
            </motion.h2>

            {/* Buttons */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <BookCallDialogTrigger>
                <motion.div>
                  <Button
                    className="w-full sm:w-[240px] bg-[#00B2BD] text-white px-6 py-7 rounded-full font-semibold text-base md:text-lg hover:bg-[#00848D] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Consultation
                  </Button>
                </motion.div>
              </BookCallDialogTrigger>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className={`w-full sm:w-[240px] px-12 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-auto ${
                    isDark
                      ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      : 'bg-white md:bg-black text-black md:text-white hover:bg-gray-100 md:hover:bg-gray-900'
                  }`}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Side (Desktop Only) */}
          <div className="hidden md:block w-1/2 h-auto">
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
