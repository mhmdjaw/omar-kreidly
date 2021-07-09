import React, { useState } from "react";
import { Header, Hero, SEO } from "../components";
import { PageProps } from "gatsby";

const Home: React.FC<PageProps> = ({ location }: PageProps) => {
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  return (
    <>
      <SEO title="Photographer" />
      <Header
        delayAnimation
        onAnimationComplete={() => setHeaderAnimationComplete(true)}
        pathname={location.pathname}
      />
      <Hero headerAnimationComplete={headerAnimationComplete} />
    </>
  );
};

export default Home;
