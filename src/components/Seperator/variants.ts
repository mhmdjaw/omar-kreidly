const variants = {
  line: {
    hidden: {
      scale: 0
    },
    inView: {
      scale: 1,
      transition: {
        delay: 0.25,
        ease: 'circOut',
        duration: 0.5
      }
    }
  },
  logoContainer: {
    hidden: {
      scale: 0
    },
    inView: {
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  },
  logo1: {
    hidden: { x: 0, y: 0 },
    inView: { x: '-20%', y: '-20%', transition: { duration: 0.35, delay: 0.8 } }
  },
  logo2: {
    hidden: { x: 0, y: 0 },
    inView: { x: '20%', y: '20%', transition: { duration: 0.35, delay: 0.8 } }
  }
}

export default variants
