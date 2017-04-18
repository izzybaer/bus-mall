'use strict';

// I need a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.

// After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

// Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.

// In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
var counter = 0;

var allImages = [];

new PageImage ('star wars backpack', 'bag.jpg', 'bag-id', allImages);

new PageImage ('banana slicer', 'banana.jpg', 'banana-id', allImages);

new PageImage ('bathroom tablet holder', 'bathroom.jpg', 'bathroom-id', allImages);

new PageImage ('yellow boots', 'boots.jpg', 'boots-id', allImages);

new PageImage ('breakfast machine', 'breakfast.jpg', 'breakfast-id', allImages);

new PageImage ('meatball bubble gum', 'bubblegum.jpg', 'bubblegum-id', allImages);

new PageImage ('red chair', 'chair.jpg', 'chair-id', allImages);

new PageImage ('green monster', 'cthulhu.jpg', 'cthulhu-id', allImages);

new PageImage ('duck mouthed dog', 'dog-duck.jpg', 'dog-duck-id', allImages);

new PageImage ('canned dragon meat', 'dragon.jpg', 'dragon-id', allImages);

new PageImage ('spoon pen', 'pen.jpg', 'pen-id', allImages);

new PageImage ('pet dusting boots', 'pet-sweep.jpg', 'pet-sweet-id', allImages);

new PageImage ('pizza scissors', 'scissors.jpg', 'scissors-id', allImages);

new PageImage ('shark sleeping bag', 'shark.jpg', 'shark-id', allImages);

new PageImage ('baby dusting onesie', 'sweep.png', 'sweep-id', allImages);

new PageImage ('tauntaun sleeping bag', 'tauntaun.jpg', 'tauntaun-id', allImages);

new PageImage ('canned unicorn meat', 'unicorn.jpg', 'unicorn-id', allImages);

new PageImage ('octopus tentacle usb', 'usb.gif', 'usb-id', allImages);

new PageImage ('water can artwork', 'water-can.jpg', 'water-can-id', allImages);

new PageImage ('wine glass artwork', 'wine-glass.jpg', 'wine-glass-id', allImages);



function PageImage(name, filepath, id, allImages){
  this.name = name;
  this.filepath = 'img/' + filepath;
  this.timesShown = 0;
  this.timesClicked = 0;
  allImages.push(this);

}

// ImageGame.prototype.generateRandomImage = function (){
//   var randomImageSelection = Math.floor(Math.random()* (19 - 0 + 1)images[i]);
//   console.log(randomImageSelection);
// };

function generateRandomImage(){
  var randomImageSelection = Math.floor(Math.random()* (19 - 0 + 1));
  return allImages[randomImageSelection];
  // console.log(images[randomImageSelection]);
}

function imageAdd(){
  var newImage;
  var randomImage;
  for (var i = 0; i < 3; i++) {
    randomImage = generateRandomImage();
    var myImageBox = document.getElementById('images-selection');
    newImage = document.createElement('img');
    newImage.setAttribute('src', 'alt');
    newImage.src = randomImage.filepath;
    // newImage.alt = randomImage.
    myImageBox.appendChild(newImage);
  }

}



















imageAdd();

// generateRandomImage();
