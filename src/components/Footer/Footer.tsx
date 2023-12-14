import { MotionStyle, Variants } from 'framer-motion'
import React, { SVGProps } from 'react'
import { Block, Button, FooterContainer, FooterContent, FooterLogo } from './styles'
import { navigate } from 'gatsby'
import useFooter from './Footer.State'

interface FooterProps {
  logo: React.FC<SVGProps<SVGSVGElement> & { variants?: Variants; motionStyle?: MotionStyle }>
  link: string
  shrink?: boolean
  moveUp?: boolean
}

const Footer: React.FC<FooterProps> = ({ logo: Logo, shrink, moveUp, link }: FooterProps) => {
  const { container, height, contentRef, buttonRef, logoRef, mouseMove, mouseLeave, mouseDown, mouseUp, onCursor } =
    useFooter()

  return (
    <FooterContainer ref={container}>
      <Block initial={{ height: 0 }} style={{ height }} />
      <Block initial={{ height: 0 }} style={{ height }} />
      <FooterContent ref={contentRef} $column>
        <Button
          ref={buttonRef}
          className={shrink ? 'shrink' : undefined}
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          onPointerDown={mouseDown}
          onPointerUp={mouseUp}
          onMouseOver={() => onCursor('hovered')}
          onClick={() => navigate(link)}
        />
        <FooterLogo ref={logoRef} className={shrink ? 'shrink' : undefined}>
          <Logo className={moveUp ? 'move-up' : undefined} width="100%" />
        </FooterLogo>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
