import React from 'react'
import { AboutSection, Layout, SEO } from '../components'
import { PageProps } from 'gatsby'

export const Head = () => {
  return <SEO title="About" />
}

const About: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <AboutSection></AboutSection>
    </Layout>
  )
}

export default About
