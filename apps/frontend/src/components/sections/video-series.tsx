import React, { useState } from 'react'
import { Play } from 'lucide-react'
import carousel1 from '@/assets/carousel_1.png'
import carousel2 from '@/assets/carousel_2.png'
import carousel3 from '@/assets/carousel_3.png'

interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
}

const seriesData: Record<string, Video[]> = {
  'Series One': [
    {
      id: 1,
      title: '{Video Title}',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque cursus tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus. tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus.',
      thumbnail: carousel1
    },
    {
      id: 2,
      title: '{Video Title}',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque cursus tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus. tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus.',
      thumbnail: carousel2
    },
    {
      id: 3,
      title: '{Video Title}',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque cursus tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus. tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla. Dui netus viverra sapien quam viverra augue. Aenean leo eu tortor interdum phasellus.',
      thumbnail: carousel3
    }
  ],
  'Series Two': [
    {
      id: 4,
      title: '{Video Title} - Series Two',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque cursus tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla.',
      thumbnail: carousel2
    }
  ],
  'Series Three': [
    {
      id: 5,
      title: '{Video Title} - Series Three',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque cursus tristique tellus sit natoque diam. Nec nunc dui quam enim placerat dolor nulla.',
      thumbnail: carousel3
    }
  ]
}

const VideoSeries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Series One')

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-8 md:gap-12 mb-16 border-b border-gray-100">
          {Object.keys(seriesData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg md:text-xl font-semibold transition-all relative ${
                activeTab === tab 
                  ? 'text-[#00B2BD]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00B2BD]" />
              )}
            </button>
          ))}
        </div>

        {/* Video List */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {seriesData[activeTab].map((video) => (
            <div 
              key={video.id} 
              className="bg-[#F8FAFB] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8 gap-8 group hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-2/5 aspect-video rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-[#00B2BD] fill-[#00B2BD] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
                  {video.description}
                </p>
                <button className="text-[#00B2BD] font-semibold border-b-2 border-[#00B2BD] pb-0.5 hover:text-[#00848D] hover:border-[#00848D] transition-colors">
                  Watch Episode
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSeries
