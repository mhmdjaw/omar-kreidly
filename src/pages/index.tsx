import React, { useState } from "react";
import { Header, Hero, SEO } from "../components";

const Home: React.FC = () => {
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  return (
    <>
      <SEO title="Photographer" />
      <Header
        delayAnimation
        onAnimationComplete={() => setHeaderAnimationComplete(true)}
      />
      <Hero headerAnimationComplete={headerAnimationComplete} />
    </>
  );
};

export default Home;
