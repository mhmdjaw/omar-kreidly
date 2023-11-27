import { Flex } from '@src/styles/global-styles'
import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled(Flex)`
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  z-index: 49;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
  justify-content: center;
`

const logo1 = keyframes`
  0% {
    transform: scale(0) translateY(-50%);
  }
  100% {
    transform: scale(1) translateY(-50%);
  }
`

const logo3 = keyframes`
  0% {
    transform: scale(1) translateY(-50%);
  }
  100% {
    transform: scale(0) translateY(-50%);
  }
`

const logo2 = keyframes`
  0% {
    transform: translate(0, -50%);
  }
  100% {
    transform: translate(80px, -50%);
  }
`

export const InnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 100%;
  & div {
    position: absolute;
    display: flex;
    top: 50%;
    transform-origin: center top;
    transform: translateY(-50%);
    width: 40px;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    fill: ${(props) => props.theme.text};
  }
  & div:nth-child(1) {
    left: 0;
    animation: ${logo1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 0;
    animation: ${logo2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 0;
    right: 0;
    margin: auto;
    animation: ${logo2} 0.6s infinite;
  }
  & div:nth-child(4) {
    right: 0;
    animation: ${logo3} 0.6s infinite;
  }
`
