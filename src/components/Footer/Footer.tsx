import { MotionStyle, Variants, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { SVGProps, useRef } from 'react'
import { Block, FooterContainer, FooterContent, FooterLogo } from './styles'
import { isTouchDevice } from '@src/helpers'

interface FooterProps {
  logo: React.FC<SVGProps<SVGSVGElement> & { variants?: Variants; motionStyle?: MotionStyle }>
  shrink?: boolean
}

const Footer: React.FC<FooterProps> = ({ logo: Logo, shrink }: FooterProps) => {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center end', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

  const height = useTransform(isTouchDevice() ? scrollYProgress : smoothProgress, [0, 0.9], ['0%', '100%'])

  return (
    <FooterContainer ref={container}>
      <Block initial={{ height: 0 }} style={{ height }} />
      <Block initial={{ height: 0 }} style={{ height }} />
      <FooterContent column>
        <FooterLogo className={shrink ? 'shrink' : undefined}>
          <Logo width="100%" />
        </FooterLogo>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
