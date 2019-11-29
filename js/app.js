// ハンバーガーメニュー
$(".js-hamburger").on("click", function() {
  $(this).toggleClass("on");
});


// スワイパー
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});