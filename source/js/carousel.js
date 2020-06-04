//Пришлось проделать много манипуляций чтобы можно было использовать require в js.
var converter = require("number-to-words");
//Этот модуль позволяет перевести цифру в ее текстовую форму https://www.npmjs.com/package/number-to-words
//Создал новый таск который оптимизирует+оптимизирует js и позволяет использовать require. В итоге он создает конечную версию файла js в папке js/build.
//И все бы ничего, но оказалось что конечный файл супер огромный можно было бы обойтись без него, а просто создать массив объектов из цифр, ключи который это их текстовый вид
//Но возможно это и хорошо, что я через это прошел
var images = document.querySelectorAll(".examples__image-list-item");
var previousBtn = document.querySelector(".carousel-arrow--prev");
var nextBtn = document.querySelector(".carousel-arrow--next");
var current = 1;
previousBtn.addEventListener("click", function (e) {
  images[current].className = "examples__image-list-item examples__image-list-item--previous";
  current -= 1;
  images[current].classList.add("examples__image-list-item--"+converter.toWordsOrdinal(current+1));
  images[current].classList.remove("examples__image-list-item--hidden");
  nextBtn.removeAttribute("disabled");
  if(current===0){
    previousBtn.setAttribute("disabled", "");
  }
});
nextBtn.addEventListener("click", function (e) {
  images[current].className = "examples__image-list-item examples__image-list-item--next";
  current += 1;
  images[current].classList.add("examples__image-list-item--"+converter.toWordsOrdinal(current+1));
  images[current].classList.remove("examples__image-list-item--hidden");
  previousBtn.removeAttribute("disabled");
  if(current===images.length-1){
    nextBtn.setAttribute("disabled", "");
  }
});
