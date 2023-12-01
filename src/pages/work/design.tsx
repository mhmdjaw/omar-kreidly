import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, DesignSection, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Design" />
}

const Design: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <DesignSection />
    </Layout>
  )
}

export default Design
