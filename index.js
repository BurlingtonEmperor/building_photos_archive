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

function changeImageSmoothly(imgEl, newSrc) {
  // Fade out
  imgEl.classList.add('fade-out');

  // After fade-out completes, change the src
  setTimeout(() => {
    imgEl.src = newSrc;

    // Wait for the image to load, then fade back in
    imgEl.onload = () => {
      imgEl.classList.remove('fade-out');
    };
  }, 400); // Match this to CSS transition time
}