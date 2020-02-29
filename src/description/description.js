///////////////////////////////////////////////////////////////
// *todo* add to constants
const generateDescription = (htmlElement) => {
  const homepageDescription = document.createElement("p")
  homepageDescription.id = "hompage-description"

  homepageDescription.innerHTML = "What the fuck did you just  \
  fucking say about me, you little bitch? I'll have you know I  \
  graduated top of my class in the Navy Seals, and I've been  \
  involved in numerous secret raids on Al-Quaeda, and I have over"



  // homepageDescription.innerHTML = "Welcome to the show  \
  // tracker website! You can use this site to keep track  \
  // of all the shows you have coming up so you never miss  \
  // a single one. Also... there are puppies."


  htmlElement.appendChild(homepageDescription)
}

///////////////////////////////////////////////////////////////
export { generateDescription }
