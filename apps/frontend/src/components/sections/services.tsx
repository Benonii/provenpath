import React from 'react'
import { User, Users, Zap, Briefcase } from 'lucide-react'
import servicesBg from '@/assets/services_bg.png'

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
    <section className="relative w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
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
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-wider">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:bg-white/15"
            >
              <div className="mb-4">
                <service.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
