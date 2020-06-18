$(document).ready(function () {
  $(".faq-list__item-slogan").each(function (i,slogan) {
    $(slogan).css({position: "static", display: "none"});
  });
  var questions = $(".faq-list__item");
  questions.each(function (i,question) {
    question.addEventListener("click", function () {
      statusWrapper = question.querySelector(".faq-list__item-heading-status svg");
      statusIndicator = question.querySelector(".faq-list__item-heading-status svg use");
      if(question.classList.contains("faq-list__item--active")){
        statusWrapper.setAttribute("height","20");
        statusIndicator.setAttribute("xlink:href", "img/sprite.svg#icon-plus");
      }
      else{
        statusWrapper.setAttribute("height","2");
        statusIndicator.setAttribute("xlink:href", "img/sprite.svg#icon-minus");
      }
      $(question).toggleClass("faq-list__item--active");
      $(question.querySelector(".faq-list__item-slogan")).slideToggle("200");
    })
  });
});
