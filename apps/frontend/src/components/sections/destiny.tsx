import React, { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { BookCallDialogTrigger } from '../BookCallDialog'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Destiny: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const path1Ref = useRef<SVGPathElement>(null)
  const path2Ref = useRef<SVGPathElement>(null)
  const starRef = useRef<SVGPathElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const wordsRef = useRef<(HTMLDivElement | null)[]>([])
  const wordsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!path1Ref.current || !path2Ref.current || !sectionRef.current || !starRef.current || !textRef.current) return

    const path1 = path1Ref.current
    const path2 = path2Ref.current
    
    // Calculate lengths with a fallback
    const len1 = Math.ceil(path1.getTotalLength()) || 3000
    const len2 = Math.ceil(path2.getTotalLength()) || 3000

    // Use a dash array with a huge gap to ensure the line is fully hidden
    // Format: [dash_length, gap_length]
    const dashArray1 = `${len1} ${len1 + 5000}`
    const dashArray2 = `${len2} ${len2 + 5000}`

    // Ensure star is static, visible, and outlined initially
    gsap.set(starRef.current, { 
      fill: 'transparent',
      scale: 1, 
      opacity: 1, 
      x: 0, 
      y: 0,
      transformOrigin: 'center center' 
    })

    // Set initial text state (outline)
    gsap.set(textRef.current, {
      color: 'transparent',
      webkitTextStroke: '1px #DBFE01',
    })

    // Set initial state for words (hidden, blurred, slightly down)
    gsap.set(wordsRef.current, {
      opacity: 0,
      filter: 'blur(10px)',
      y: 20,
    })

    // Create timeline
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 2, // Pause briefly when fully revealed
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })

    // Use fromTo for robust start/end state control
    tl.fromTo(path1, 
      { strokeDasharray: dashArray1, strokeDashoffset: len1 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.inOut',
      }
    )
    // Animate text fill during the gap between paths
    .to(textRef.current, {
      color: '#DBFE01',
      duration: 1,
      ease: 'power2.inOut',
    }, '-=0.5')
    .fromTo(path2,
      { strokeDasharray: dashArray2, strokeDashoffset: len2 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.inOut',
      }, 
      '-=0.5'
    )
    .to(starRef.current, {
      fill: '#DBFE01',
      duration: 0.5,
      ease: 'power2.out',
    })
    // Separate animation for words to make them persistent (no yoyo)
    gsap.to(wordsRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: wordsContainerRef.current,
        start: 'top 85%', // Trigger when the words container is near the bottom of the viewport
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill()
      })
      tl.kill()
    }
  }, [])

  const words = [
    "Counseling",
    "Training",
    "Coaching",
    "Mentoring",
    "Experience Sharing"
  ]

  return (
    <section ref={sectionRef} className="relative bg-black py-20 overflow-hidden">
      <div className="relative w-full max-w-[1500px] mx-auto px-10 py-96">
        
        {/* SVG with absolute positioning for precise control */}
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          style={{ width: '100%', height: '100%' }}
          viewBox="0 -50 1300 700"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Path to Destiny"
        >
          <title>Path to Destiny</title>
          
          {/* --- TOP LEFT PATH --- */}
          {/* Background dim path 1 */}
          <path
            d="M 140,-100
               C 220,20 300,80 360,40
               S 400,-120 300,-100
               S 220,100 360,200"
            stroke="rgba(219, 254, 1, 0.15)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Animated thick path 1 */}
          <path
            ref={path1Ref}
            d="M 140,-100
               C 220,20 300,80 360,40
               S 400,-120 300,-100
               S 220,100 360,200"
            stroke="#DBFE01"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- BOTTOM RIGHT PATH --- */}
          {/* Background dim path 2 */}
          <path
            d="M 850,340
               C 920,400 980,440 1040,400
               S 1100,320 1150,380
               S 1200,500 1230,560"
            stroke="rgba(219, 254, 1, 0.15)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Animated thick path 2 */}
          <path
            ref={path2Ref}
            d="M 850,340
               C 920,400 980,440 1040,400
               S 1100,320 1150,380
               S 1200,500 1230,560"
            stroke="#DBFE01"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* STAR at end of path 2 */}
          <svg
            x="1180"
            y="510"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            overflow="visible"
            aria-label="Destination Star"
          >
            <title>Destination Star</title>
            <path
              ref={starRef}
              d="M40 8 L48 30 L72 30 L52 45 L60 68 L40 54 L20 68 L28 45 L8 30 L32 30 Z"
              fill="transparent" 
              stroke="#DBFE01"
              strokeWidth="2"
            />
          </svg>
        </svg>

        {/* Text Section - Centered */}
        <div className="relative z-10 text-center py-16">
          <h2 className="sb-hero text-white mb-6">
            walk to your{' '}
            <span ref={textRef} className="text-[#DBFE01]">destiny</span>
          </h2>

          <p className="sb-body text-[#B0B0B0] max-w-xl mx-auto">
            Every journey begins with a single step. Let us guide you on the path to achieving your goals.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <BookCallDialogTrigger>
              <button
                type="button"
                className="group bg-[#DBFE01] text-black px-10 md:px-14 py-5 md:py-6 font-bold text-sm md:text-base uppercase tracking-[0.15em] 
                  hover:bg-white transition-all duration-500 
                  hover:shadow-[0_20px_80px_rgba(219,254,1,0.4)] 
                  active:scale-95 flex items-center gap-4 border-2 border-[#DBFE01] hover:border-white"
              >
                Book a Consultation
                <div className="bg-black text-[#DBFE01] p-3 group-hover:bg-[#DBFE01] group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </button>
            </BookCallDialogTrigger>
          </motion.div>
        </div>

        {/* Diagonal Words Section */}
        <div ref={wordsContainerRef} className="absolute top-20 right-20 z-20 flex flex-col pointer-events-none">
          {words.map((word, i) => (
            <div
              key={word}
              ref={(el) => {
                if (el) wordsRef.current[i] = el
              }}
              className="text-white font-bold text-4xl! mb-1 tracking-wide sb-hero"
              style={{ marginLeft: `${i * 3}rem` }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destiny
