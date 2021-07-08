import React from "react";
import { Header, Hero, SEO } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Photographer" />
      <Header
        delayAnimation
        onAnimationComplete={() => console.log("success")}
      />
      <Hero />
    </>
  );
};

export default Home;
