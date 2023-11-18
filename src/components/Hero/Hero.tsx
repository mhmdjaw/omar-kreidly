import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroImage,
  ScrollIndicator,
  ScrollIndicatorContainer,
  Title,
} from "./hero-styles";
import heroImage from "../../assets/images/omar-kreidly.jpg";
import { ease } from "../../helpers";
import useHero from "./Hero.State";
import { motion } from "framer-motion";

interface HeroProps {
  headerAnimationComplete: boolean;
}

const Hero: React.FC<HeroProps> = ({ headerAnimationComplete }: HeroProps) => {
  const { showIndicator, titleControls } = useHero(headerAnimationComplete);

  return (
    <HeroContainer>
      {/* <StaticImage
        imgClassName="hero-img"
        src="../../assets/images/omar-kreidly.jpg"
        alt="omar-kreidly-hero-image"
        layout="fullWidth"
        placeholder="none"
        loading="eager"
        formats={["auto", "webp", "avif"]}
      /> */}
      {/* <HeroImage src={heroImage} alt="omar-kreidly-hero-image" /> */}
      <HeroContent column>
        <div />
        <Title>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            transition={{ ease: ease.slideIn, duration: 1 }}
            animate={titleControls}
          >
            omar kreidly
          </motion.span>
        </Title>
        <ScrollIndicatorContainer>
          {showIndicator && (
            // <ScrollIndicator />
            <ScrollIndicator>
              <span></span>
              <span></span>
              <span></span>
            </ScrollIndicator>
          )}
        </ScrollIndicatorContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
