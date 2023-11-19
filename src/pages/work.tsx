import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Contact" />
}

const Work: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <></>
    </Layout>
  )
}

export default Work
