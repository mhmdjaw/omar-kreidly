import React, { useEffect, useRef, useState } from 'react'
import { ImgContainer, PageContainer, PageContent } from './styles'
import { DanosLogo } from '@src/assets/svg'
import ProjectHero from '../ProjectHero'
import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

// imagesmotion
import danos1 from '@src/assets/images/danos/danos1.png'

const DanosProject: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined)
  const [HeroAnimationComplete, setHeroAnimationComplete] = useState(false)
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, damping: 8 })

  useEffect(() => {
    if (!container.current) return
    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight(container.current?.clientHeight)
    })
    resizeObserver.observe(container.current)
    return () => resizeObserver.disconnect() // clean up
  }, [container])

  const y = useTransform(smoothProgress, [0, 1], [-((containerHeight || 0) - 0.1 * (containerHeight || 0)), 0])

  useMotionValueEvent(y, 'change', (latest) => {
    console.log(latest)
  })

  return (
    <PageContainer id="fixed-target">
      <ProjectHero logo={DanosLogo} onAnimationComplete={() => setHeroAnimationComplete(true)} />
      {/* {HeroAnimationComplete && ( */}
      <PageContent ref={container} style={{ y }}>
        <ImgContainer>
          <img src={danos1} alt="" />
        </ImgContainer>
      </PageContent>
      {/* )} */}
    </PageContainer>
  )
}

export default DanosProject
