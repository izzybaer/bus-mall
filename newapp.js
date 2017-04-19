'use strict';

var totalClicks = 0;
// make a constructor for image
function PageImage(name, filepath){
  this.name = name;
  this.filepath = 'img/' + filepath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

var imagesOnSecondToLastScreen = [];
var imagesOnPreviousScreen = [];
var imagesOnScreen = [];


var allImages = [

  new PageImage ('star wars backpack', 'bag.jpg', 'bag-id'),
  new PageImage ('banana slicer', 'banana.jpg', 'banana-id'),
  new PageImage ('bathroom tablet holder', 'bathroom.jpg', 'bathroom-id'),
  new PageImage ('yellow boots', 'boots.jpg', 'boots-id'),
  new PageImage ('breakfast machine', 'breakfast.jpg', 'breakfast-id'),

  new PageImage ('meatball bubble gum', 'bubblegum.jpg', 'bubblegum-id'),
  new PageImage ('red chair', 'chair.jpg', 'chair-id'),
  new PageImage ('green monster', 'cthulhu.jpg', 'cthulhu-id'),
  new PageImage ('duck mouthed dog', 'dog-duck.jpg', 'dog-duck-id'),
  new PageImage ('canned dragon meat', 'dragon.jpg', 'dragon-id'),

  new PageImage ('spoon pen', 'pen.jpg', 'pen-id'),
  new PageImage ('pet dusting boots', 'pet-sweep.jpg', 'pet-sweet-id'),
  new PageImage ('pizza scissors', 'scissors.jpg', 'scissors-id'),
  new PageImage ('shark sleeping bag', 'shark.jpg', 'shark-id'),
  new PageImage ('baby dusting onesie', 'sweep.png', 'sweep-id'),

  new PageImage ('tauntaun sleeping bag', 'tauntaun.jpg', 'tauntaun-id'),
  new PageImage ('canned unicorn meat', 'unicorn.jpg', 'unicorn-id'),
  new PageImage ('octopus tentacle usb', 'usb.gif', 'usb-id'),
  new PageImage ('water can artwork', 'water-can.jpg', 'water-can-id'),
  new PageImage ('wine glass artwork', 'wine-glass.jpg', 'wine-glass-id'),
];

function getRandomImage(list) {
  return Math.floor(Math.random() * list.length);
}

// get three random images
function getThreeRandomImages() {
  allImages = allImages.concat(imagesOnSecondToLastScreen);
  imagesOnSecondToLastScreen = imagesOnPreviousScreen;
  imagesOnPreviousScreen = imagesOnScreen;
  imagesOnScreen = [];


// i am going to create a variable nextImage to keep track of the next image I take out of allImages
// then i am going to splice out an object to remove it from allImages
  var nextImage = allImages.splice(getRandomImage(allImages),1);
  // I am going to concat the array returned by the splice onto imagesOnScreen
  imagesOnScreen = imagesOnScreen.concat(nextImage);
  // I am going to repeat this process two more times to get two more imagesOnScreen
  nextImage = allImages.splice(getRandomImage(allImages),1);
  imagesOnScreen = imagesOnScreen.concat(nextImage);
  nextImage = allImages.splice(getRandomImage(allImages),1);
  imagesOnScreen = imagesOnScreen.concat(nextImage);

  return imagesOnScreen;
}

// assign variables to DOM ID's (id's that exist in html)
var leftImage = document.getElementById('image1');
var centerImage = document.getElementById('image2');
var rightImage = document.getElementById('image3');

// add event listeners to DOM ID's that invoke handleEvent when user clicks any image

leftImage.addEventListener('click', handleEvent);
centerImage.addEventListener('click', handleEvent);
rightImage.addEventListener('click', handleEvent);

// add event handle function and tracks clicks per image/total clicks



// Im going to call the function getThreeRandomImages
// Im going to render the filepaths from imagesOnScreen [0,1,2]

// I'm going to create a handle event that tracks totalClicks and timesClicked
function handleEvent(event) {
  totalClicks++;
  console.log(totalClicks);

  if(leftImage === event.target) {
    imagesOnScreen[0].timesClicked++;
  } else if (centerImage === event.target) {
    imagesOnScreen[1].timesClicked++;
  } else {
    imagesOnScreen[2].timesClicked++;
  }

  if (totalClicks === 25) {

    leftImage.removeEventListener('click', handleEvent);
    centerImage.removeEventListener('click', handleEvent);
    rightImage.removeEventListener('click', handleEvent);

    // createChart();
  }

  getThreeRandomImages();

  leftImage.src = imagesOnScreen[0].filepath;
  imagesOnScreen[0].timesShown++;
  centerImage.src = imagesOnScreen[1].filepath;
  imagesOnScreen[1].timesShown++;
  rightImage.src = imagesOnScreen[2].filepath;

}
// this function will run the code that goes through my images
getThreeRandomImages();
// then this code will render the images to the page

leftImage.src = imagesOnScreen[0].filepath;
imagesOnScreen[0].timesShown++;
centerImage.src = imagesOnScreen[1].filepath;
imagesOnScreen[1].timesShown++;
rightImage.src = imagesOnScreen[2].filepath;

function creatChart();
