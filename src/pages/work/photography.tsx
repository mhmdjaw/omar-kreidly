import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Photography" />
}

const About: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <></>
    </Layout>
  )
}

export default About
