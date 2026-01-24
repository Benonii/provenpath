import React, { useRef } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { toast } from 'sonner'
import { motion, useScroll, useTransform } from 'framer-motion'
import libraryBg from '@/assets/library_bg.png'
import { fadeIn, staggerContainer } from '@/lib/animations'

const Library: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section ref={containerRef} className="py-32 md:py-40 bg-black overflow-hidden relative">
      {/* Cool Gradient Background - Brought back from previous version with dark theme */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,254,1,0.15)_0%,transparent_70%)] pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header - DARK THEME */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div 
            variants={fadeIn('down', 0)}
            className="w-16 h-1 bg-[#DBFE01] mb-8" 
          />
          <motion.span 
            variants={fadeIn('down', 0.1)}
            className="text-[#DBFE01] font-black tracking-[0.3em] text-sm uppercase mb-6"
          >
            CONTENT LIBRARY
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              className="text-[clamp(3rem,6vw,5rem)] font-black text-white mb-8 uppercase tracking-tight leading-[0.9]"
            >
              Our Best Video
            </motion.h2>
          </div>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            className="text-gray-400 text-xl max-w-2xl leading-relaxed font-light"
          >
            Explore our collection of educational videos and social media content designed to empower and inspire the next generation.
          </motion.p>
        </motion.div>

        {/* Featured Video Card - SHARP EDGES */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto flex flex-col sm:block sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden group cursor-pointer bg-[#0A0A0A] border border-white/10 hover:border-[#DBFE01] transition-colors duration-500"
        >
          
          {/* Video Thumbnail / Background Image */}
          <div className="relative aspect-video sm:absolute sm:inset-0 sm:aspect-auto overflow-hidden">
            <motion.div style={{ y: yImage, scale: 1.1 }} className="w-full h-full">
              <img 
                src={libraryBg} 
                alt="Library Background" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            {/* Mobile Play Button Overlay */}
            <button
              type="button"
              className="sm:hidden absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
              onClick={() => toast.info("Video content coming soon")}
              aria-label="Play video"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <div className="w-14 h-14 bg-[#DBFE01] flex items-center justify-center">
                  <Play className="w-6 h-6 text-black fill-black" />
                </div>
              </div>
            </button>
            {/* Desktop Overlay - Dark gradient on the left */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center px-8 py-12 sm:h-full sm:px-16 md:px-20 sm:py-0">
            <div className="max-w-xl md:max-w-lg lg:max-w-xl">
              <span className="text-[#DBFE01] text-xs font-black tracking-[0.25em] uppercase mb-6 block">
                LATEST EPISODE
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tight">
                The Future of Digital Learning
              </h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 line-clamp-3 font-light">
                Discover the transformative power of digital education through our carefully curated video series. From emerging technologies to essential life skills, our content bridges the gap between traditional learning and modern innovation.
              </p>
              
              {/* Link with underline animation */}
              <button 
                type="button" 
                onClick={() => toast.info("Video content coming soon")}
                className="group/link relative text-[#DBFE01] font-black tracking-widest text-sm uppercase"
              >
                Start Listening
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DBFE01] transform scale-x-100 group-hover/link:scale-x-0 transition-transform duration-300 origin-right" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>

          {/* Desktop Play Button - SHARP */}
          <button
            type="button"
            className="hidden sm:flex absolute top-1/2 right-10 md:right-24 lg:right-32 -translate-y-1/2 z-20 cursor-pointer"
            onClick={() => toast.info("Video content coming soon")}
            aria-label="Play video"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 md:w-28 lg:w-32 md:h-28 lg:h-32 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-[#DBFE01] transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 bg-[#DBFE01] flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(219,254,1,0.6)] transition-shadow duration-300">
                <Play className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 text-black fill-black" />
              </div>
            </motion.div>
          </button>
        </motion.div>

        {/* Bottom Button - SHARP */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <Link 
            to="/library"
            className="group flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 border-2 border-white text-white font-black uppercase tracking-widest text-sm
              hover:bg-[#DBFE01] hover:text-black hover:border-[#DBFE01] transition-all duration-300"
          >
            View Other Episodes
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-20">
          <div className="w-16 h-1 bg-[#DBFE01]" />
        </div>
      </div>
    </section>
  )
}

export default Library
