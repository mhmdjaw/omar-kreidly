import React, { useState } from 'react'
import { MenuButton, MenuContainer, Nav, NavItem } from './styles'
import { Container, Flex } from '@src/styles/global-styles'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobalContext } from '@src/context'
import variants from './variants'
import { ease, isTouchDevice } from '@src/helpers'
import { navigate } from 'gatsby'

interface MenuProps {
  pathname: string
}

const navItems = [
  {
    text: 'home',
    link: '/'
  },
  {
    text: 'work',
    link: '/work'
  },
  {
    text: 'about',
    link: '/about'
  }
]

const Menu: React.FC<MenuProps> = ({ pathname }: MenuProps) => {
  const { onCursor } = useGlobalContext()
  const [toggleMenu, setToggleMenu] = useState(false)

  const isWorkPage = pathname === '/work'

  const hideBackButton = ['/work', '/work/photography', '/work/design'].includes(pathname)

  return (
    <>
      <MenuContainer $isWorkPage={isWorkPage}>
        <Container $fluid>
          <Flex $flexEnd={hideBackButton} $spaceBetween={!hideBackButton} $noHeight>
            {!hideBackButton && (
              <motion.a
                onClick={() => navigate(-1)}
                onHoverStart={() => onCursor('hovered')}
                onHoverEnd={() => onCursor('unhovered')}
              >
                <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Back
                </motion.h4>
              </motion.a>
            )}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
              <MenuButton
                variants={variants.button}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onHoverStart={() => onCursor('hidden')}
                onHoverEnd={() => onCursor('unhovered')}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {isTouchDevice() ? (
                  <>
                    <span>m</span>
                    <span>e</span>
                    <span>n</span>
                    <span>u</span>
                  </>
                ) : (
                  <>
                    <motion.span variants={variants.letter}>m</motion.span>
                    <motion.span variants={variants.letter}>e</motion.span>
                    <motion.span variants={variants.letter}>n</motion.span>
                    <motion.span variants={variants.letter}>u</motion.span>
                  </>
                )}
              </MenuButton>
            </motion.div>
          </Flex>
        </Container>
      </MenuContainer>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            animate={{ x: toggleMenu ? 0 : '-100%' }}
            transition={{ ease: ease.expoInOut, duration: 1.6 }}
          >
            <Flex $column>
              {navItems.map(({ link, text }, i) => (
                <NavItem
                  key={i}
                  to={link}
                  onMouseEnter={() => onCursor('hovered')}
                  onMouseLeave={() => onCursor('unhovered')}
                >
                  <div>{text}</div>
                </NavItem>
              ))}
            </Flex>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
