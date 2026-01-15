import React, { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import bgVideo from '@/assets/bg-1.mp4'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { BookCallDialogTrigger } from '../BookCallDialog'

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('')
  const [iteration, setIteration] = useState(0)
  const fullText = 'DESTINY'

  useEffect(() => {
    const baseDelay = 150 // Base typing speed
    const speedMultiplier = Math.max(0.3, 1 - (iteration * 0.2)) // Gets faster each iteration, minimum 30% speed
    const typingDelay = baseDelay * speedMultiplier

    if (typedText.length < fullText.length) {
      // Still typing
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingDelay)
      return () => clearTimeout(timeout)
    } else if (typedText === fullText) {
      // Finished typing, wait before restarting
      const restartTimeout = setTimeout(() => {
        setTypedText('')
        setIteration(prev => prev + 1)
      }, 2000) // 2 second pause before restart
      return () => clearTimeout(restartTimeout)
    }
  }, [typedText, iteration])

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
      <div 
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-6"
      >
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide mb-2"
        >
          WALK TO YOUR
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#22949A] tracking-wide mb-6 md:mb-8"
        >
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-1 h-16 bg-[#22949A] ml-1"
          />
        </h1>
        
        <p 
          className="text-white/90 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl font-light"
        >
          Counseling, Training, Coaching, Mentoring, & Experience Sharing
        </p>

        <div>
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
        </div>
      </div>
    </div>
  )
}

export default Hero
