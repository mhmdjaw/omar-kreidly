import React from 'react'
import { InnerContainer, LoadingContainer, LoadingContainerSmall } from './styles'
import { SecondaryLogo } from '@src/assets/svg'

const LoadingSign: React.FC = () => {
  return (
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
  )
}

interface LoadingProps {
  contained?: boolean
}

const Loading: React.FC<LoadingProps> = ({ contained }: LoadingProps) => {
  return contained ? (
    <LoadingContainerSmall>
      <LoadingSign />
    </LoadingContainerSmall>
  ) : (
    <LoadingContainer>
      <LoadingSign />
    </LoadingContainer>
  )
}

export default Loading
