import React from 'react'
import Hero from '@/components/sections/hero'
import Destiny from '@/components/sections/destiny'
import AboutUs from '@/components/sections/about'
import Library from '@/components/sections/library'
import Services from '@/components/sections/services'
import Clarity from '@/components/sections/clarity'
import Contact from '@/components/sections/contact'

const Index: React.FC = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Destiny />
      <AboutUs />
      <Clarity />
      <Services />
      <Library />
      <Contact variant="dark" />
    </div>
  )
}

export default Index
