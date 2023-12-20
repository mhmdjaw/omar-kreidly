import React from 'react'
import { ImgContainer, MobileMockups, MockupSection, ProjectContainer } from './styles'
import { DanosLogo, PCHuntLogo } from '@src/assets/svg'
import ProjectHero from '../ProjectHero'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { g_variants } from '@src/helpers'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'
import { AboutText, Container, ProjectContent, SectionTitle, Wireframes } from '@src/styles/global-styles'
import variants from './variants'
import Colors from '../Colors'
import Footer from '../Footer'
import useDanosProject from './DanosProject.State'
import Separator from '../Separator'

const imagesPath = '../../assets/images/danos'

const DanosProject: React.FC = () => {
  const { container, y, container2, y2 } = useDanosProject()

  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.sm })

  const i = isMobile ? 1 : 2

  return (
    <ProjectContainer>
      <ProjectHero logo={DanosLogo} />
      <ProjectContent style={{ y }}>
        <ImgContainer ref={container}>
          <StaticImage src={`${imagesPath}/danos1.png`} alt="danos_1" />
        </ImgContainer>
        <MockupSection>
          <MobileMockups {...variants.mobileMockups}>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos2.png`} alt="danos_2" />
            </motion.div>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos3.png`} alt="danos_3" />
            </motion.div>
          </MobileMockups>
          <MobileMockups {...variants.mobileMockups}>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos4.png`} alt="danos_4" />
            </motion.div>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos5.png`} alt="danos_5" />
            </motion.div>
          </MobileMockups>
          <motion.div ref={container2} style={{ y: y2 }} className="bottom">
            <motion.div
              variants={variants.handsMobile}
              initial="hidden"
              whileInView="inView"
              viewport={{ once: true, amount: 0 }}
            >
              <StaticImage src={`${imagesPath}/danos6.png`} alt="danos_6" />
            </motion.div>
          </motion.div>
        </MockupSection>
        <Container $mt $mb $fullWidth>
          <SectionTitle {...g_variants.text}>About</SectionTitle>
          <AboutText {...g_variants.text}>
            <strong>Danos</strong> is a revolutionary app that brings the best of two culinary worlds together in one
            place. Whether you&#8217;re craving a fine dining experience at a restaurant or the comfort of your favorite
            cuisine delivered to your doorstep, Danos has you covered.
          </AboutText>
          <Separator />
          <SectionTitle {...g_variants.text}>Colors</SectionTitle>
          <Colors colors={['2998FF', 'FFFFFF', 'FF8A00', '343434', '8D8D8D']} />
          <Separator />
          <SectionTitle {...g_variants.text}>Wireframes</SectionTitle>
          <Wireframes className="first" {...variants.mobileMockups}>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos7.png`} alt="danos_7" />
            </motion.div>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos8.png`} alt="danos_8" />
            </motion.div>
          </Wireframes>
          <Wireframes {...variants.mobileMockups}>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos9.png`} alt="danos_9" />
            </motion.div>
            <motion.div custom={i} variants={variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/danos10.png`} alt="danos_10" />
            </motion.div>
          </Wireframes>
        </Container>
      </ProjectContent>
      <Footer logo={PCHuntLogo} link="/work/design/pchunt" />
    </ProjectContainer>
  )
}

export default DanosProject
