import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${(props) => props.theme.background};
  z-index: 9999;
`

export const Overlay = styled(motion.div)`
  position: absolute;
  height: calc(var(--vh, 1vh) * 100);
  width: 50vw;
  background-color: ${(props) => props.theme.text};
  &:first-child {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    top: 0;
  }
  &:nth-child(4) {
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.background};
  }
  &:nth-child(5) {
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.background};
  }
`

export const SvgContainer = styled(motion.div)`
  position: absolute;
  display: inline-flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 140px;
  mix-blend-mode: difference;
  fill: ${(props) => props.theme.text};
`
