import { Container, Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const AboutContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
`

export const AboutContent = styled(motion(Flex))`
  position: absolute;
  top: calc(var(--vh, 1vh) * 25);
  left: 0;
  right: 0;
  bottom: 0;
  ${theme.breakpoints.down('sm')} {
    top: calc(var(--vh, 1vh) * 15);
  }
`
export const AboutText = styled(Container)`
  flex-grow: 0;
  height: auto;
`

export const Footer = styled(Container)`
  flex-grow: 0;
  height: auto;
  width: 100%;
`

export const Text = styled.h2`
  margin: 0;
  font-weight: 500;
  line-height: 1.7;
  font-size: 1.7rem;
  text-align: justify;
  &::first-letter {
    initial-letter: 4 3;
    -webkit-initial-letter: 4 3;
    margin-right: 15px;
    ${theme.breakpoints.down('sm')} {
      initial-letter: 3 2;
      -webkit-initial-letter: 3 2;
      margin-right: 7px;
    }
  }
  ${theme.breakpoints.down('lg')} {
    font-size: 1.3rem;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 1.1rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`
interface CoppyContainerProps {
  rotate?: boolean
}

export const CoppyContainer = styled.div<CoppyContainerProps>`
  & > div {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s;
  }
  ${({ rotate }) =>
    rotate &&
    css`
      & > div {
        transform: rotateY(180deg);
      }
    `}
`

export const CopyButton = styled.button`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border: none;
  border-radius: 50%;
  padding: 10px;
  min-height: 110px;
  width: 110px;
  font-weight: 600;
  font-size: 0.9rem;
  backface-visibility: hidden;
  ${theme.breakpoints.down('sm')} {
    padding: 10px;
    min-height: 90px;
    width: 90px;
    font-size: 0.7rem;
  }
  & > div {
    justify-content: center;
  }
  &:last-child {
    top: 0;
    left: 0;
    position: absolute;
    transform: rotateY(180deg);
  }
`

export const IconsContainer = styled(Flex)`
  height: 50px;
  margin-bottom: 16px;
  & > div {
    height: 100%;
    align-items: stretch;
    & > a {
      display: inline-block;
      height: 100%;
      &:not(:first-of-type) {
        margin-left: 32px;
        ${theme.breakpoints.down('md')} {
          margin-left: 16px;
        }
      }
    }
  }
  ${theme.breakpoints.down('sm')} {
    height: 30px;
  }
`

export const Developer = styled.p`
  & a {
    display: inline-block;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      transform: rotateZ(-7deg);
      word-spacing: 7px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 0.6rem;
  }
`
