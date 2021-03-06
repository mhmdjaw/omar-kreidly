export const isBrowser = typeof window !== "undefined";

export const ease = {
  expoInOut: [0.95, 0.03, 0.12, 0.97],
  slideIn: [0.6, 0.05, -0.01, 0.9],
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
