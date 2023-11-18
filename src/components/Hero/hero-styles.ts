import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Flex } from "../../styles/global-styles";
import theme from "../../theme";

export const HeroContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
`;

const introImgOpacity = keyframes`
  from {
    opacity: 0;
    filter: grayscale(1) brightness(1);
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    filter: grayscale(1) brightness(1);
    transform: scale(1);
  }
`;

const introImgGrayscale = keyframes`
  from {
    filter: grayscale(1) brightness(1);
  }

  to {
    filter: grayscale(0) brightness(0.7);
  }
`;

export const HeroImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: brightness(0.7);
  animation: 1.5s ease-in-out 0s 1 ${introImgOpacity},
    3s linear 1.5s 1 ${introImgGrayscale};
`;

export const HeroContent = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > div:first-child {
    flex-basis: 50%;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 7.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  margin: 0;
  overflow: hidden;
  ${theme.breakpoints.down("lg")} {
    font-size: 5.3rem;
  }
  ${theme.breakpoints.down("md")} {
    font-size: 3rem;
  }
  ${theme.breakpoints.down("sm")} {
    font-size: 1.4rem;
  }
  & span {
    display: block;
  }
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ScrollIndicator = styled.div`
  position: relative;
  ${theme.breakpoints.down("md")} {
    transform: scale(0.6);
  }
  & span {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg) translate(150%, -150%);
    animation: ${scrollAnimation} 2s infinite;
    opacity: 0;
    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      top: 16px;
      animation-delay: 0.15ss;
    }
    &:nth-of-type(3) {
      top: 32px;
      animation-delay: 0.3s;
    }
  }
`;

export const ScrollIndicatorContainer = styled(Flex)`
  flex-basis: 50%;
`;

// const scrollAnimation = keyframes`
//   0% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   40% {
//     opacity: 1;
//   }
//   80% {
//     transform: translate(0, 20px);
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

// export const ScrollIndicator = styled.span`
//   position: relative;
//   width: 30px;
//   height: 50px;
//   border: 2px solid;
//   border-radius: 50px;
//   &::before {
//     position: absolute;
//     top: 8px;
//     left: 50%;
//     content: "";
//     width: 10px;
//     height: 10px;
//     margin-left: -5px;
//     background-color: currentColor;
//     border-radius: 100%;
//     animation: ${scrollAnimation} 2s infinite;
//   }
//   ${theme.breakpoints.down("md")} {
//     transform: scale(0.6);
//   }
// `;
