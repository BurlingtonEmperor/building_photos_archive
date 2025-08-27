let isImageFinishedLoading = 1;

function loadBack (backSrc) {
  let newImg = new Image();

  newImg.onload = function () {
    body.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

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

function waitForElement(querySelector, timeout){
  return new Promise((resolve, reject)=>{
    var timer = false;
    if(document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(()=>{
      if(document.querySelectorAll(querySelector).length){
        observer.disconnect();
        if(timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true, 
      subtree: true
    });
    if(timeout) timer = setTimeout(()=>{
      observer.disconnect();
      reject();
    }, timeout);
  });
}

waitForElement("body", 3000).then(function () {
  loadBack("../photos/magicforest.jpg");
}).catch(() => {
  console.log("Error: did not load!");
});

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
  "The Beginning",
  "Go Further?",
  "Fairie Circle",
  "Ancient Ruins",
  "Angels",
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

// imageChooser.onload = function () {
//   setInterval(function () {
//     imageRotate();
//   }, 6000);
// }

const nextBtn = document.getElementById("next-btn");
nextBtn.onclick = function () {
  imageRotate();
}