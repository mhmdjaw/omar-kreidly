import React, { useState } from "react";
import { Header, Hero, PageTransition, SEO } from "../components";
import { PageProps } from "gatsby";

const Home: React.FC<PageProps> = ({ location }: PageProps) => {
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  return (
    <>
      <SEO title="Photographer" />
      <header>
        <Header
          delayAnimation
          onAnimationComplete={() => setHeaderAnimationComplete(true)}
          pathname={location.pathname}
        />
      </header>
      <main>
        <Hero headerAnimationComplete={headerAnimationComplete} />
      </main>
      <PageTransition />
    </>
  );
};

export default Home;
