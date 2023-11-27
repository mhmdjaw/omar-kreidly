import theme from '@src/theme'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

interface MenuContainerProps {
  isWorkPage: boolean
}

export const MenuContainer = styled.div<MenuContainerProps>`
  height: 0;
  width: 100%;
  position: fixed;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  ${theme.breakpoints.down('sm')} {
    top: 50px;
  }
  ${({ isWorkPage }) =>
    isWorkPage &&
    css`
      mix-blend-mode: difference;
    `}
  & a {
    padding: 10px 0;
    transition: all 0.3s;
    &:hover {
      opacity: 0;
    }
  }
  & h4 {
    margin: 0;
    ${theme.breakpoints.down('sm')} {
      font-size: 0.7rem;
    }
  }
`

export const MenuButton = styled(motion.button)`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border: none;
  border-radius: 50%;
  padding: 10px;
  min-height: 90px;
  width: 90px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
  overflow: hidden;
  box-shadow:
    0 0 2.2px rgba(0, 0, 0, 0.034),
    0 0 5.3px rgba(0, 0, 0, 0.048),
    0 0 10px rgba(0, 0, 0, 0.06),
    0 0 17.9px rgba(0, 0, 0, 0.072),
    0 0 33.4px rgba(0, 0, 0, 0.086),
    0 0 80px rgba(0, 0, 0, 0.12);
  ${theme.breakpoints.down('sm')} {
    padding: 10px;
    min-height: 60px;
    width: 60px;
    font-size: 0.6rem;
  }
  & span {
    display: inline-block;
  }
`

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 59;
  & > div {
    height: 100%;
    justify-content: center;
  }
`
export const NavItem = styled(Link)`
  margin: calc(var(--vh, 1vh) * 5) 0;
  & > div {
    position: relative;
    font-size: 3.5rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.45s cubic-bezier(0.57, -0.3, 0.41, 1.29);
    ${theme.breakpoints.down('lg')} {
      font-size: 3rem;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 2.5rem;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 2rem;
    }
    &::after {
      content: '';
      position: absolute;
      aspect-ratio: 1 / 1;
      height: 35%;
      border-radius: 50%;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.text};
      opacity: 0;
      transition: 0.45s cubic-bezier(0.57, -0.3, 0.41, 1.29);
    }
  }

  &:hover {
    & > div {
      transform: translateX(70px);
      ${theme.breakpoints.down('md')} {
        transform: translateX(50px);
      }
      &::after {
        transform: translateX(-70px) translateY(-50%);
        opacity: 1;
        ${theme.breakpoints.down('md')} {
          transform: translateX(-50px) translateY(-50%);
        }
      }
    }
  }
`
