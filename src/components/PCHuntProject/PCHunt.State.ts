import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const usePCHuntProject = () => {
  // first image
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined)
  // const container = useRef<HTMLDivElement | null>(null)
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const y = useTransform(scrollYProgress1, [0, 1], [-((containerHeight || 0) - 0.1 * (containerHeight || 0)), 0])

  useEffect(() => {
    if (!container.current) return
    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight(container.current?.clientHeight)
    })
    resizeObserver.observe(container.current)
    return () => resizeObserver.disconnect() // clean up
  }, [container])

  const [modelLoaded, setModelLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setModelLoaded(true), 3200)
  }, [])

  return { container, y, modelLoaded }
}

export default usePCHuntProject
