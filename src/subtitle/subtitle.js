///////////////////////////////////////////////////////////////
const generateSubtitle = (htmlElement) => {
  const pageSubtitle = document.createElement("h1")
  pageSubtitle.id = "main-header"
  pageSubtitle.innerHTML = "welcome to the show tracker site"
  htmlElement.appendChild(pageSubtitle)
}

///////////////////////////////////////////////////////////////
export { generateSubtitle }
