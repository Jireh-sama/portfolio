"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SectionDividerProps {
  title: string
  className?: string
}

export function SectionDivider({ title, className = "" }: SectionDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerLineRef = useRef<HTMLDivElement>(null)
  const topLineRef = useRef<HTMLDivElement>(null)
  const bottomLineRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Set initial state - lines are invisible/collapsed
    gsap.set([centerLineRef.current, topLineRef.current, bottomLineRef.current], {
      scaleX: 0,
      opacity: 0,
    })
    gsap.set(titleRef.current, { opacity: 0 })

    // Create timeline for the animation sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "play none none none",
        markers: false,
      },
    })

    // Center line animates first
    tl.to(
      centerLineRef.current,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0,
    )

    // Outer lines follow with a slight delay
    tl.to(
      [topLineRef.current, bottomLineRef.current],
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      0.15, // Delay after center line starts
    )

    // Title fades in after lines finish
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0.6, // Delay to let lines finish
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`flex items-center justify-center gap-4 py-12 ${className}`}>
      {/* Top outer line */}
      <div
        ref={topLineRef}
        className="h-px flex-1 origin-left bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        style={{ transformOrigin: "left center" }}
      />

      {/* Center line */}
      <div
        ref={centerLineRef}
        className="h-0.5 flex-1 origin-left bg-gray-700 dark:bg-gray-300"
        style={{ transformOrigin: "left center" }}
      />

      {/* Title */}
      <div
        ref={titleRef}
        className="whitespace-nowrap px-6 text-center text-sm font-semibold tracking-widest text-gray-600 dark:text-gray-400"
      >
        {title}
      </div>

      {/* Center line (right side) */}
      <div
        ref={centerLineRef}
        className="h-0.5 flex-1 origin-right bg-gray-700 dark:bg-gray-300"
        style={{ transformOrigin: "right center" }}
      />

      {/* Bottom outer line */}
      <div
        ref={bottomLineRef}
        className="h-px flex-1 origin-right bg-gradient-to-l from-transparent via-gray-400 to-transparent"
        style={{ transformOrigin: "right center" }}
      />
    </div>
  )
}
