import theme from '@src/theme'
import { motion } from 'framer-motion'
import { Link, GatsbyLinkProps } from 'gatsby'
import styled, { IStyledComponent, css } from 'styled-components'

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: fixed;
  top: 40px;
  right: 0;
  left: 0;
  z-index: 99;
  ${theme.breakpoints.up('sm')} {
    top: 72px;
  }
`

export const Logo = styled(Link)`
  fill: ${(props) => props.theme.text};
  width: 150px;
  ${theme.breakpoints.down('sm')} {
    width: 85px;
  }
  transition: all 0.3s;
  &:hover {
    opacity: 0;
  }
`

interface NavItemProps extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  linkActive: boolean
}

export const NavItem = styled(Link)<NavItemProps>`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.text};
    transition: 0.4s ease;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }

  ${({ linkActive }) =>
    linkActive &&
    css`
      &::before {
        width: 100%;
      }
    `}

  ${theme.breakpoints.down('sm')} {
    font-size: 0.9rem;
  }

  &:last-child {
    margin-left: 60px;
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
    }
  }
` as IStyledComponent<'web', NavItemProps>
