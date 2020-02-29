///////////////////////////////////////////////////////////////
import { showsBaseMap } from "../data/showDataDaddy"

///////////////////////////////////////////////////////////////
const upcomingShowsArray = Object.values(showsBaseMap)

///////////////////////////////////////////////////////////////
const makeElement = (elementType, attributeType, attributeName) => {
  const element = document.createElement(elementType)
  element.setAttribute(attributeType, attributeName)

  return element
}

///////////////////////////////////////////////////////////////
const extractShowInfo = (upcomingShowsArray) => {
  let newArray = []

  for (let i = 0; i < upcomingShowsArray.length; i++) {
    let newString = `${upcomingShowsArray[i].date} - ${upcomingShowsArray[i].band} at ${upcomingShowsArray[i].venue}`
    newArray[i] = newString
  }

  return newArray
}

///////////////////////////////////////////////////////////////
const makeUL = () => {
  let array = extractShowInfo(upcomingShowsArray)
  const upcomingShowsList = makeElement("ul", "class", "upcoming-shows-list")

  for (let i = 0; i < array.length; i++) {
    const newListItem = makeElement("li", "class", "upcoming-show")
    newListItem.appendChild(document.createTextNode(array[i]))
    upcomingShowsList.appendChild(newListItem)
  }

  return upcomingShowsList
}

///////////////////////////////////////////////////////////////
const addUL = (htmlElement) => {
  htmlElement.appendChild(makeUL())
}

///////////////////////////////////////////////////////////////
const displayScrollbox = () => {

  const upcomingShowsList = document.getElementsByClassName("upcoming-shows-list")

}

///////////////////////////////////////////////////////////////
export { addUL, displayScrollbox }
