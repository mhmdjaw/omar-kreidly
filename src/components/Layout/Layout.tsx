import React, { useEffect } from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'
import Menu from '../Menu'
import { isTouchDevice } from '@src/helpers'
import Lenis from '@studio-freight/lenis'
import { useGlobalContext } from '@src/context'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const designPath = '/work/design'

const HeaderPath = ['/about', '/not-found', `${designPath}/danos`, `${designPath}/pchunt`]

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  const isHeader = HeaderPath.includes(pathname)

  const { onCursor } = useGlobalContext()
  const delay = isHeader && pathname.includes('/work/design')

  useEffect(() => {
    if (!isTouchDevice()) {
      const lenis = new Lenis()

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
      return () => {
        lenis.destroy()
      }
    }
  }, [])

  useEffect(
    () => onCursor('unhovered'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  )

  return (
    <>
      {isHeader ? <Header pathname={pathname} delay={delay} /> : <Menu pathname={pathname} />}
      <main>{children}</main>
      <PageTransition />
    </>
  )
}

export default Layout
