import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const useHero = (headerAnimationComplete: boolean) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const titleControls = useAnimation();

  const sequence = async () => {
    await titleControls.start({ y: 0, opacity: 1 });
    setShowIndicator(true);
  };

  useEffect(
    () => {
      if (headerAnimationComplete) {
        sequence();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [headerAnimationComplete]
  );

  return { showIndicator, titleControls };
};

export default useHero;
