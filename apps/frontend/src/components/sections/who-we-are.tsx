import React, { useEffect, useState, useRef } from 'react'
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

const WhoWeAre: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const images = [
    carousel1, carousel2, carousel3, carousel4, carousel5,
    carousel6, carousel7, carousel8, carousel9, carousel10
  ]
  const infiniteImages = [...images, ...images, ...images, ...images, ...images]

  const [setWidth, setSetWidth] = useState(0)
  const setRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (setRef.current) {
      setSetWidth(setRef.current.offsetWidth)
    }
    
    const handleResize = () => {
      if (setRef.current) {
        setSetWidth(setRef.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate offsets based on scroll
  const loopWidth = setWidth || 3000
  const offset1 = (scrollY * 0.1) % loopWidth
  const offset2 = -(scrollY * 0.1) % loopWidth
  const offset3 = (scrollY * 0.15) % loopWidth

  return (
    <section ref={sectionRef} className="py-40 bg-gradient-to-b from-white via-gray-300 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left Side - Heading */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Who <span className="uppercase">WE ARE</span>
            </h2>
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-2/3">
            <p className="text-gray-600 text-lg leading-relaxed">
              Proven Path is a service-based private organization that aims to bring a positive impact on the generation through a learning platform designed and delivered by distinguished professionals on various societal topics. Proven-path was founded by two visionaries who envisioned that equipping the young generation will save them from wallowing in the mire of moral destruction, creating a vibrant, disciplined and productive power of the social group, and benefits the country in a multifaceted way.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Carousels */}
      <div className="flex flex-col gap-10 relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Right on Scroll */}
        <div className="relative flex overflow-hidden">
          <div 
            className="flex gap-6 whitespace-nowrap transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${offset1 - 500}px)` }}
          >
            {/* Measurement Div */}
            <div ref={setRef} className="absolute opacity-0 pointer-events-none flex gap-6">
              {images.map((_, i) => (
                <div key={`measure-${i}`} className="w-[150px] md:w-[220px] aspect-video shrink-0" />
              ))}
            </div>

            {infiniteImages.map((src, index) => (
              <div key={`row1-${index}`} className="w-[150px] md:w-[220px] aspect-video rounded-2xl overflow-hidden shadow-md shrink-0">
                <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left on Scroll */}
        <div className="relative flex overflow-hidden">
          <div 
            className="flex gap-6 whitespace-nowrap transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${offset2}px)` }}
          >
            {infiniteImages.map((src, index) => (
              <div key={`row2-${index}`} className="w-[150px] md:w-[220px] aspect-video rounded-2xl overflow-hidden shadow-md shrink-0">
                <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Moves Right on Scroll (Faster) */}
        <div className="relative flex overflow-hidden">
          <div 
            className="flex gap-6 whitespace-nowrap transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${offset3 - 800}px)` }}
          >
            {infiniteImages.map((src, index) => (
              <div key={`row3-${index}`} className="w-[150px] md:w-[220px] aspect-video rounded-2xl overflow-hidden shadow-md shrink-0">
                <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
