import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { ScrollBody } from './styles'

interface SmoothScrollProps {
  children: React.ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }: SmoothScrollProps) => {
  // Scroll progress of the window
  // Don't use scrollYProgress. It suddenlly jumps to 1 at the start before scrolling for some reason
  const { scrollY } = useScroll()

  // The height of the content in pixels
  const [contentHeight, setContentHeight] = useState(0)

  const scrollYProgress = useTransform(scrollY, (v) => v / (contentHeight - window.innerHeight))

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, damping: 8 })

  // The value to transform the content to
  const y = useTransform(smoothProgress, (v) => v * -(contentHeight - window.innerHeight))

  // A reference to hold the value of the content
  const contentRef = useRef<HTMLDivElement>(null)

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    if (!contentRef.current) return
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    })
    resizeObserver.observe(contentRef.current)
    return () => resizeObserver.disconnect() // clean up
  }, [contentRef])

  return (
    <>
      {/**
       * An invisible div with the actual height of the content.
       * This will expand the height of the body and trigger the default browser scrollbar.
       */}
      <div style={{ height: contentHeight }} />

      {/**
       * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
       * Its position is fixed by default and moves when the user scrolls.
       */}
      <ScrollBody style={{ y }} ref={contentRef}>
        {children}
      </ScrollBody>
    </>
  )
}

export default SmoothScroll
