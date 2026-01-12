import React from 'react'
import clarityBg from '@/assets/clarity_bg.png'

const Clarity: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
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
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-[#00B2BD] font-medium tracking-[0.2em] text-sm uppercase mb-6">
            GET STARTED
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Take the First Step Toward
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-[#00848D] leading-tight mb-8">
            Clarity
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            Whether you're navigating life decisions or exploring your entrepreneurial ideas, ProvenPath is here to guide you. Schedule a one-on-one session and start moving forward with confidence.
          </p>
          
          <button 
            type="button"
            className="bg-[#00848D] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-[#006e75] transition-all duration-300 shadow-[0_20px_50px_rgba(0,132,141,0.4)] hover:shadow-[0_25px_60px_rgba(0,132,141,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Clarity
