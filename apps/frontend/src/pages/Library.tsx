import React from 'react'
import LibraryHero from '@/components/sections/library-hero'
import LibrarySection from '@/components/sections/library'
import VideoSeries from '@/components/sections/video-series'
import Contact from '@/components/sections/contact'

const Library: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <LibraryHero />
      </div>
      <LibrarySection />
      <VideoSeries />
      <Contact variant="dark" />
    </div>
  )
}

export default Library
