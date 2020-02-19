///////////////////////////////////////////////////////////////
import { generateHeader } from './header/header'
import { generateSubheader } from './header/subheader-items'

///////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById("title-container")
  generateHeader(title)

  const subheader = document.getElementById("navigation")
  generateSubheader(subheader)
});
