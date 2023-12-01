import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, PhotographySection, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Photography" />
}

const Photography: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <PhotographySection />
    </Layout>
  )
}

export default Photography
