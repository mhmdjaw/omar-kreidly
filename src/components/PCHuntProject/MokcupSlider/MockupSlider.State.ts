import { animate } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'

interface Query {
  allFile: {
    edges: {
      node: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const useMockupSlider = (container: React.MutableRefObject<HTMLDivElement | null>) => {
  const [imagesLoading, setImagesLoading] = useState(4)
  const [loop, setLoop] = useState<NodeJS.Timeout | undefined>(undefined)
  const [slideIndex, setSlideIndex] = useState(1)

  const {
    allFile: { edges: images }
  } = useStaticQuery<Query>(graphql`
    query MyQuery {
      allFile(sort: { base: DESC }, filter: { relativeDirectory: { eq: "images/pchunt" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (imagesLoading !== 0) return
    setLoop(
      setTimeout(async () => {
        if (!container.current) return
        const previousSlide = slideIndex === 4 ? 1 : slideIndex + 1
        await animate([
          [`.wrapper_${5 - previousSlide}`, { x: '0%' }, { duration: 0 }],
          [`.image_${5 - previousSlide}`, { x: '0%' }, { duration: 0, at: '<' }]
        ])
        await animate([
          [`.wrapper_${5 - slideIndex}`, { x: '100%' }, { duration: 1 }],
          [`.image_${5 - slideIndex}`, { x: '-100%' }, { duration: 1, at: '<' }]
        ])
        setSlideIndex((slideIndex) => (slideIndex === 4 ? 1 : slideIndex + 1))
      }, 3500)
    )

    return () => clearTimeout(loop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, imagesLoading])

  return { images, slideIndex, setImagesLoading }
}

export default useMockupSlider
