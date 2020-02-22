///////////////////////////////////////////////////////////////
const imageItem1 = {
  number: "1",
  source: "https://i.imgur.com/Z9bgW69.png",
  caption: "this is image number 1"
}
const imageItem2 = {
  number: "2",
  source: "https://i.imgur.com/3kmYsBS.png",
  caption: "this is image number 2"
}
const imageItem3 = {
  number: "3",
  source: "https://i.imgur.com/2YsnVsw.png",
  caption: "this is image number 2"
}

///////////////////////////////////////////////////////////////
const METADATA_ITEMS = [ imageItem1, imageItem2, imageItem3 ]

///////////////////////////////////////////////////////////////
const makeElement = (elementType, attributeType, attributeName) => {
  const element = document.createElement(elementType)
  element.setAttribute(attributeType, attributeName)

  return element
}

///////////////////////////////////////////////////////////////
const generateSlideshowItemElement = (metadataItem) => {
  const { number, source, caption } = metadataItem

  const parentDiv = makeElement("div", "class", "my-slides")
  const childSlideNumberDiv = makeElement("div", "class", "numbertext")
  const childImage = makeElement("img", "src", source)
  const childCaptionDiv = makeElement("div", "text", caption)

  parentDiv.appendChild(childSlideNumberDiv)
  parentDiv.appendChild(childImage)
  parentDiv.appendChild(childCaptionDiv)

  return parentDiv
}

///////////////////////////////////////////////////////////////
const createSlideshowArray = (metadataItems) => {
  return metadataItems.map(item => generateSlideshowItemElement(item))
}

///////////////////////////////////////////////////////////////
const generateSlideshow = (htmlElement) => {
  const slideshowArray = createSlideshowArray(METADATA_ITEMS)

  for(let i = 0; i < slideshowArray.length; i++)
  {
    htmlElement.appendChild(slideshowArray[i])
  }
  console.log("after html elem for loop", htmlElement)
}

///////////////////////////////////////////////////////////////
let slideIndex = 0

function displaySlides() {
  const slides = document.getElementsByClassName("my-slides")

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slideIndex++

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "block"
  setTimeout(displaySlides, 3000)
}

///////////////////////////////////////////////////////////////
export { generateSlideshow, displaySlides }
