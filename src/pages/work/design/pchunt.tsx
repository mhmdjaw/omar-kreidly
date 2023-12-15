import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, PCHuntProject, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="PC Hunt" />
}

const PCHunt: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <PCHuntProject />
    </Layout>
  )
}

export default PCHunt
