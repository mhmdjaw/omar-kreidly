import React, { useState } from 'react'
import {
  AboutContainer,
  AboutContent,
  AboutText,
  CoppyContainer,
  CopyButton,
  Footer,
  IconsContainer,
  Text
} from './styles'
import ReactTextTransition from 'react-text-transition'
import { useGlobalContext } from '@src/context'
import { BehanceIcon, InstagramIcon, LinkedinIcon } from '@src/assets/svg'
import theme from '@src/theme'
import { ease } from '@src/helpers'

const svgIcons = [
  {
    Icon: InstagramIcon,
    link: '#'
  },
  {
    Icon: LinkedinIcon,
    link: '#'
  },
  {
    Icon: BehanceIcon,
    link: '#'
  }
]

const AboutSection: React.FC = () => {
  const [buttonText, setButtonText] = useState('Copy Email')
  const [rotateButton, setRotateButton] = useState(false)
  const { onCursor } = useGlobalContext()

  return (
    <AboutContainer>
      <AboutContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} column spaceBetween>
        <AboutText>
          <Text>
            I am a versatile creative professional, proficient in both photography and UI/UX design. My work seamlessly
            combines the art of capturing the world&#8217;s beauty through my camera lens and crafting user-centric,
            aesthetically pleasing digital experiences. I pride myself on attention to detail and a commitment to
            excellence, and I&#8217;m dedicated to creating exceptional visuals and functional interfaces. Explore my
            portfolio and let&#8217;s collaborate to transform your vision into stunning imagery and intuitive user
            experiences.
          </Text>
        </AboutText>
        <CoppyContainer
          rotate={rotateButton}
          onClick={() => {
            setRotateButton(!rotateButton)
            navigator.clipboard.writeText('kreidlyomar@gmail.com')
          }}
        >
          <div>
            <CopyButton
              onMouseEnter={() => {
                setButtonText('Click Me!')
                onCursor('hidden')
              }}
              onMouseLeave={() => {
                setButtonText('Copy Email')
                onCursor('unhovered')
              }}
            >
              <ReactTextTransition>{buttonText}</ReactTextTransition>
            </CopyButton>
            <CopyButton>Email Copied!</CopyButton>
          </div>
        </CoppyContainer>
        <Footer fluid>
          <IconsContainer flexEnd>
            {svgIcons.map(({ Icon, link }, i) => (
              <a
                href={link}
                key={i}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor('unhovered')}
              >
                <Icon height="100%" fill={theme.text} />
              </a>
            ))}
          </IconsContainer>
        </Footer>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection
