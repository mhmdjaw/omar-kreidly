import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const WorkContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`

interface BlockProps {
  invert: boolean
  addTransition: boolean
}

export const Block = styled(motion.div)<BlockProps>`
  position: absolute;
  height: calc(var(--vh, 1vh) * 100);
  width: 50vw;
  ${({ addTransition }) =>
    addTransition &&
    css`
      transition: background-color, color, 0.3s;
    `}
  &:first-child {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    top: 0;
    left: 0;
  }
  &:last-child {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    top: 0;
    right: 0;
  }
  & > div {
    height: 100%;
    justify-content: center;
  }
  ${({ invert }) =>
    invert &&
    css`
      &:first-child {
        background-color: ${(props) => props.theme.text};
        color: ${(props) => props.theme.background};
      }
      &:last-child {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
      }
    `}
`

export const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1rem;
  margin: 0;
  overflow: hidden;
  padding: 15px 0;
  ${theme.breakpoints.down('lg')} {
    font-size: 2.3rem;
    letter-spacing: 0.7rem;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 1.7rem;
    letter-spacing: 0.2rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }
`
