///////////////////////////////////////////////////////////////
// *todo* add to constants
const generateDescription = (htmlElement) => {
  const homepageDescription = document.createElement("p")
  homepageDescription.id = "hompage-description"
  homepageDescription.innerHTML = "this is a test description from description.js"
  htmlElement.appendChild(homepageDescription)
}

///////////////////////////////////////////////////////////////
export { generateDescription }
