import React from 'react'
import { motion } from 'framer-motion'
import clarityBg from '@/assets/clarity_bg.png'
import { fadeIn, staggerContainer } from '@/lib/animations'
import { BookCallDialogTrigger } from '../BookCallDialog'

const Clarity: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Image - Subtle overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${clarityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.span 
            variants={fadeIn('down', 0)}
            className="text-[#00B2BD] font-medium tracking-[0.2em] text-sm uppercase mb-4 md:mb-6"
          >
            GET STARTED
          </motion.span>
          
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
          >
            Take the First Step Toward
          </motion.h2>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00848D] leading-tight mb-6 md:mb-8"
          >
            Clarity
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.3)}
            className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl"
          >
            Whether you're navigating life decisions or exploring your entrepreneurial ideas, ProvenPath is here to guide you. Schedule a one-on-one session and start moving forward with confidence.
          </motion.p>
          
          <motion.div variants={fadeIn('up', 0.4)}>
            <BookCallDialogTrigger>
              <button 
                type="button"
                className="bg-[#00848D] text-white px-8 md:px-9 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#006e75] transition-all duration-300 shadow-[0_20px_50px_rgba(0,132,141,0.4)] hover:shadow-[0_25px_60px_rgba(0,132,141,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Book Your Consultation
              </button>
            </BookCallDialogTrigger>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clarity
