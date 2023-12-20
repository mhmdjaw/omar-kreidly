import React from 'react'
import { FirstLogo, Line, LogoContainer, SecondLogo, SeparatorContainer } from './styles'
import { SecondaryLogo } from '@src/assets/svg'
import variants from './variants'

const Separator: React.FC = () => {
  return (
    <SeparatorContainer initial="hidden" whileInView="inView" viewport={{ once: true, margin: '-50px' }}>
      <Line variants={variants.line} />
      <LogoContainer variants={variants.logoContainer}>
        <FirstLogo variants={variants.logo1}>
          <SecondaryLogo />
        </FirstLogo>
        <SecondLogo variants={variants.logo2}>
          <SecondaryLogo />
        </SecondLogo>
      </LogoContainer>
      <Line variants={variants.line} />
    </SeparatorContainer>
  )
}

export default Separator
