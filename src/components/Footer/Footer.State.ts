import { useGlobalContext } from '@src/context'
import { isTouchDevice } from '@src/helpers'
import theme from '@src/theme'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const useFooter = () => {
  const { onCursor } = useGlobalContext()

  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center end', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

  const height = useTransform(isTouchDevice() ? scrollYProgress : smoothProgress, [0, 0.9], ['0%', '100%'])

  const contentRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!(contentRef.current && buttonRef.current && logoRef.current)) return

    const unsubHeight = height.on('change', (latest) => {
      if (!(contentRef.current && buttonRef.current && logoRef.current)) return
      if (contentRef.current.style.mixBlendMode === 'difference') return
      if (latest === '100%') {
        contentRef.current.style.mixBlendMode = 'difference'
        contentRef.current.style.fill = theme.text
        logoRef.current.style.mixBlendMode = 'difference'
        buttonRef.current.style.transform = 'scale(1)'
        logoRef.current.style.transform = 'scale(0.8)'
      }
    })
    return () => {
      unsubHeight()
    }
  }, [contentRef, buttonRef, logoRef, height])

  const mouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isTouchDevice()) return
    if (!(buttonRef.current && logoRef.current)) return
    const { clientX, clientY } = e
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    buttonRef.current.style.transition = 'transform 0.55s cubic-bezier(0.19, 1, 0.22, 1)'
    logoRef.current.style.transition = 'transform 0.55s cubic-bezier(0.19, 1, 0.22, 1)'
    buttonRef.current.style.transform = `translateX(${x * 0.2}px) translateY(${y * 0.2}px)`
    logoRef.current.style.transform = `translateX(${x * 0.4}px) translateY(${y * 0.4}px) scale(0.8)`
  }

  const mouseLeave = () => {
    if (isTouchDevice()) return
    onCursor('unhovered')
    if (!(buttonRef.current && logoRef.current)) return
    buttonRef.current.style.transform = `translateX(0) translateY(0)`
    logoRef.current.style.transform = `translateX(0) translateY(0) scale(0.8)`
  }

  const mouseDown = () => {
    if (!contentRef.current) return
    contentRef.current.style.transform = `scale(1.1)`
  }

  const mouseUp = () => {
    if (!contentRef.current) return
    contentRef.current.style.transform = `scale(1)`
  }

  return {
    container,
    height,
    contentRef,
    buttonRef,
    logoRef,
    mouseMove,
    mouseLeave,
    mouseDown,
    mouseUp,
    onCursor
  }
}

export default useFooter
