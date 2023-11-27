import React, { useEffect, useRef } from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'
import Menu from '../Menu'
import Scrollbar from 'smooth-scrollbar'
import { isTouchDevice } from '@src/helpers'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const HeaderPath = ['/about', '/not-found']
// const MenuPath = ['/work', '/work/photography']

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  const mainEl = useRef<HTMLElement>(null)
  const isHeader = HeaderPath.includes(pathname)
  // const isMenu = MenuPath.includes(pathname)

  useEffect(() => {
    if (mainEl.current && !Scrollbar.has(mainEl.current) && !isTouchDevice()) {
      Scrollbar.init(mainEl.current, { damping: 0.04 })
      Scrollbar.detachStyle()
    }
  }, [mainEl])

  return (
    <>
      {isHeader ? <Header pathname={pathname} /> : <Menu pathname={pathname} />}
      {/* {isMenu && <Menu pathname={pathname} />} */}
      <main data-scrollbar ref={mainEl}>
        {/* smooth-scrollbar won't work unless we wrap children with a useless 'div' */}
        <div>{children}</div>
      </main>
      <PageTransition />
    </>
  )
}

export default Layout
