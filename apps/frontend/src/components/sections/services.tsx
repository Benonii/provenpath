import React from 'react'
import { User, Users, Zap, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import servicesBg from '@/assets/services_bg.png'
import { fadeIn, staggerContainer } from '@/lib/animations'

const services = [
  {
    icon: User,
    title: 'Personal development',
    description: 'Unlock your potential and build lasting habits.',
  },
  {
    icon: Users,
    title: 'Family challenges',
    description: 'Strengthen relationships and communication.',
  },
  {
    icon: Zap,
    title: 'Life Skills',
    description: 'Align your priorities for fulfillment.',
  },
  {
    icon: Briefcase,
    title: 'Business development',
    description: 'Scale your venture with proven frameworks.',
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="relative w-full flex flex-col items-center justify-center py-32 md:py-48 px-4 md:px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.h2 
          variants={fadeIn('down', 0)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-12 tracking-wider"
        >
          SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', index * 0.1)}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-300"
            >
              <div className="mb-4">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
