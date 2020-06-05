var images = document.querySelectorAll(".carousel-list__item");
var previousBtn = document.querySelector(".carousel-arrow--prev");
var nextBtn = document.querySelector(".carousel-arrow--next");
var current = Math.trunc(images.length/2);
console.log(current);
previousBtn.addEventListener("click", function (e) {
  images[current].className = "carousel-list__item carousel-list__item--next";
  current -= 1;
  images[current].classList.add("carousel-list__item--current");
  images[current].classList.remove("examples__image-list-item--previous");
  nextBtn.removeAttribute("disabled");
  if(current===0){
    previousBtn.setAttribute("disabled", "");
  }
});
nextBtn.addEventListener("click", function (e) {
  images[current].className = "carousel-list__item carousel-list__item--previous";
  current += 1;
  images[current].classList.add("carousel-list__item--current");
  images[current].classList.remove("carousel-list__item--next");
  previousBtn.removeAttribute("disabled");
  if(current===images.length-1){
    nextBtn.setAttribute("disabled", "");
  }
});
