///////////////////////////////////////////////////////////////
const generateScrollbox = (htmlElement) => {
  const scrollbox = document.createElement("p")
  scrollbox.id = "scrollbox"
  scrollbox.innerHTML = "this is some scrollbox stuff"
  htmlElement.appendChild(scrollbox)
}

///////////////////////////////////////////////////////////////
export { generateScrollbox }
