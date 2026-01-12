import React from 'react'
import aboutHeroVideo from '@/assets/about-hero.mp4'

const AboutHero: React.FC = () => {
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
        <source src={aboutHeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-widest uppercase">
          About Us
        </h1>
      </div>
    </div>
  )
}

export default AboutHero
