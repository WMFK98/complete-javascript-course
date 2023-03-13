const tapContainer = document.querySelector(".tapContainer");
const taps = document.querySelectorAll(".tap");
const secs = document.querySelectorAll(".section");

// Write your JavaScript here.
secs.forEach((s, i) => {
  s.classList.add(`section-${i}`);
  if (i !== 0) s.classList.add("hide");
});

tapContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tap")) return;
  taps.forEach((t) => t.classList.remove("tap-active"));
  e.target.classList.add("tap-active");

  const numSec = e.target.dataset.set;

  secs.forEach((s) => s.classList.add("hide"));
  document.querySelector(`.section-${numSec}`).classList.remove("hide");
});
