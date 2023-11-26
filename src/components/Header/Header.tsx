import React from 'react'
import { HeaderNav, Logo, NavItem } from './styles'
import useHeader from './Header.State'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'
import { useGlobalContext } from '@src/context'
import { ease } from '@src/helpers'
import { Container, Flex } from '@src/styles/global-styles'
import { PrimaryLogo } from '@src/assets/svg'

interface HeaderProps {
  onAnimationComplete?: () => void
  pathname: string
}

const navItems = [
  {
    text: 'Work',
    link: '/work'
  },
  {
    text: 'About',
    link: '/about'
  }
]

const Header: React.FC<HeaderProps> = ({ onAnimationComplete, pathname }: HeaderProps) => {
  const { headerControls } = useHeader(onAnimationComplete)
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.sm })
  const { onCursor } = useGlobalContext()

  return (
    <HeaderNav
      initial={{ y: isMobile ? -40 : -72, opacity: 0 }}
      animate={headerControls}
      transition={{ duration: 1, ease: ease.slideIn }}
    >
      <Container fluid>
        <Flex spaceBetween noHeight>
          <Logo to="/" onMouseEnter={() => onCursor('hovered')} onMouseLeave={() => onCursor('unhovered')}>
            <PrimaryLogo />
          </Logo>
          <Flex>
            {navItems.map(({ link, text }, i) => (
              <NavItem
                key={i}
                to={link}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor('unhovered')}
                linkActive={pathname === link}
              >
                {text}
              </NavItem>
            ))}
          </Flex>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
