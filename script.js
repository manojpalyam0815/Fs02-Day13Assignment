// set the interval (in milliseconds) for switching images and the timer countdown
const imageInterval = 5000;
const timerInterval = 1000;
const totalSeconds = 10;

// get the image gallery container
const gallery = document.querySelector('#imageGallery');

// get all the images inside the gallery
const images = gallery.querySelectorAll('img');

// set the current index to the first image
let currentIndex = 0;

// get the timer element
const timer = document.querySelector('#timer');

// set the initial time remaining
let timeRemaining = totalSeconds;

// create a function to switch images
// function switchImage() {
//   // hide the current image
//   images[currentIndex].style.display = 'none';

//   // increment the current index, wrapping around if necessary
//   currentIndex = (currentIndex + 1) % images.length;

//   // show the next image
//   images[currentIndex].style.display = 'block';
// }
function switchImage() {
  // hide all images except the current image and the next image to be displayed
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex || i === (currentIndex + 1) % images.length) {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }

  // increment the current index
  currentIndex = (currentIndex + 1) % images.length;
}

// create a function to update the timer
function updateTimer() {
  // update the time remaining
  timeRemaining--;

  // update the timer element
  timer.textContent = `Time remaining: ${timeRemaining}`;

  // if the timer reaches 0, switch to the next image and reset the timer
  if (timeRemaining === 0) {
    switchImage();
    timeRemaining = totalSeconds;
  }
}

// call the switchImage function every interval
setInterval(switchImage, imageInterval);

// call the updateTimer function every interval
setInterval(updateTimer, timerInterval);