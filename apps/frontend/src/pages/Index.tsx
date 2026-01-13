import React from 'react'
import Hero from '@/components/sections/hero'
import AboutUs from '@/components/sections/about'
import Library from '@/components/sections/library'
import Services from '@/components/sections/services'
import Clarity from '@/components/sections/clarity'
import Contact from '@/components/sections/contact'

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <Hero />
      </div>
      <div className="p-6 pt-0">
        <AboutUs />
      </div>
      <Clarity />
      <Services />
      <Library />
      <Contact variant="light" />
    </div>
  )
}

export default Index
