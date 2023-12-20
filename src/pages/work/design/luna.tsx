import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, LunaProject, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Luna" />
}

const Luna: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <LunaProject />
    </Layout>
  )
}

export default Luna
