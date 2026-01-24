import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import carousel1 from '@/assets/carousel-1.png'
import carousel2 from '@/assets/carousel-2.png'
import carousel3 from '@/assets/carousel-3.png'
import carousel4 from '@/assets/carousel-4.png'

const AboutUs: React.FC = () => {
  const images = [carousel1, carousel2, carousel3, carousel4]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-accent-gradient pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content - MASSIVE TEXT */}
          <motion.div 
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-2xl"
          >
            {/* Section Label - YELLOW */}
            <motion.span 
              variants={fadeIn('right', 0)}
              className="text-[#DBFE01] font-black tracking-[0.25em] text-sm md:text-base uppercase mb-8 block"
            >
              WHO WE ARE
            </motion.span>
            
            {/* Heading - MASSIVE */}
            <motion.h2 
              variants={fadeIn('right', 0.1)}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white mb-10 leading-[0.95] uppercase tracking-tight"
            >
              About Us
            </motion.h2>
            
            {/* Body Text - MUCH LARGER with yellow highlights */}
            <motion.div 
              variants={fadeIn('right', 0.2)}
              className="text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-tight mb-12 font-black uppercase"
            >
              <p className="mb-4">
                Proven Path is a{' '}
                <span className="text-[#DBFE01]">service-based private organization</span>{' '}
                that aims to bring a positive impact on the generation through a learning platform designed and delivered by distinguished professionals on various societal topics.

              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div variants={fadeIn('right', 0.3)}>
              <Link 
                to="/about"
                className="group border-2 border-white text-white hover:bg-[#DBFE01] hover:text-black hover:border-[#DBFE01]
                  transition-all duration-300 px-10 py-5 flex items-center gap-4 font-black uppercase tracking-widest text-sm w-fit"
              >
                Learn More About Us
                <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Perfect Hexagon Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center"
          >
            {/* Perfect Hexagon Shape Container */}
            <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
              {/* Rotating border effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                }}
              >
                <div className="w-full h-full bg-linear-to-br from-[#DBFE01] via-white to-[#DBFE01]" />
              </motion.div>

              {/* Inner hexagon with image */}
              <div 
                className="absolute inset-[6px] overflow-hidden bg-black"
                style={{
                  clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`About us ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#DBFE01]/20 blur-[80px] -z-10 scale-110" />
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-[#DBFE01] w-10' 
                      : 'bg-white/30 hover:bg-white/50 w-2'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
