function changeImageSmoothly(imgEl, newSrc) {
  imgEl.classList.add('fade-out');
  isImageFinishedLoading = 0;

  setTimeout(() => {
    imgEl.src = newSrc;

    imgEl.onload = () => {
      imgEl.classList.remove('fade-out');
      isImageFinishedLoading = 1;
    };
  }, 400); 
}

const memoricImagePath = "/memoric/photos/";
const memoricImagesList = [
  "z1.jpg",
  "z2.jpg",
  "z3.jpg",
  "z4.jpg",
  "z5.jpg",
  "z6.jpg",
  "z7.jpg",
  "z8.jpg",
  "z9.jpg",
  "z10.jpg",
  "z11.jpg",
  "z12.jpg",
  "z13.jpg",
  "z14.jpg",
  "z15.jpg",
  "z16.jpg"
];
const memoricNamesList = [
  "EvilCorp",
  "Frutiger Aero",
  "Empire of the Sun",
  "Aerith",
  "Linus and Lucy",
  "Death Angel, USA",
  "XClusive",
  "Big Nate",
  "The Light is On",
  "New Balance",
  "Christmastime",
  "Dinner's Ready",
  "Tower of Death",
  "Beavis",
  "Butthead",
  "Graduation. '23"
];

let imageZLoc = 0;
function imageRotate () {
  
}