///////////////////////////////////////////////////////////////
import { generateHeader } from "./header/header"
import { generateSubheader } from "./header/subheader-items"
import { navigateToSubPage } from "./header/navigation"

import { generateDescription } from "./description/description"
import { generateSubtitle } from "./subtitle/subtitle"

import { generateSlideshow, displaySlides } from "./slideshow/slideshow"

import { addUL, displayScrollbox } from "./scrollbox/scrollbox"


///////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title-container")
  generateHeader(title)

  const subheader = document.getElementById("navigation")
  generateSubheader(subheader)

  const subtitle = document.getElementById("subtitle")
  generateSubtitle(subtitle)

  const description = document.getElementById("description")
  generateDescription(description)

  const slideshow = document.getElementById("slideshow-container")
  generateSlideshow(slideshow)
  displaySlides()

  const scrollbox = document.getElementById("scrollbox")
  addUL(scrollbox)
  displayScrollbox()



  // "home" is the default page to show
  navigateToSubPage("home")

  const subheaderItemHome = document.getElementById("nav-button-home")
  subheaderItemHome.addEventListener("click", () => navigateToSubPage("home"))

  const subheaderItem1 = document.getElementById("nav-button-subpage-1")
  subheaderItem1.addEventListener("click", () => navigateToSubPage("subpage-1"))

  const subheaderItem2 = document.getElementById("nav-button-subpage-2")
  subheaderItem2.addEventListener("click", () => navigateToSubPage("subpage-2"))

  const subheaderItem3 = document.getElementById("nav-button-subpage-3")
  subheaderItem3.addEventListener("click", () => navigateToSubPage("subpage-3"))
});
