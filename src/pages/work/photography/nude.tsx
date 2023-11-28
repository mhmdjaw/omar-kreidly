import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, NudeImages, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Nude" />
}

const Nude: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <NudeImages />
    </Layout>
  )
}

export default Nude
