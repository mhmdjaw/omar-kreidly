import React, { useState } from 'react'
import { MenuButton, MenuContainer, Nav, NavItem } from './styles'
import { Container, Flex } from '@src/styles/global-styles'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobalContext } from '@src/context'
import variants from './variants'
import { ease } from '@src/helpers'

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

  return (
    <>
      <MenuContainer isWorkPage={isWorkPage}>
        <Container fluid>
          <Flex flexEnd noHeight>
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
                <motion.span variants={variants.letter}>m</motion.span>
                <motion.span variants={variants.letter}>e</motion.span>
                <motion.span variants={variants.letter}>n</motion.span>
                <motion.span variants={variants.letter}>u</motion.span>
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
            <Flex column>
              {navItems.map(({ link, text }, i) => (
                <NavItem
                  key={i}
                  to={link}
                  onMouseEnter={() => onCursor('hovered')}
                  onMouseLeave={() => onCursor('unhovered')}
                >
                  {text}
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
