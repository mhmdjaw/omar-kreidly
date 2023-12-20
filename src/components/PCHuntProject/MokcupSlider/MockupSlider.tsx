import React from 'react'
import { MockupContainer } from './styles'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import useMockupSlider from './MockupSlider.State'

const imagesPath = '../../../assets/images/pchunt'

interface MockupSliderProps {
  container: React.MutableRefObject<HTMLDivElement | null>
}

const MockupSlider: React.FC<MockupSliderProps> = ({ container }: MockupSliderProps) => {
  const { images, slideIndex, setImagesLoading } = useMockupSlider(container)

  return (
    <MockupContainer ref={container}>
      <StaticImage src={`${imagesPath}/pchunt1.png`} alt="pc_hunt_1" />
      {images.map(({ node }, i) => (
        <div key={i} className={`slide wrapper_${i + 1}`} style={{ zIndex: ((slideIndex + i - 1) % 4) + 1 }}>
          <GatsbyImage
            className={`image_${i + 1}`}
            image={node.childImageSharp.gatsbyImageData}
            alt={`pc_hunt_${i + 1}`}
            onLoad={() => setImagesLoading((s) => s - 1)}
          />
        </div>
      ))}
    </MockupContainer>
  )
}

export default MockupSlider
