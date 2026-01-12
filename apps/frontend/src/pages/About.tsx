import React from 'react'
import AboutHero from '@/components/sections/about-hero'
import AboutUs from '@/components/sections/about'
import WhoWeAre from '@/components/sections/who-we-are'

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <AboutHero />
      </div>
      <WhoWeAre />
    </div>
  )
}

export default About
