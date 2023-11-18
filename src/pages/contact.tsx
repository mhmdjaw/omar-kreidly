import React from 'react'
import { Layout, SEO } from '../components'
import { PageProps } from 'gatsby'

export const Head = () => {
  return <SEO title="Contact" />
}

const Contact: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <></>
    </Layout>
  )
}

export default Contact
