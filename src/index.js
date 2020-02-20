///////////////////////////////////////////////////////////////
import { generateHeader } from './header/header'
import { generateSubheader } from './header/subheader-items'


import { generateDescription } from './description/description'
import { generateSubtitle } from './subtitle/subtitle'


import { showSlides } from './slideshow/slideshow'

///////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById("title-container")
  generateHeader(title)

  const subheader = document.getElementById("navigation")
  generateSubheader(subheader)


  const subtitle = document.getElementById("subtitle")
  generateSubtitle(subtitle)

  const description = document.getElementById("description")
  generateDescription(description)


});
