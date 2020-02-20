//

const image1 = {
  number: "1",
  source: "https://i.imgur.com/Z9bgW69.png",
  caption: "this is image number 1"
}
const image2 = {
  number: "2",
  source: "https://i.imgur.com/3kmYsBS.png",
  caption: "this is image number 2"
}
const image3 = {
  number: "3",
  source: "https://i.imgur.com/2YsnVsw.png",
  caption: "this is image number 2"
}




const METADATA_ITEMS = [ image1, image2, image3 ]



const generateSlideshowItem = (metadata) => {
  const { number, source, caption } = metadataItems
  // not this because only image art is img??
  // const slideshowItem = document.createElement("img")

  const slideshowItem = document.createElement("div")

  slideshowItem.setAttribute("img", source)
  slideshowItem.setAttribute("numbertext", number)
  slideshowItem.setAttribute("src", source)

  return slideshowItem;
}


const fillSlideshowArray = (metadataItems) => {
  return metadataItems.map(item => generateSlideshowItem(item))
}

//
// const fillSlideshowArray() {
//   for(let i = 0; i < metadataItems.length) {
//
// let img = metadataItems.[i]
//
//
//
//
//
//
//   }
// }




const generateSlideshow = (htmlElement) => {
  const newSlideshow = document.createElement("img")
  newSlideshow.id = "mySlides"
  const slideshowItems = fillSlideshowArray(METADATA_ITEMS)

  for(let i = 0; i < slideshowItems.length; i++)
  {
    htmlElement.appendChild(slideshowItems[i])
  }
  console.log("after html elem for loop", htmlElement)
}











//
//
// const viewSlideshow = (htmlElement) => {
//
//   generateSlideshow(htmlElement)
//
//
//   // image slideshow - automatic
//   var slideIndex = 0;
//
//   function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
//   }
//   showSlides();
//
// }




//
//
// const generateSlideshow = (htmlElement) => {
//   const slideshow = document.createElement("div")
//   slideshow.id = "slideshow"
//
//   htmlElement.appendChild(slideshow)
// }
//



///////////////////////////////////////////////////////////////
// this is the code that actually RUNS the slideshow
// image slideshow - automatic
// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }






export { generateSlideshow }
// export { viewSlideshow }
