import React from 'react'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import mvv1 from '@/assets/mvv1.png'
import mvv2 from '@/assets/mvv2.png'
import mvv3 from '@/assets/mvv3.png'
import { fadeIn, staggerContainer, scaleIn } from '@/lib/animations'

const MVV: React.FC = () => {
  const values = [
    'Truthfulness',
    'Uprightness',
    'Confidentiality',
    'Universality',
    'Integrity'
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission */}
              <motion.div 
                variants={fadeIn('right', 0)}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="bg-transparent p-8 rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-[#00848D] mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To help and build a self-empowered, creative, independent, and disciplined generation in Ethiopia.
                </p>
              </motion.div>
              {/* Vision */}
              <motion.div 
                variants={fadeIn('right', 0.1)}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="bg-transparent p-8 rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-[#00848D] mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To see a self-empowered, creative, independent, and disciplined generation raising in Ethiopia.
                </p>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div 
              variants={fadeIn('right', 0.2)}
              className="bg-transparent p-10 rounded-lg border border-gray-300"
            >
              <h3 className="text-3xl font-bold text-[#00848D] mb-8">Values</h3>
              <motion.div 
                variants={staggerContainer(0.08, 0)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn(index * 0.05)}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 105, 111, 0.05)' }}
                    className="bg-transparent p-5 rounded-2xl flex items-center gap-4 border border-accent/20 hover:border-none"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className=" text-gray-600 font-semibold text-base">{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Grid Layout */}
          <motion.div 
            variants={staggerContainer(0.15, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-6 grid-rows-6 gap-4 h-[650px] md:h-[650px] w-full"
          >
            {/* First Image: two rows, first two columns */}
            <motion.div 
              variants={fadeIn('up', 0)}
              className="row-span-3 col-span-3 relative "
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={mvv1} 
                alt="MVV 1" 
                className="w-full h-full rounded-lg object-cover"
              />
            </motion.div>

            {/* Second Image: next two rows, next two columns */}
            <motion.div 
              variants={fadeIn('up', 0.1)}
              className="row-start-2 row-span-3 col-start-4 col-span-5 relative bg-trasparent!"
            >
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8 }}
                className="absolute -top-8 right-0 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-md border border-white/40 max-w-[150px] z-30"
              >
                <p className="text-xs leading-tight text-gray-800 font-medium">
                  Lorem ispum Lorem ispumLorem ispumLorem ispum
                </p>
              </motion.div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={mvv2} 
                alt="MVV 2" 
                className="w-full h-full rounded-lg object-cover"
              />
            </motion.div>

            {/* Third Image: next two rows, first 3 columns */}
            <motion.div 
              variants={fadeIn('up', 0.2)}
              className="row-start-5 row-span-6 col-start-1 col-span-5 relative"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1 }}
                className="absolute -top-8 left-0 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-md border border-white/40 max-w-[200px] z-40"
              >
                <p className="text-xs leading-tight text-gray-800 font-medium">
                  Lorem ipsum orem ipsum orem ipsum orem ipsum
                </p>
              </motion.div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={mvv3} 
                alt="MVV 3" 
                className="w-full h-full rounded-[2rem] object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MVV
