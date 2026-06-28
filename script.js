function moveRandomEl(elm) {
  elm.style.position = "fixed";
  elm.style.top = Math.floor(Math.random() * 85 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 85 + 5) + "%";
  elm.style.zIndex = "999";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// En móvil (touch) también escapa
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveRandomEl(e.target);
});
