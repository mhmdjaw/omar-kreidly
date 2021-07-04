import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HeroContainer } from "./hero-styles";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <StaticImage
        imgClassName="hero-img"
        src="../../assets/images/omar-kreidly.jpg"
        alt="omar-kreidly-hero-image"
        layout="fullWidth"
        placeholder="none"
        loading="eager"
        formats={["auto", "webp", "avif"]}
      />
    </HeroContainer>
  );
};

export default Hero;
