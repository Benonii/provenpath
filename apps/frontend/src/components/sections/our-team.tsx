import type { FC } from 'react'
import ibsa from '@/assets/ibsa.png'
import ashenafi from '@/assets/ashenafi.png'

const OurTeam: FC = () => {
  const team = [
    {
      name: 'Ibsa Merga Olika',
      role: 'Co-founder and CEO of Proven Path',
      description: 'A development-oriented sociologist who believes social change is a constant and inevitable phenomenon that needs pioneers to modulate it to the beacon of moral standards, development indicators, social cohesion, and individual well-being.',
      image: ibsa,
      reverse: false
    },
    {
      name: 'Ashenafi Eruwa Sulito',
      role: 'Co-founder and Deputy CEO of Proven Path',
      description: 'A development-oriented sociologist who believes social change is a constant and inevitable phenomenon that needs pioneers to modulate it to the beacon of moral standards, development indicators, social cohesion, and individual well-being.',
      image: ashenafi,
      reverse: true
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-16 uppercase">
          Our Team
        </h2>

        <div className="flex flex-col gap-24">
          {team.map((member) => (
            <div 
              key={member.name} 
              className={`flex flex-col ${member.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Image Column */}
              <div className={`w-full md:w-1/2 flex ${member.reverse ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                <div className="w-full max-w-[500px] aspect-[500/560] rounded-[2rem] overflow-hidden shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2">
                <div className="max-w-xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
