function carouselObject(container) {
  if (container.classList.contains("examples__image-list") && document.documentElement.clientWidth >= 768) {
    carouselTabletExamples(container);
    return;
  }
  var items = container.querySelectorAll(".carousel-list__item");
  var previousBtn = container.querySelector(".carousel-arrow--prev");
  var nextBtn = container.querySelector(".carousel-arrow--next");
  var current = Math.trunc(items.length / 2);
  previousBtn.addEventListener("click", function (e) {
    items[current].className = "carousel-list__item carousel-list__item--next";
    current -= 1;
    items[current].classList.add("carousel-list__item--current");
    items[current].classList.remove("carousel-list__item--previous");
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

function carouselTabletExamples (container){
  var items = container.querySelectorAll(".carousel-list__item");
  var previousBtn = container.querySelector(".carousel-arrow--prev");
  var nextBtn = container.querySelector(".carousel-arrow--next");
  var current = Math.trunc(items.length / 2);
  var z=0;
  for (var i = 0; i < items.length; i++) {
    if(i<=current){
      z++;
    }
    else{
      z--;
    }
    items[i].setAttribute("style","z-index:"+z);
  }

  previousBtn.addEventListener("click", function (e) {
    items[current].className = "carousel-list__item carousel-list__item--next";
    current -= 1;
    z=0;
    for (var i = 0; i < items.length; i++) {
      if(i<=current){
        z++;
      }
      else{
        z--;
      }
      items[i].setAttribute("style","z-index:"+z);
    }
    items[current].classList.add("carousel-list__item--current");
    items[current].classList.remove("carousel-list__item--previous");
    nextBtn.removeAttribute("disabled");
    if (current === 0) {
      previousBtn.setAttribute("disabled", "");
    }
  });


  nextBtn.addEventListener("click", function (e) {
    items[current].className = "carousel-list__item carousel-list__item--previous";
    current += 1;
    z=0;
    for (var i = 0; i < items.length; i++) {
      if(i<=current){
        z++;
      }
      else{
        z--;
      }
      items[i].setAttribute("style","z-index:"+z);
    }
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
