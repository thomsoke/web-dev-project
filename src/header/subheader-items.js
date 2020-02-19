///////////////////////////////////////////////////////////////
const home = {
  childText: "home",
  className: "active",
  href: "#home"
}
const subpage1 = {
  childText: "subpage 1",
  className: "",
  href: "http://watertowers.com/"
}
const subpage2 = {
  childText: "subpage 2",
  className: "",
  href: "https://www.tigers-world.com/"
}
const subpage3 = {
  childText: "subpage 3",
  className: "",
  href: "https://www.wikihow.com/Survive-a-Bank-Robbery"
}

///////////////////////////////////////////////////////////////
const METADATA_ITEMS = [ home, subpage1, subpage2, subpage3 ]

///////////////////////////////////////////////////////////////
const generateSubheaderItem = (metadata) => {
  const { childText, className, href } = metadata
  const subheaderItem = document.createElement("a")

  subheaderItem.innerHTML = childText
  subheaderItem.setAttribute("class", className)
  subheaderItem.setAttribute("href", href)

  return subheaderItem
}

///////////////////////////////////////////////////////////////
const fillSubheaderArray = (metadataItems) => {
  return metadataItems.map(item => generateSubheaderItem(item))
}

///////////////////////////////////////////////////////////////
const generateSubheader = (htmlElement) => {
  const subheader = document.createElement("div")
  subheader.id = "sub-header"
  const subheaderItems = fillSubheaderArray(METADATA_ITEMS)

  for(let i = 0; i < subheaderItems.length; i++)
  {
    htmlElement.appendChild(subheaderItems[i])
  }
  console.log("after html elem for loop", htmlElement)
}

///////////////////////////////////////////////////////////////
export { generateSubheader }
