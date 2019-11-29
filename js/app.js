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



// イラスト回転スライド
let carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "transform": "rotateY(" + currdeg + "deg)"
    });
}