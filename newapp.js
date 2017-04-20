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


//
try {
  allImages = JSON.parse(localStorage.allImages);
  // console.log(allImages);
} catch(error){
  console.log('error retrieving local storage');
}







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

// add event listeners to DOM ID's that invoke handleImageClicks when user clicks any image

leftImage.addEventListener('click', handleImageClicks);
centerImage.addEventListener('click', handleImageClicks);
rightImage.addEventListener('click', handleImageClicks);

// add event handle function and tracks clicks per image/total clicks



// Im going to call the function getThreeRandomImages
// Im going to render the filepaths from imagesOnScreen [0,1,2]

// I'm going to create a handle event that tracks totalClicks and timesClicked
function handleImageClicks(event) {
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

    leftImage.removeEventListener('click', handleImageClicks);
    centerImage.removeEventListener('click', handleImageClicks);
    rightImage.removeEventListener('click', handleImageClicks);
// when I remove my event handlers, after 25 clicks, I am going to invoke my chart function
    allImages = allImages.concat(imagesOnScreen, imagesOnPreviousScreen, imagesOnSecondToLastScreen);

    createChart();
// in order to put all of my images in one array, I am going to concatenate them



    try {
      localStorage.allImages = JSON.stringify(allImages);
      // console.log(localStorage.allImages);
    } catch(error) {
      console.log('something went wrong', error);
    }


  }

  getThreeRandomImages();

  leftImage.src = imagesOnScreen[0].filepath;
  imagesOnScreen[0].timesShown++;
  console.log(imagesOnScreen[0].filepath);
  centerImage.src = imagesOnScreen[1].filepath;
  imagesOnScreen[1].timesShown++;
  console.log(imagesOnScreen[1].filepath);
  rightImage.src = imagesOnScreen[2].filepath;
  imagesOnScreen[2].timesShown++;
  console.log(imagesOnScreen[2].filepath);


}
// this function will run the code that goes through my images
getThreeRandomImages();
// then this code will render the images to the page

leftImage.src = imagesOnScreen[0].filepath;
imagesOnScreen[0].timesShown++;
centerImage.src = imagesOnScreen[1].filepath;
imagesOnScreen[1].timesShown++;
rightImage.src = imagesOnScreen[2].filepath;
imagesOnScreen[2].timesShown++;



// now I am going to write a function to create my chart
function createChart(){


  var canvas = document.getElementById('myChart');
  canvas.width = '500px';
  canvas.height = '500px';


  var ctx = canvas.getContext('2d');

  var data = {
    labels: [
      allImages[0].name,
      allImages[1].name,
      allImages[2].name,
      allImages[3].name,
      allImages[4].name,
      allImages[5].name,
      allImages[6].name,
      allImages[7].name,
      allImages[8].name,
      allImages[9].name,
      allImages[10].name,
      allImages[11].name,
      allImages[12].name,
      allImages[13].name,
      allImages[14].name,
      allImages[15].name,
      allImages[16].name,
      allImages[17].name,
      allImages[18].name,
      allImages[19].name,

    ],
    datasets: [

      {
        label: 'Times Shown',
        backgroundColor: '#17B77D',
        data: [
          allImages[0].timesShown,
          allImages[1].timesShown,
          allImages[2].timesShown,
          allImages[3].timesShown,
          allImages[4].timesShown,
          allImages[5].timesShown,
          allImages[6].timesShown,
          allImages[7].timesShown,
          allImages[8].timesShown,
          allImages[9].timesShown,
          allImages[10].timesShown,
          allImages[11].timesShown,
          allImages[12].timesShown,
          allImages[13].timesShown,
          allImages[14].timesShown,
          allImages[15].timesShown,
          allImages[16].timesShown,
          allImages[17].timesShown,
          allImages[18].timesShown,
          allImages[19].timesShown,
        ]
      },
      {
        label: 'Times Clicked',
        backgroundColor: '#B3FF66',
        data: [
          allImages[0].timesClicked,
          allImages[1].timesClicked,
          allImages[2].timesClicked,
          allImages[3].timesClicked,
          allImages[4].timesClicked,
          allImages[5].timesClicked,
          allImages[6].timesClicked,
          allImages[7].timesClicked,
          allImages[8].timesClicked,
          allImages[9].timesClicked,
          allImages[10].timesClicked,
          allImages[11].timesClicked,
          allImages[12].timesClicked,
          allImages[13].timesClicked,
          allImages[14].timesClicked,
          allImages[15].timesClicked,
          allImages[16].timesClicked,
          allImages[17].timesClicked,
          allImages[18].timesClicked,
          allImages[19].timesClicked,
        ]
      },
    ]
  };


  new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
  });
}
