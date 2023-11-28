import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, AutomotiveImages, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Automotive" />
}

const Automotive: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <AutomotiveImages />
    </Layout>
  )
}

export default Automotive
