import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PhotographySectionContainer = motion(styled(Flex)`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
  align-items: stretch;
  & > div {
    position: relative;
    flex-grow: 1;
    flex-basis: 0;
    align-items: stretch;
    & > div {
      flex-grow: 1;
      flex-basis: 0;
      position: relative;
      justify-content: center;
      overflow: hidden;
      & img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        /* filter: opacity(55%); */
        opacity: 0.55;
        transition: opacity 0.3s;
      }
      & .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.17);
        transition: opacity 0.3s;
        & h1 {
          font-weight: 400;
          font-size: 2rem;
          text-transform: uppercase;
          ${theme.breakpoints.down('lg')} {
            font-size: 1.5rem;
          }
          ${theme.breakpoints.down('sm')} {
            font-size: 1.3rem;
          }
        }
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          & img {
            opacity: 1;
          }
          & .overlay {
            opacity: 0;
          }
        }
      }

      @media (hover: none) {
        &:active {
          & img {
            opacity: 1;
          }
          & .overlay {
            opacity: 0;
          }
        }
      }

      & .cover {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        background-color: ${(props) => props.theme.background};
      }
    }
  }

  // change object positions of images to keep them in frame
  & > div:nth-of-type(1) {
    & > div:nth-of-type(2) {
      & img {
        object-position: center bottom;
      }
    }
  }
  & > div:nth-of-type(2) {
    & > div:nth-of-type(1) {
      & img {
        object-position: 45% 0%;
      }
    }
    & > div:nth-of-type(2) {
      & img {
        object-position: center bottom;
      }
    }
  }
`)
