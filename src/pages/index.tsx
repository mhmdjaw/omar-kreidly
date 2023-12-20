import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'
import { Header, Hero, PageTransition, SEO } from '@src/components'
import { useGlobalContext } from '@src/context'

export const Head = () => {
  return <SEO title="Designer & Photographer" />
}

const Home: React.FC<PageProps> = ({ location }: PageProps) => {
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false)
  const { onCursor } = useGlobalContext()
  useEffect(
    () => onCursor('unhovered'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <>
      <header>
        <Header onAnimationComplete={() => setHeaderAnimationComplete(true)} pathname={location.pathname} />
      </header>
      <main>
        <Hero headerAnimationComplete={headerAnimationComplete} />
      </main>
      <PageTransition />
    </>
  )
}

export default Home
