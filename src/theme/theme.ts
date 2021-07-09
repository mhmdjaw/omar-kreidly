type Breakpoint = "xs" | "sm" | "md" | "lg";

const theme = {
  background: "#000",
  text: "#fff",
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    up(breakpoint: Breakpoint): string {
      return `@media (min-width: ${this[breakpoint]}px)`;
    },
    down(breakpoint: Breakpoint): string {
      return `@media (max-width: ${this[breakpoint]}px)`;
    },
  },
};

export default theme;
