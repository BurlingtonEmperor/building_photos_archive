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

const memoricImagePath = "../memoric/photos/";
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
  "z16.jpg",
  "z17.jpg",
  "z18.jpg",
  "z19.jpg",
  "z20.jpg",
  "z21.JPG",
  "z22.jpg",
  "z23.jpg",
  "z24.jpg",
  "z25.jpg",
  "z26.jpg",
  "z27.jpg",
  "z28.jpg",
  "z29.jpg",
  "z30.jpg",
  "z31.jpg"
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
  "Graduation. '23",
  "Earthbound",
  "Hockey Game",
  "Soccer Game",
  "Zenithia",
  "One-Winged Angel",
  "Frosty the Snowman",
  "Independence",
  "Reggie Lewis",
  "Mills and Ponds",
  "Last Field Day",
  "Prom",
  "Me in the Middle.",
  "Twilight",
  "Rag Rock."
];

let imageZLoc = 0;
const imageChooser = document.getElementById("linus");
const imageName = document.getElementById("image-name");

function imageRotate () {
  switch (imageZLoc) {
    case 30:
      imageZLoc = 0;
      break;
    default:
      imageZLoc += 1;
      break;
  }

  changeImageSmoothly(imageChooser, memoricImagePath + memoricImagesList[imageZLoc]);
  imageName.innerText = memoricNamesList[imageZLoc];
}

setInterval(function () {
  imageRotate();
}, 6000);