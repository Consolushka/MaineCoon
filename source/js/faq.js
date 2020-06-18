var questions = document.querySelectorAll(".faq-list__item");
var statusWrapper,statusIndicator;
questions.forEach(function (question) {
  question.addEventListener("click",function () {
    statusWrapper = question.querySelector(".faq-list__item-heading-status svg");
    statusIndicator = question.querySelector(".faq-list__item-heading-status svg use");
    if(question.classList.contains("faq-list__item--active")){
      question.classList.remove("faq-list__item--active");
      statusWrapper.setAttribute("height","20");
      statusIndicator.setAttribute("xlink:href", "img/sprite.svg#icon-plus");
    }
    else{
      statusWrapper.setAttribute("height","2");
      statusIndicator.setAttribute("xlink:href", "img/sprite.svg#icon-minus");
      question.classList.add("faq-list__item--active");
    }

  });
});
