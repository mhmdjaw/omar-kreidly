import React, { Suspense, lazy } from 'react'
import { IphoneContainer, ProjectContainer } from './styles'
import ProjectHero from '../ProjectHero'
import { LunaLogo, PCHuntLogo } from '@src/assets/svg'
import { AboutText, Container, ProjectContent, SectionTitle } from '@src/styles/global-styles'
import Footer from '../Footer'
import usePCHuntProject from './PCHunt.State'
import Loading from '../Loading'
import MokcupSlider from './MokcupSlider'
import BrowserFrame from './BrowserFrame'
import { g_variants } from '@src/helpers'
import Separator from '../Separator'
import Colors from '../Colors'

// lazy import scene to not interrupt hero animation
const IphoneScene = lazy(() => import('./IphoneScene'))

const PCHuntProject: React.FC = () => {
  const { container, y, modelLoaded } = usePCHuntProject()

  return (
    <ProjectContainer>
      <ProjectHero logo={PCHuntLogo} thickStroke />
      <ProjectContent style={{ y }}>
        <MokcupSlider container={container} />
        <IphoneContainer>
          {modelLoaded ? (
            <Suspense fallback={<Loading contained />}>
              <IphoneScene />
            </Suspense>
          ) : (
            <Loading contained />
          )}
        </IphoneContainer>
        <Container $mt $mb $fullWidth>
          <BrowserFrame />
          <SectionTitle {...g_variants.text}>About</SectionTitle>
          <AboutText {...g_variants.text}>
            A one-stop destination for all things PC building and beyond. Dive into the world of cutting-edge technology
            as we guide you through the art of crafting the ultimate personalized computer rig.
          </AboutText>
          <Separator />
          <SectionTitle {...g_variants.text}>Colors</SectionTitle>
          <Colors colors={['009688', 'FFFFFF', 'FFEA00', 'D2D2D2']} />
        </Container>
      </ProjectContent>
      <Footer logo={LunaLogo} shrink link="/work/design/luna" />
    </ProjectContainer>
  )
}

export default PCHuntProject
