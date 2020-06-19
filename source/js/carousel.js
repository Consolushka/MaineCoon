function carouselObject(container) {
  var items = container.querySelectorAll(".carousel-list__item");
  var previousBtn = container.querySelector(".carousel-arrow--prev");
  var nextBtn = container.querySelector(".carousel-arrow--next");
  var current = Math.trunc(items.length / 2);
  previousBtn.addEventListener("click", function (e) {
    items[current].className = "carousel-list__item carousel-list__item--next";
    current -= 1;
    items[current].classList.add("carousel-list__item--current");
    items[current].classList.remove("examples__image-list-item--previous");
    nextBtn.removeAttribute("disabled");
    if (current === 0) {
      previousBtn.setAttribute("disabled", "");
    }
  });
  nextBtn.addEventListener("click", function (e) {
    items[current].className = "carousel-list__item carousel-list__item--previous";
    current += 1;
    items[current].classList.add("carousel-list__item--current");
    items[current].classList.remove("carousel-list__item--next");
    previousBtn.removeAttribute("disabled");
    if (current === items.length - 1) {
      nextBtn.setAttribute("disabled", "");
    }
  });
}

var carouselArr = document.querySelectorAll(".carousel-list");

carouselArr.forEach(function (carouselEll) {
  carouselObject(carouselEll);
});
