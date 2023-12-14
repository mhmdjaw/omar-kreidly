import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const useDanosProject = () => {
  // first image
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined)
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const y = useTransform(scrollYProgress1, [0, 1], [-((containerHeight || 0) - 0.1 * (containerHeight || 0)), 0])

  // last image
  const [container2Height, setContainer2Height] = useState<number | undefined>(undefined)
  const container2 = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ['start start', 'end start']
  })

  const y2 = useTransform(scrollYProgress2, [-0.1, 1], [0, container2Height || 0])

  useEffect(() => {
    if (!(container.current && container2.current)) return
    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight(container.current?.clientHeight)
      setContainer2Height(container2.current?.clientHeight)
    })
    resizeObserver.observe(container.current)
    return () => resizeObserver.disconnect() // clean up
  }, [container])

  return { container, y, container2, y2 }
}

export default useDanosProject
