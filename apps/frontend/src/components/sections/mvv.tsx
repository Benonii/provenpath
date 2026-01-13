import React from 'react'
import { Sparkles } from 'lucide-react'
import mvv1 from '@/assets/mvv1.png'
import mvv2 from '@/assets/mvv2.png'
import mvv3 from '@/assets/mvv3.png'

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
          <div className="flex flex-col gap-6">
            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-transparent p-8 rounded-[2rem] border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00848D] mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To help and build a self-empowered, creative, independent, and disciplined generation in Ethiopia.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-transparent p-8 rounded-[2rem] border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-[#00848D] mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To see a self-empowered, creative, independent, and disciplined generation raising in Ethiopia.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-transparent p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
              <h3 className="text-3xl font-bold text-[#00848D] mb-8">Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-transparent p-5 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm">
                    <Sparkles className="w-4 h-4 text-[#8B0000] fill-[#8B0000]" />
                    <span className="text-[#00696F] font-semibold text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image Grid Layout */}
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[650px] md:h-[650px] w-full">
            {/* First Image: two rows, first two columns */}
            <div className="row-span-3 col-span-3 relative ">
              <img 
                src={mvv1} 
                alt="MVV 1" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            {/* Second Image: next two rows, next two columns */}
            <div className="row-start-2 row-span-3 col-start-4 col-span-5 relative bg-trasparent!">
              <div className="absolute -top-8 right-0 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-md border border-white/40 max-w-[150px] z-30">
                <p className="text-xs leading-tight text-gray-800 font-medium">
                  Lorem ispum Lorem ispumLorem ispumLorem ispum
                </p>
              </div>
              <img 
                src={mvv2} 
                alt="MVV 2" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            {/* Third Image: next two rows, first 3 columns */}
            <div className="row-start-5 row-span-6 col-start-1 col-span-5 relative">
              <div className="absolute -top-8 left-0 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-md border border-white/40 max-w-[200px] z-40">
                <p className="text-[9px] leading-tight text-gray-800 font-medium">
                  Lorem ipsum orem ipsum orem ipsum orem ipsum
                </p>
              </div>
              <img 
                src={mvv3} 
                alt="MVV 3" 
                className="w-full h-full rounded-[2rem] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MVV
