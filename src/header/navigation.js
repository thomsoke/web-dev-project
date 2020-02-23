const navigateToSubPage = (subpageId) => {
  const pages = document.getElementsByClassName("subpage")

  // hides all subpages
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none"
  }

  // then sets one subpage visible
  const visiblePage = document.getElementById(subpageId)
  visiblePage.style.display = "block"

}

export { navigateToSubPage }
