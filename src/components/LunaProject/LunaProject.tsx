import React from 'react'
import { ImgContainer, MobileMockups, MockupSection, ProjectContainer, Sections } from './styles'
import { DanosLogo, LunaLogo } from '@src/assets/svg'
import ProjectHero from '../ProjectHero'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { g_variants } from '@src/helpers'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'
import { AboutText, Container, ProjectContent, SectionTitle, Wireframes } from '@src/styles/global-styles'
import Colors from '../Colors'
import Footer from '../Footer'
import useLunaProject from './LunaProject.State'
import Separator from '../Separator'

const imagesPath = '../../assets/images/luna'

const LunaProject: React.FC = () => {
  const { container, y, container2, y2 } = useLunaProject()

  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.sm })
  const isLaptop = useMediaQuery({ minWidth: theme.breakpoints.md })

  const i = isMobile ? 1 : 2

  return (
    <ProjectContainer>
      <ProjectHero logo={LunaLogo} shrink />
      <ProjectContent style={{ y }}>
        <ImgContainer ref={container}>
          <StaticImage src={`${imagesPath}/luna1.jpg`} alt="luna_1" />
        </ImgContainer>
        <MockupSection>
          <MobileMockups {...g_variants.mobileMockups}>
            <motion.div custom={i} variants={g_variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/luna2.png`} alt="luna_2" />
            </motion.div>
            <motion.div custom={i} variants={g_variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/luna3.png`} alt="luna_3" />
            </motion.div>
          </MobileMockups>
          <MobileMockups {...g_variants.mobileMockups}>
            <motion.div custom={i} variants={g_variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/luna4.png`} alt="luna_4" />
            </motion.div>
            <motion.div custom={i} variants={g_variants.mobile}>
              <StaticImage class="img" src={`${imagesPath}/luna5.png`} alt="luna_5" />
            </motion.div>
          </MobileMockups>
        </MockupSection>
        <ImgContainer ref={container2} style={{ y: isLaptop ? y2 : undefined }}>
          <StaticImage src={`${imagesPath}/luna6.jpg`} alt="luna_6" />
        </ImgContainer>
        <Sections>
          <Container $mt $mb $fullWidth>
            <SectionTitle {...g_variants.text}>About</SectionTitle>
            <AboutText {...g_variants.text}>
              A skateboarding clothing haven, where style meets the streets. Dive into a world of effortless cool and
              urban edge as you explore our curated collection of skateboarding apparel, from graphic tees that scream
              attitude to rugged denim that can handle your sickest tricks.
            </AboutText>
            <Separator />
            <SectionTitle {...g_variants.text}>Colors</SectionTitle>
            <Colors colors={['323232', 'FFFFFF', '6E6E6E', '068330']} />
            <Separator />
            <SectionTitle {...g_variants.text}>Wireframes</SectionTitle>
            <Wireframes className="first" {...g_variants.mobileMockups}>
              <motion.div custom={i} variants={g_variants.mobile}>
                <StaticImage class="img" src={`${imagesPath}/luna7.png`} alt="danos_7" />
              </motion.div>
              <motion.div custom={i} variants={g_variants.mobile}>
                <StaticImage class="img" src={`${imagesPath}/luna8.png`} alt="luna_8" />
              </motion.div>
            </Wireframes>
            <Wireframes {...g_variants.mobileMockups}>
              <motion.div custom={i} variants={g_variants.mobile}>
                <StaticImage class="img" src={`${imagesPath}/luna9.png`} alt="luna_9" />
              </motion.div>
              <motion.div custom={i} variants={g_variants.mobile}>
                <StaticImage class="img" src={`${imagesPath}/luna10.png`} alt="luna_10" />
              </motion.div>
            </Wireframes>
          </Container>
        </Sections>
      </ProjectContent>
      <Footer logo={DanosLogo} moveUp link="/work/design/danos" />
    </ProjectContainer>
  )
}

export default LunaProject
