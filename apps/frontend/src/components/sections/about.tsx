import React, { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import carousel1 from '@/assets/carousel_1.png'
import carousel2 from '@/assets/carousel_2.png'
import carousel3 from '@/assets/carousel_3.png'

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
  const images = [carousel1, carousel2, carousel3]
  // Duplicate images to create enough height for the loop
  // We need 3 sets: Previous, Current, Next (or just enough to cover scroll)
  const infiniteImages = [...images, ...images, ...images, ...images]

  // Animation Logic
  // Fallback to a safe estimate if height not yet measured
  const loopHeight = setHeight || 1000 

  // Left Column: Moves UP
  // We add a large offset to start so we can subtract from it
  const y1 = -(scrollY * 0.2) % loopHeight

  // Right Column: Moves DOWN
  // We start negative and add to it
  const y2 = (scrollY * 0.2) % loopHeight - loopHeight

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="text-[#00696F] font-semibold tracking-wider text-sm uppercase mb-4 block">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#01101B] mb-8">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Proven Path is a service-based private organization that aims to bring a
              positive impact on the generation through a learning platform designed and
              delivered by distinguished professionals on various societal topics.
            </p>
            
            <Link 
              to="/about"
              className="group border border-[#00696F] text-[#00696F] hover:bg-[#00696F] hover:text-white transition-all duration-300 rounded-full pl-6 pr-2 py-2 flex items-center gap-3 font-medium w-fit"
            >
              Learn More About us
              <div className="bg-transparent group-hover:bg-white/20 rounded-full p-1 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Spacer for grid on desktop */}
          <div className="hidden lg:block h-[600px]" />
        </div>
      </div>

      {/* Right Images - Dual Carousel - Full Height on Desktop */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[600px] lg:h-full flex gap-12 justify-center lg:justify-end overflow-hidden z-10">
        
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Column 1 - Moves UP */}
        <div className="flex flex-col gap-6 w-1/2 max-w-[240px] relative h-full">
           <div 
             className="flex flex-col gap-6 w-full absolute top-0 left-0"
             style={{ transform: `translateY(${y1}px)` }}
           >
              <div ref={setRef} className="absolute opacity-0 pointer-events-none w-full flex flex-col gap-6">
                  {images.map((_, i) => (
                    <div key={`measure-${i}`} className="aspect-square w-full" />
                  ))}
              </div>

              {infiniteImages.map((src, index) => (
                <div key={`col1-${index}`} className="rounded-3xl overflow-hidden shadow-xl aspect-square w-full relative group shrink-0">
                  <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
           </div>
        </div>

        {/* Column 2 - Moves DOWN */}
        <div className="flex flex-col gap-6 w-1/2 max-w-[240px] relative mt-12 h-full">
           <div 
             className="flex flex-col gap-6 w-full absolute top-0 left-0"
             style={{ transform: `translateY(${y2}px)` }}
           >
              {infiniteImages.map((src, index) => (
                <div key={`col2-${index}`} className="rounded-3xl overflow-hidden shadow-xl aspect-square w-full relative group shrink-0">
                  <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
