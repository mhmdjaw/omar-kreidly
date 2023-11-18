import React from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  return (
    <>
      <Header pathname={pathname} />
      <main>{children}</main>
      <PageTransition />
    </>
  )
}

export default Layout
