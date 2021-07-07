const transition = {
  ease: [0.95, 0.03, 0.12, 0.97],
  duration: 1.6,
};

const loadingScreenVariants = {
  svgVariants: {
    hidden: {
      rotateY: 90,
    },
    visible: {
      rotateY: 450,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 3,
        delay: 0.5,
      },
    },
  },

  overlayVertical: {
    hidden: {
      height: 0,
    },
    visible: {
      height: "calc(var(--vh, 1vh) * 100)",
      transition,
    },
  },

  overlayHorizontal: {
    hidden: {
      width: 0,
    },
    visible: {
      width: "50vw",
      transition,
    },
  },
};

export default loadingScreenVariants;
