import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, DanosProject, SEO } from '@src/components'

export const Head = () => {
  return <SEO title="Danos" />
}

const Danos: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <DanosProject />
    </Layout>
  )
}

export default Danos
