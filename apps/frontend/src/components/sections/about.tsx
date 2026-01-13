import React, { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import carousel1 from '@/assets/carousel-1.png'
import carousel2 from '@/assets/carousel-2.png'
import carousel3 from '@/assets/carousel-3.png'
import carousel4 from '@/assets/carousel-4.png'
import carousel5 from '@/assets/carousel-5.png'
import carousel6 from '@/assets/carousel-6.png'
import carousel7 from '@/assets/carousel-7.png'
import carousel8 from '@/assets/carousel-8.png'
import carousel9 from '@/assets/carousel-9.png'
import carousel10 from '@/assets/carousel-10.png'

const AboutUs: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        // Start animating when the section is near view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
           setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Measure height of one set of images for seamless looping
  const [setHeight, setSetHeight] = useState(0)
  const setRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (setRef.current) {
      setSetHeight(setRef.current.offsetHeight)
    }
    
    const handleResize = () => {
      if (setRef.current) {
        setSetHeight(setRef.current.offsetHeight)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Images array
  const images = [
    carousel1, carousel2, carousel3, carousel4, carousel5, 
    carousel6, carousel7, carousel8, carousel9, carousel10
  ]
  // Duplicate images to create enough height for the loop
  // We need 3 sets: Previous, Current, Next (or just enough to cover scroll)
  const infiniteImages = [...images, ...images, ...images, ...images]

  // Animation Logic
  // Fallback to a safe estimate if height not yet measured
  const loopHeight = setHeight || 1000 

  // Left Column: Moves UP
  const y1 = -(scrollY * 0.2) % loopHeight

  // Middle Column: Moves DOWN
  const y2 = (scrollY * 0.2) % loopHeight - loopHeight

  // Right Column: Moves UP (faster or offset)
  const y3 = -(scrollY * 0.25) % loopHeight

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-xl"
          >
            <motion.span 
              variants={fadeIn('right', 0)}
              className="text-[#00696F] font-semibold tracking-wider text-sm uppercase mb-4 block"
            >
              WHO WE ARE
            </motion.span>
            <motion.h2 
              variants={fadeIn('right', 0.1)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#01101B] mb-6 md:mb-8"
            >
              About Us
            </motion.h2>
            <motion.p 
              variants={fadeIn('right', 0.2)}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
            >
              Proven Path is a service-based private organization that aims to bring a
              positive impact on the generation through a learning platform designed and
              delivered by distinguished professionals on various societal topics.
            </motion.p>
            
            <motion.div variants={fadeIn('right', 0.3)}>
              <Link 
                to="/about"
                className="group border border-[#00696F] text-[#00696F] hover:bg-[#00696F] hover:text-white transition-all duration-300 rounded-full pl-6 pr-2 py-2 flex items-center gap-3 font-medium w-fit"
              >
                Learn More About us
                <div className="bg-transparent group-hover:bg-white/20 rounded-full p-1 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Spacer for grid on desktop */}
          <div className="hidden lg:block h-[600px]" />
        </div>
      </div>

      {/* Right Images - Triple Carousel - Full Height on Desktop */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[400px] sm:h-[500px] lg:h-full flex gap-4 md:gap-8 justify-center lg:justify-end overflow-hidden z-10 px-4">
        
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Column 1 - Moves UP */}
        <div className="flex flex-col gap-4 md:gap-6 w-1/2 sm:w-1/3 lg:w-1/3 max-w-[180px] relative h-full">
           <div 
             className="flex flex-col gap-4 md:gap-6 w-full absolute top-0 left-0"
             style={{ transform: `translateY(${y1}px)` }}
           >
              <div ref={setRef} className="absolute opacity-0 pointer-events-none w-full flex flex-col gap-4 md:gap-6">
                  {images.map((_, i) => (
                    <div key={`measure-${i}`} className="aspect-square w-full" />
                  ))}
              </div>

              {infiniteImages.map((src, index) => (
                <motion.div 
                  key={`col1-${index}`} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-square w-full relative group shrink-0"
                >
                  <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
           </div>
        </div>

        {/* Column 2 - Moves DOWN */}
        <div className="flex flex-col gap-4 md:gap-6 w-1/2 sm:w-1/3 lg:w-1/3 max-w-[180px] relative mt-8 md:mt-12 h-full">
           <div 
             className="flex flex-col gap-4 md:gap-6 w-full absolute top-0 left-0"
             style={{ transform: `translateY(${y2}px)` }}
           >
               {infiniteImages.map((src, index) => (
                <motion.div 
                  key={`col2-${index}`} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-square w-full relative group shrink-0"
                >
                  <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
           </div>
        </div>

        {/* Column 3 - Moves UP (Faster) - Hidden on mobile, shown on sm and up */}
        <div className="hidden sm:flex flex-col gap-4 md:gap-6 w-1/3 max-w-[180px] relative mt-4 md:mt-6 h-full">
           <div 
             className="flex flex-col gap-4 md:gap-6 w-full absolute top-0 left-0"
             style={{ transform: `translateY(${y3}px)` }}
           >
               {infiniteImages.map((src, index) => (
                <motion.div 
                  key={`col3-${index}`} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-square w-full relative group shrink-0"
                >
                  <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
