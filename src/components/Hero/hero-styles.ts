import styled, { keyframes } from "styled-components";

const introImgOpacity = keyframes`
  from {
    opacity: 0;
    filter: grayscale(1);
  }

  to {
    filter: grayscale(1);
    opacity: 1;
  }
`;

const introImgGrayscale = keyframes`
  from {
    filter: grayscale(1);
  }

  to {
    filter: grayscale(0);
  }
`;

export const HeroContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  /* overflow-y: hidden; */
  /* .hero-img {
    animation: 1.5s ease-in-out 0s 1 ${introImgOpacity},
      3s ease-in-out 1.5s 1 ${introImgGrayscale};
  } */
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  animation: 1.5s ease-in-out 0s 1 ${introImgOpacity},
    3s ease-in-out 1.5s 1 ${introImgGrayscale};
`;
