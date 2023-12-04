import React, { useRef, useEffect } from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'
import Menu from '../Menu'
import { isTouchDevice } from '@src/helpers'
import SmoothScroll from '../SmoothScroll'
import Scrollbar from 'smooth-scrollbar'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const HeaderPath = ['/about', '/not-found', '/work/design/danos']

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  const mainEl = useRef<HTMLElement>(null)
  const isHeader = HeaderPath.includes(pathname)

  const delay = isHeader && pathname.includes('/work/design')

  useEffect(() => {
    if (
      pathname.includes('/work/photography') &&
      mainEl.current &&
      !Scrollbar.has(mainEl.current) &&
      !isTouchDevice()
    ) {
      Scrollbar.init(mainEl.current, { damping: 0.04 })
      Scrollbar.detachStyle()
    }
    if (!pathname.includes('/work/photography') && mainEl.current && Scrollbar.has(mainEl.current)) {
      Scrollbar.destroy(mainEl.current)
    }
  }, [mainEl, pathname])

  return (
    <>
      {isHeader ? <Header pathname={pathname} delay={delay} /> : <Menu pathname={pathname} />}
      <main ref={mainEl}>
        {!(isTouchDevice() || pathname.includes('/work/photography')) ? (
          <SmoothScroll>{children}</SmoothScroll>
        ) : (
          <div>{children}</div>
        )}
      </main>
      <PageTransition />
    </>
  )
}

export default Layout
