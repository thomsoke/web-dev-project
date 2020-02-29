import { navigateToSubPage } from "./navigation"

///////////////////////////////////////////////////////////////
const home = {
  childText: "home",
  className: "active home",
  pageToShow: "home"
}
const subpage1 = {
  childText: "subpage 1",
  className: "",
  pageToShow: "subpage-1"
}
const subpage2 = {
  childText: "subpage 2",
  className: "",
  pageToShow: "subpage-2"
}
const subpage3 = {
  childText: "subpage 3",
  className: "",
  pageToShow: "subpage-3"
}

///////////////////////////////////////////////////////////////
const METADATA_ITEMS = [ home, subpage1, subpage2, subpage3 ]

///////////////////////////////////////////////////////////////
// const generateSubheaderItem = (metadata) => {
//   const { childText, className, href } = metadata
//   const subheaderItem = document.createElement("a")

//   subheaderItem.innerHTML = childText
//   subheaderItem.setAttribute("class", className)
//   subheaderItem.setAttribute("href", href)

//   return subheaderItem
// }

const generateSubheaderButtonElement = (metadata) => {
  const { childText, className, pageToShow } = metadata
  const subheaderItem = document.createElement("button")

  subheaderItem.innerHTML = childText
  subheaderItem.setAttribute("class", className)
  subheaderItem.setAttribute("id", `nav-button-${pageToShow}`)

  return subheaderItem
}

///////////////////////////////////////////////////////////////
const fillSubheaderArray = (metadataItems) => {
  // return metadataItems.map(item => generateSubheaderItem(item))
  const elements = metadataItems.map(item => generateSubheaderButtonElement(item))

  return elements
}

///////////////////////////////////////////////////////////////
const generateSubheader = (htmlElement) => {
  const subheader = document.createElement("div")
  subheader.id = "subheader"

  const subheaderItems = fillSubheaderArray(METADATA_ITEMS)

  for(let i = 0; i < subheaderItems.length; i++)
  {
    htmlElement.appendChild(subheaderItems[i])
  }
}

///////////////////////////////////////////////////////////////
export { generateSubheader }
