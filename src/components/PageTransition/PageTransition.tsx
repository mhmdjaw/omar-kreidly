import React from "react";
import { ease } from "../../helpers";
import { Cover, WhiteStripe } from "./page-transition-styles";

const PageTransition: React.FC = () => {
  return (
    <Cover
      initial={{ y: "-100vh", skewY: "-7deg" }}
      exit={{ y: "calc(80px + 14vw + 100px)", skewY: "-7deg" }}
      transition={{ ease: ease.slideIn, duration: 1.5 }}
    >
      <WhiteStripe
        initial={{ y: "-60vh" }}
        exit={{ y: 0 }}
        transition={{ ease: ease.slideIn, duration: 1.5 }}
      />
    </Cover>
  );
};

export default PageTransition;
