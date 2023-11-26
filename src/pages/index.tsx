import React, { useState } from 'react'
import { PageProps } from 'gatsby'
import { Header, Hero, PageTransition, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Designer & Photographer" />
}

const Home: React.FC<PageProps> = ({ location }: PageProps) => {
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false)
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
