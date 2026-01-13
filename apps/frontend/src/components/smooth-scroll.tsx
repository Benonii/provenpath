import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

interface SmoothScrollProps {
  children: React.ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // Ultra smooth exponential easing
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly more responsive start
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis')

    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll
