import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, NotFound, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Not Found" />
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout pathname="/not-found">
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage
