import React, { useRef } from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'
import Menu from '../Menu'
import { isTouchDevice } from '@src/helpers'
import SmoothScroll from '../SmoothScroll'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const HeaderPath = ['/about', '/not-found', '/work/design/danos']

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  const mainEl = useRef<HTMLElement>(null)
  const isHeader = HeaderPath.includes(pathname)

  const delay = isHeader && pathname.includes('/work/design')

  return (
    <>
      {isHeader ? <Header pathname={pathname} delay={delay} /> : <Menu pathname={pathname} />}
      <main ref={mainEl}>{!isTouchDevice() ? <SmoothScroll>{children}</SmoothScroll> : children}</main>
      <PageTransition />
    </>
  )
}

export default Layout
