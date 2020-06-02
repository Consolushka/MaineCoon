var images = document.querySelectorAll(".examples__image-list-item");
var previousBtn = document.querySelector(".carousel-arrow--prev");
var nextBtn = document.querySelector(".carousel-arrow--next");
console.log(images);
var current = 1;
previousBtn.addEventListener("click", function (e) {
  images[current].className = "examples__image-list-item examples__image-list-item--previous";
  current -= 1;
  switch (current) {
    case 0:
      images[current].classList.remove("examples__image-list-item--first-hidden");
      images[current].classList.add("examples__image-list-item--first");
      previousBtn.setAttribute("disabled", "");
      nextBtn.removeAttribute("disabled");
      break;
    case 1:
      images[current].classList.add("examples__image-list-item--second");
      nextBtn.removeAttribute("disabled");
      break;
    default:
      nextBtn.removeAttribute("disabled");
  }
});
nextBtn.addEventListener("click", function (e) {
  images[current].className = "examples__image-list-item examples__image-list-item--next";
  current += 1;
  switch (current) {
    case 1:
      images[current].classList.add("examples__image-list-item--second");
      previousBtn.removeAttribute("disabled");
      break;
    case 2:
      images[current].classList.remove("examples__image-list-item--third-hidden");
      images[current].classList.add("examples__image-list-item--third");
      nextBtn.setAttribute("disabled", "");
      previousBtn.removeAttribute("disabled");
      break;
    default:
      previousBtn.removeAttribute("disabled");
  }
});
