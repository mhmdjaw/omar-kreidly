import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, PortraitImages, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Portrait" />
}

const Portrait: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <PortraitImages />
    </Layout>
  )
}

export default Portrait
