const variants = {
  container: {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  },
  image: {
    hidden: {
      opacity: 0
    },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.75 } },
    out: { opacity: 0, transition: { duration: 1.5 } }
  }
}

export default variants
