///////////////////////////////////////////////////////////////
const generateScrollbox = (htmlElement) => {
  const scrollbox = document.createElement("p")
  scrollbox.id = "scrollbox"
  scrollbox.innerHTML = "this is some scrollbox stuff"
  htmlElement.appendChild(scrollbox)


  generateScrollboxHeader()
  generateScrollboxSubentry()
  generateScrollboxList()


}

///////////////////////////////////////////////////////////////
const generateScrollboxHeader = (htmlElement) => {
  const scollboxHeader = document.createElement("p")
  scollboxHeader.id = "scollboxHeader"
  scollboxHeader.innerHTML = "this is some scollboxHeader stuff"
  htmlElement.appendChild(scollboxHeader)
}

///////////////////////////////////////////////////////////////
const generateScrollboxSubentry = (htmlElement) => {
  const scrollboxSubentry = document.createElement("p")
  scrollboxSubentry.id = "scrollboxSubentry"
  scrollboxSubentry.innerHTML = "this is some scrollboxSubentry stuff"
  htmlElement.appendChild(scrollboxSubentry)
}

///////////////////////////////////////////////////////////////
const generateScrollboxList = (htmlElement) => {
  const upcomingShowsList = document.createElement("p")
  upcomingShowsList.id = "upcoming-shows-list"
  upcomingShowsList.innerHTML = "this is some upcoming-shows-list stuff"
  htmlElement.appendChild(upcomingShowsList)
}

///////////////////////////////////////////////////////////////
// export { generateScrollbox, generateScrollboxHeader, generateScrollboxSubentry, generateScrollboxList }
export { generateScrollbox }
