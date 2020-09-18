var myImage = document.getElementById("images");
var imageArray = ["home.jpg", "home1.jpg", "home2.jpg", "home3.jpg"];
var imageIndex = 0;
function slideImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;

  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}
setInterval(slideImage, 3000);
