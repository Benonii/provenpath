import React from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { toast } from 'sonner'
import libraryBg from '@/assets/library_bg.png'

const Library: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-accent/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="w-12 h-[2px] bg-[#00B2BD] mb-6 md:mb-8" />
          <span className="text-[#00B2BD] font-medium tracking-[0.2em] text-sm uppercase mb-4">
            CONTENT LIBRARY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Our Best Video
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl leading-relaxed">
            Explore our collection of educational videos and social media content designed to empower and inspire the next generation.
          </p>
        </div>

        {/* Featured Video Card */}
        <div className="relative max-w-6xl mx-auto flex flex-col sm:block sm:aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl bg-[#01101B]">
          
          {/* Video Thumbnail / Background Image */}
          <div className="relative aspect-video sm:absolute sm:inset-0 sm:aspect-auto">
            <img 
              src={libraryBg} 
              alt="Library Background" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Mobile Play Button Overlay */}
            <button
              type="button"
              className="sm:hidden absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              onClick={() => toast.info("video content coming soon")}
              aria-label="Play video"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-[#01101B] fill-[#01101B]" />
                </div>
              </div>
            </button>
            {/* Desktop Overlay - Dark gradient on the left */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#01101B] via-[#01101B]/80 to-transparent z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center px-8 py-10 sm:h-full sm:px-16 md:px-20 sm:py-0">
            <div className="max-w-xl md:max-w-lg lg:max-w-xl">
              <span className="text-white/60 text-xs md:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4 block">
                LATEST EPISODE
              </span>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                The Future of Digital Learning
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 md:mb-10 line-clamp-3">
                Discover the transformative power of digital education through our carefully curated video series. From emerging technologies to essential life skills, our content bridges the gap between traditional learning and modern innovation, empowering students to navigate tomorrow's challenges with confidence and creativity.
              </p>
              
              <button type="button" className="flex items-center gap-2 text-[#00B2BD] font-semibold border-b-2 border-[#00B2BD] pb-1 hover:text-[#00848D] hover:border-[#00848D] transition-colors text-sm md:text-base w-fit">
                Start Listening
              </button>
            </div>
          </div>

          {/* Desktop Play Button */}
          <button
            type="button"
            className="hidden sm:block absolute top-1/2 right-10 md:right-24 lg:right-32 -translate-y-1/2 z-20 cursor-pointer"
            onClick={() => toast.info("video content coming soon")}
            aria-label="Play video"
          >
            <div className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 text-[#01101B] fill-[#01101B]" />
              </div>
            </div>
          </button>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link 
            to="/library"
            className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-[#00B2BD] text-[#00B2BD] font-semibold hover:bg-[#00B2BD] hover:text-white transition-all duration-300 group text-sm md:text-base"
          >
            View Other Episode
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="w-12 h-[2px] bg-[#00B2BD]" />
        </div>
      </div>
    </section>
  )
}

export default Library
