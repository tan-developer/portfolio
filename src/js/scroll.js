const scroll = (height) => {
  window.scrollTo({
    top: height,
    left: 0,
    behavior: 'smooth'
  })
}

export default scroll