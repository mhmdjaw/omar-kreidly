/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description?: string
  lang?: string
  // meta?: Record<string, unknown>[];
  title: string
  children?: React.ReactNode
}

const SEO: React.FC<SeoProps> = ({
  description,
  lang,
  // meta,
  title,
  children
}: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    // <Helmet
    //   htmlAttributes={{
    //     lang: lang || "en",
    //   }}
    //   title={title}
    //   titleTemplate={`${site.siteMetadata.title} | %s`}
    //   meta={meta ? defaultMeta.concat(meta) : defaultMeta.concat()}
    // />
    <>
      <html lang={lang || 'en'} />
      <title>{`${site.siteMetadata.title} | ${title}`}</title>

      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </>
  )
}

export default SEO
