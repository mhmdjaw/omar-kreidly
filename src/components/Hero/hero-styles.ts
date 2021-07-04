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
  overflow-y: hidden;
  .hero-img {
    animation: 1.5s ease-in-out 0s 1 ${introImgOpacity},
      3s ease-in-out 1.5s 1 ${introImgGrayscale};
  }
`;
