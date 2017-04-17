'use strict';

// I need a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

// After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

// Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
var counter = 0;

var images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'wine-glass.jpg', 'water-can.jpg'];


function ImageGame(name){
  this.name = name;
  this.filepath = 'img/' + name;
  // this.timesShown = timesShown;
  // this.timesClicked = timesClicked;
  // this.id = 'product-list';

}

// ImageGame.prototype.generateRandomImage = function (){
//   var randomImageSelection = Math.floor(Math.random()* (19 - 0 + 1)images[i]);
//   console.log(randomImageSelection);
// };

function generateRandomImage(){
  var randomImageSelection = Math.floor(Math.random()* (19 - 0 + 1));
  images[randomImageSelection];
  // console.log(images[randomImageSelection]);
}
