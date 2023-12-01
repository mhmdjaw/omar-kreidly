import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface DesignContainerProps {
  addBlur: boolean
}

export const DesignContainer = styled(motion(Flex))<DesignContainerProps>`
  position: relative;
  overflow: hidden;
  height: calc(var(--vh, 1vh) * 100);
  align-items: stretch;
  & > div {
    position: relative;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    ${({ addBlur }) =>
      addBlur &&
      css`
        filter: blur(4px);
        transition: all 0.3s;
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            filter: blur(0);
          }
        }
        @media (hover: none) {
          &:active {
            filter: blur(0);
          }
        }
      `}
  }
`

export const Block = styled(motion.div)`
  position: absolute;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  top: 0;
  &.first {
    background-color: #2998ff;
    left: 0;
  }
  &.middle {
    /* background-color: ${(props) => props.theme.background}; */
    left: 0;
  }
  &.last {
    background-color: #009688;
    right: 0;
  }
`

export const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  fill: ${(props) => props.theme.text};
  &.hunt {
    fill: #ffea00;
  }
  ${theme.breakpoints.up('md')} {
    width: 50%;
    &.luna {
      width: 30%;
    }
  }
  ${theme.breakpoints.down('md')} {
    width: 200px;
    &.luna {
      width: 130px;
    }
  }
`
