import { motion } from "framer-motion";
import styled from "styled-components";

export const Cover = styled(motion.div)`
  width: 100%;
  margin-top: calc(-7vw - 80px - 14vw - 100px);
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.background};
  height: calc(100vh + 180px + 14vw);
  z-index: 5999;
`;

export const WhiteStripe = styled(motion.div)`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${(props) => props.theme.text};
`;
