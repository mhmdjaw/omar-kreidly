import "styled-components";

type Breakpoint = "xs" | "sm" | "md" | "lg";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      up: (breakpoint: Breakpoint) => string;
      down: (Breakpoint: Breakpoint) => string;
    };
    // left: string;
    // top: string;
  }
}
