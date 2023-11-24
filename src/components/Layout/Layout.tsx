import React from 'react'
import Header from '../Header'
import PageTransition from '../PageTransition'
import Menu from '../Menu'

interface LayoutProps {
  children: React.ReactNode
  pathname: string
}

const HeaderPath = ['/about']
const MenuPath = ['/work', '/work/photography']

const Layout: React.FC<LayoutProps> = ({ children, pathname }: LayoutProps) => {
  const isHeader = HeaderPath.includes(pathname)
  const isMenu = MenuPath.includes(pathname)

  return (
    <>
      {isHeader && <Header pathname={pathname} />}
      {isMenu && <Menu pathname={pathname} />}
      <main>{children}</main>
      <PageTransition />
    </>
  )
}

export default Layout
