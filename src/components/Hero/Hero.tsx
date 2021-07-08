import React from "react";
import { HeroContainer, HeroImage } from "./hero-styles";
import heroImage from "../../assets/images/omar-kreidly.jpg";

const Hero: React.FC = () => {
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
      <HeroImage src={heroImage} alt="omar-kreidly-hero-image" />
    </HeroContainer>
  );
};

export default Hero;
