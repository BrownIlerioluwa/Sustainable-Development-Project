let myImage = document.getElementById("images");
let imageArray = ["home.jpg", "home1.jpg", "home2.jpg", "home3.jpg"];
let imageIndex = 0;
function slideImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;

  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}
setInterval(slideImage, 3000);
