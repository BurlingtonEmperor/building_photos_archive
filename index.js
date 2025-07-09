const img = document.querySelector('.image-wrapper img');

document.querySelectorAll(".viewer").forEach(viewer => {
  const wrapper = viewer.querySelector('.image-wrapper');
  const img = wrapper.querySelector('img');

  img.onload = () => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio < 1) {
      // Portrait
      viewer.style.aspectRatio = '3 / 4';
      img.style.objectFit = 'contain'; // Show entire image
    } else {
      // Landscape
      viewer.style.aspectRatio = '4 / 3';
      img.style.objectFit = 'cover'; // Fill space
    }
  };

  // 3D mouse/touch interaction
  function setTilt(x, y, bounds) {
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  viewer.addEventListener('mousemove', (e) => {
    const bounds = viewer.getBoundingClientRect();
    setTilt(e.clientX - bounds.left, e.clientY - bounds.top, bounds);
  });

  viewer.addEventListener('mouseleave', () => {
    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });

  viewer.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const bounds = viewer.getBoundingClientRect();
    setTilt(touch.clientX - bounds.left, touch.clientY - bounds.top, bounds);
  });

  viewer.addEventListener('touchend', () => {
    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

let isImageFinishedLoading = 1;

function changeImageSmoothly(imgEl, newSrc) {
  // Fade out
  imgEl.classList.add('fade-out');
  isImageFinishedLoading = 0;

  // After fade-out completes, change the src
  setTimeout(() => {
    imgEl.src = newSrc;

    // Wait for the image to load, then fade back in
    imgEl.onload = () => {
      imgEl.classList.remove('fade-out');
      isImageFinishedLoading = 1;
    };
  }, 400); // Match this to CSS transition time
}

let currentList = imgListPG;
let currentDesc = imgDescPG;
let posNum = 0;
let maxPos = imgListPG.length - 1;
let imgPrefix = imgPrefixPG;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const building = urlParams.get('building');

const imgName = document.getElementById("img-name");
const imgLocation = document.getElementById("img-location");

switch (building) {
  default:
  case "pineglen":
    break;
  case "msms":
    break;
  case "bhs":
    break;
  case "wildwood":
    break;
  case "francis":
    break;
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function findImgNameAndLocation (pauseNum) {
  let infoArr = currentDesc[pauseNum].split(",");
  return infoArr;
}

prevButton.onclick = function () {
  if (building === "" || building === null || building === undefined) {
    return false;
  }

  switch (isImageFinishedLoading) {
    case 0:
      return false;
  }

  switch (posNum) {
    case 0:
      return false;
    default:
      posNum--;
      let foundMe = findImgNameAndLocation(posNum);
      imgName.innerText = foundMe[0];
      imgLocation.innerText = foundMe[1];
      changeImageSmoothly(img, imgPrefix + currentList[posNum]);
      break;
  }
}

nextButton.onclick = function () {
  if (building === "" || building === null || building === undefined) {
    return false;
  }

  switch (isImageFinishedLoading) {
    case 0:
      return false;
  }

  switch (posNum) {
    case maxPos:
      return false;
    default:
      posNum++;
      let foundMe = findImgNameAndLocation(posNum);
      imgName.innerText = foundMe[0];
      imgLocation.innerText = foundMe[1];
      changeImageSmoothly(img, imgPrefix + currentList[posNum]);
      break;
  }
}

function initPG () {
  // Change the image smoothly
  changeImageSmoothly(img, imgPrefixPG + imgListPG[0]);
  let foundMe = findImgNameAndLocation(0);
  imgName.innerText = foundMe[0];
  imgLocation.innerText = foundMe[1];
}

initPG();