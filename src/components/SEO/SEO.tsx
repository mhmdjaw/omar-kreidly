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
          siteUrl
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
      <meta property="og:title" content={`${site.siteMetadata.title} | ${title}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content="en" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={`${site.siteMetadata.title} | ${title}`} />
      <meta name="twitter:description" content={metaDescription} />

      <meta name="google" content="notranslate" />

      {children}
    </>
  )
}

export default SEO
