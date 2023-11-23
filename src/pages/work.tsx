import React from 'react'
import { PageProps } from 'gatsby'
import { Layout, SEO } from '@src/components'
import WorkSection from '@src/components/WorkSection'

export const Head = () => {
  return <SEO title="Contact" />
}

const Work: React.FC<PageProps> = ({ location }: PageProps) => {
  return (
    <Layout pathname={location.pathname}>
      <WorkSection />
    </Layout>
  )
}

export default Work
