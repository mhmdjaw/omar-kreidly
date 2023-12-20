import React from 'react'
import { Browser, Content, Header, LogoContainer } from './styles'
import { Flex } from '@src/styles/global-styles'
import pchuntVideo from '@src/assets/videos/pchunt.mp4'
import { useGlobalContext } from '@src/context'
import { PCHuntLogoSecondary } from '@src/assets/svg'

const BrowserFrame: React.FC = () => {
  const { onCursor } = useGlobalContext()

  return (
    <Browser $column>
      <Header $spaceBetween>
        <Flex>
          <span className="control" />
          <span className="control" />
          <span className="control" />
        </Flex>
        <a
          href="https://pchunt.co/"
          target="_blank"
          rel="noreferrer"
          className="url"
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={() => onCursor('unhovered')}
        >
          <LogoContainer>
            <PCHuntLogoSecondary width="100%" />
          </LogoContainer>
          https://pchunt.co
        </a>
      </Header>
      <Content>
        <video className="media" autoPlay loop muted playsInline>
          <source src={pchuntVideo} type="video/mp4" />
        </video>
      </Content>
    </Browser>
  )
}

export default BrowserFrame
