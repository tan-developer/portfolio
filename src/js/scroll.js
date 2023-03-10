const scroll = (title) => {
  var height;
  switch (title) {
    case "Home":
      height = 0;
      break;
    
    case "About":
      height = window.innerHeight* (2/2)
      break;

    case "Project":
      height = window.innerHeight*(3/2)
      break;

    case "Skills":
      height = window.innerHeight*4/2
      break;

    case "Contact":
      height = window.innerHeight*5/2
      break;



    default:
      break;
  }
  window.scrollTo({
    top: height,
    left: 0,
    behavior: 'smooth'
  })
}

export default scroll