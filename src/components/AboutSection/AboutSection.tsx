import React, { useState } from 'react'
import { AboutContainer, AboutContent, CopyButton, Developer, IconsContainer, Text } from './styles'
// import ReactTextTransition from 'react-text-transition'
import { useGlobalContext } from '@src/context'
import { BehanceIcon, InstagramIcon, LinkedinIcon } from '@src/assets/svg'
import theme from '@src/theme'
import { Container, Flex } from '@src/styles/global-styles'
import { isSafari } from '@src/helpers'

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
  // const [buttonText, setButtonText] = useState('Copy Email')
  const [fillButton, setFillButton] = useState(false)
  const { onCursor } = useGlobalContext()

  return (
    <AboutContainer>
      <AboutContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} $column $spaceBetween>
        <Container>
          <Text>
            I&#8217;m a versatile creative professional skilled in photography and UI/UX design. My work seamlessly
            combines capturing the world&#8217;s beauty through my camera lens with crafting user-centric digital
            experiences. With a keen eye for detail and a commitment to excellence, I specialize in creating exceptional
            visuals and functional interfaces. Explore my portfolio and let&#8217;s collaborate to transform your vision
            into stunning imagery and intuitive user experiences.
          </Text>
        </Container>
        {/* <CoppyContainer
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
              {isTouchDevice() ? 'Copy Email' : <ReactTextTransition>{buttonText}</ReactTextTransition>}
            </CopyButton>
        <CopyButton>Copy Email</CopyButton>
        </div>
        </CoppyContainer> */}
        <CopyButton
          onClick={() => {
            setFillButton(!fillButton)
            navigator.clipboard.writeText('kreidlyomar@gmail.com')
          }}
          onMouseEnter={() => onCursor('hidden')}
          onMouseLeave={() => onCursor('unhovered')}
          $fill={fillButton}
          $isSafari={isSafari}
        >
          <p>Copy Email</p>
          <div>
            <div className="text">
              <p>Email Copied!</p>
            </div>
          </div>
        </CopyButton>
        <Container $fluid $fullWidth>
          <IconsContainer $spaceBetween>
            <Developer>
              Coded by{' '}
              <a
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor('unhovered')}
                href="https://www.linkedin.com/in/mohamadjawhar/"
                target="_blank"
                rel="noreferrer"
              >
                Mohamad Jawhar
              </a>
            </Developer>
            <Flex>
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
            </Flex>
          </IconsContainer>
        </Container>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection
