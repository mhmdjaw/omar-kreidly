import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, DocumentaryImages, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Documentary" />
}

const Documentary: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <DocumentaryImages />
    </Layout>
  )
}

export default Documentary
