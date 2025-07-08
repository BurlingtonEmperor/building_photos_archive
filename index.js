const viewer = document.querySelector('.viewer');
const wrapper = viewer.querySelector('.image-wrapper');

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