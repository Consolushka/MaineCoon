$(document).ready(function () {
  var faqButtons = $(".faq-list__item-heading");
  faqButtons.on("click", function () {
    var faqItem = $(this).parent();
    var faqContent = faqItem.find(".faq-list__item-slogan");
    var faqStatus = faqItem.find(".faq-list__item-heading-status");
    faqContent.slideToggle(400);
    faqStatus.toggleClass("faq-list__item-heading-status--active");
  });
});
