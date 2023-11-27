import React from 'react'
import { InnerContainer, LoadingContainer } from './styles'
import { SecondaryLogo } from '@src/assets/svg'

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <InnerContainer>
        <div>
          <SecondaryLogo />
        </div>
        <div>
          <SecondaryLogo />
        </div>
        <div>
          <SecondaryLogo />
        </div>
        <div>
          <SecondaryLogo />
        </div>
      </InnerContainer>
    </LoadingContainer>
  )
}

export default Loading
