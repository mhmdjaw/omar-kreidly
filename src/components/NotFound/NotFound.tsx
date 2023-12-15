import React, { useState } from 'react'
import { Content, HomeButton, NotFoundContainer, Text, Title } from './styles'
import { Container } from '@src/styles/global-styles'
import { useGlobalContext } from '@src/context'

const NotFound: React.FC = () => {
  const [fillButton, setFillButton] = useState(false)
  const { onCursor } = useGlobalContext()

  return (
    <NotFoundContainer>
      <Content $column initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container>
          <Title>Whoops!</Title>
          <Text>Looks like you&#8217;re lost. Here&#8217;s a way back Home!</Text>
          <HomeButton
            to="/"
            onClick={() => {
              setFillButton(!fillButton)
            }}
            onMouseEnter={() => onCursor('hidden')}
            onMouseLeave={() => onCursor('unhovered')}
            $fill={fillButton}
          >
            <p>Home</p>
          </HomeButton>
        </Container>
      </Content>
    </NotFoundContainer>
  )
}

export default NotFound
