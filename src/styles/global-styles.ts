import styled, { css } from "styled-components";

interface ContainerProps {
  fluid?: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  ${(props) => props.theme.breakpoints.up("sm")} {
    padding: 0 65px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    max-width: 960px;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      /* padding: 0; */
      margin: 0;
      max-width: 100% !important;
    `}
`;

interface FlexProps {
  spaceBetween?: boolean;
  alignTop?: boolean;
  flexEnd?: boolean;
  noHeight?: boolean;
}

export const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
