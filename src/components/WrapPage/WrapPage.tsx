import React, { useState } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyle from './baseline-styles'
import LoadingScreen from '../LoadingScreen'
import CustomCursor from '../CustomCursor'
import { AnimatePresence } from 'framer-motion'

interface WrapPageProps {
  children: React.ReactNode
}

const WrapPage: React.FC<WrapPageProps> = ({ children }: WrapPageProps) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      {/* {animationComplete &&  */}
      <CustomCursor />
      {/* }
      {animationComplete ? ( */}
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      {/* ) : (
        <LoadingScreen setAnimationComplete={setAnimationComplete} />
      )} */}
    </>
  )
}

export default WrapPage
