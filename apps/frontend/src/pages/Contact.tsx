import React from 'react'
import ContactHero from '@/components/sections/contact-hero'
import ContactForm from '@/components/sections/contact-form'

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <ContactHero />
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
