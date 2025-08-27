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

const memoricImagePath = "../magicforest/photos/";
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
  "z14.jpg"
];
const memoricNamesList = [
  "The Beginning",
  "Go Further?",
  "Fairie Circle",
  "Ancient Ruins",
  "Angels",
  "City of the Ancients",
  "Treacle",
  "Metaphysical Reality",
  "Strange Truths",
  "Fairie Laea",
  "Pine Gate",
  "Witch's House",
  "Returning",
  "Welcome Home"
];

let imageZLoc = 0;
const imageChooser = document.getElementById("linus");
const imageName = document.getElementById("image-name");

function imageRotate () {
  switch (imageZLoc) {
    case 13:
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