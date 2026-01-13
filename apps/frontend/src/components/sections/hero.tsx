import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import bgVideo from '@/assets/bg-1.mp4'
import { Button } from '../ui/button'
import { fadeIn, staggerContainer } from '@/lib/animations'
import { BookCallDialogTrigger } from '../BookCallDialog'

const Hero: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-3rem)] w-full overflow-hidden rounded-2xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover w-auto h-auto z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-80 z-10 rounded-2xl" />

      {/* Content */}
      <motion.div 
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        animate="show"
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-6"
      >
        <motion.h1 
          variants={fadeIn('up', 0)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide mb-2"
        >
          WALK TO YOUR
        </motion.h1>
        <motion.h1 
          variants={fadeIn('up', 0.2)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#22949A] tracking-wide mb-6 md:mb-8"
        >
          DESTINY
        </motion.h1>
        
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-white/90 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl font-light"
        >
          Counseling, Training, Coaching, Mentoring, & Experience Sharing
        </motion.p>

        <motion.div variants={fadeIn('up', 0.6)}>
          <BookCallDialogTrigger>
            <Button
              type="button"
              className="group bg-white text-[#01101B] hover:bg-[#22949A] hover:text-white transition-all duration-500 rounded-full pl-6 md:pl-7 lg:pl-8 pr-2 py-6 md:py-7 lg:py-8 flex items-center gap-3 md:gap-4 font-semibold text-base md:text-lg hover:shadow-[0_20px_60px_rgba(34,148,154,0.5)] active:scale-95"
            >
              Book a Consultation
              <div className="bg-[#00696F] text-white p-3 md:p-3.5 lg:p-4 rounded-full group-hover:bg-white group-hover:text-[#22949A] transition-all duration-500 shadow-lg group-hover:shadow-none">
                <ArrowUpRight className="w-5 h-5 md:w-5.5 lg:w-6 lg:h-6" />
              </div>
            </Button>
          </BookCallDialogTrigger>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
