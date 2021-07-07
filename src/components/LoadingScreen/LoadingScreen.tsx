import { useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SecondaryLogo } from "../../assets/svg";
import {
  Overlay,
  LoadingContainer,
  SvgContainer,
} from "./loading-screen-styles";
import loadingScreenVariants from "./loading-screen-variants";

const LoadingScreen: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const { svgVariants, overlayVertical, overlayHorizontal } =
    loadingScreenVariants;
  const overlay1Controls = useAnimation();
  const overlay2Controls = useAnimation();
  const overlay3Controls = useAnimation();

  const sequence = async () => {
    await new Promise<void>((resolve) => {
      setTimeout(async () => {
        await overlay1Controls.start("visible");
        resolve();
      }, 1500);
    });

    await overlay2Controls.start("visible");
    await overlay3Controls.start("visible");
    setAnimationComplete(true);
  };

  useEffect(
    () => {
      sequence();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return !animationComplete ? (
    <LoadingContainer>
      <Overlay
        variants={overlayVertical}
        initial="hidden"
        animate={overlay1Controls}
      />
      <Overlay
        variants={overlayHorizontal}
        initial="hidden"
        animate={overlay2Controls}
      />
      <SvgContainer variants={svgVariants} initial="hidden" animate="visible">
        <SecondaryLogo />
      </SvgContainer>
      <Overlay
        variants={overlayHorizontal}
        initial="hidden"
        animate={overlay2Controls}
      />
      <Overlay
        variants={overlayVertical}
        initial="hidden"
        animate={overlay3Controls}
      />
    </LoadingContainer>
  ) : null;
};

export default LoadingScreen;
