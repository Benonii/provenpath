import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import bgVideo from '../assets/bg-1.mp4'

const Index: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wide mb-2">
          WALK TO YOUR
        </h1>
        <h1 className="text-6xl md:text-8xl font-bold text-[#00F2FF] tracking-wide mb-8">
          DESTINY
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl font-light">
          Counseling, Training, Coaching, Mentoring, & Experience Sharing
        </p>

        <button 
          type="button"
          className="group bg-white text-[#01101B] hover:bg-gray-100 transition-all duration-300 rounded-full pl-8 pr-2 py-2 flex items-center gap-4 font-semibold text-lg"
        >
          Book a Consultation
          <div className="bg-[#00696F] text-white p-2 rounded-full group-hover:bg-[#005a5f] transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Index
