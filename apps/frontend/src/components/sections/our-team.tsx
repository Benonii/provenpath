import type { FC } from 'react'
import { motion } from 'framer-motion'
import ibsa from '@/assets/ibsa.png'
import ashenafi from '@/assets/ashenafi.png'
import { fadeIn, staggerContainer } from '@/lib/animations'

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
    <section className="py-24 bg-gradient-to-b from-white via-gray-300 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-12 md:mb-16 uppercase"
        >
          Our Team
        </motion.h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {team.map((member) => (
            <motion.div 
              key={member.name}
              variants={staggerContainer(0.2, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col ${member.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-24`}
            >
              {/* Image Column */}
              <motion.div 
                variants={fadeIn(member.reverse ? 'right' : 'left', 0)}
                className={`w-full md:w-1/2 flex ${member.reverse ? 'md:justify-end' : 'md:justify-start'} justify-center`}
              >
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[340px] md:max-w-[500px] aspect-[500/560] rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                variants={fadeIn(member.reverse ? 'left' : 'right', 0.2)}
                className="w-full md:w-1/2"
              >
                <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
