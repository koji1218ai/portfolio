$(function () {

  // ハンバーガーメニュー
  $('.hamburger_button').click(function () {
    $(this).toggleClass('active');
    $('.hamburger_bg').fadeToggle();
    $('nav').toggleClass('open');
  })
  $('.hamburger_bg').click(function () {
    $(this).fadeOut();
    $('.hamburger_button').removeClass('active');
    $('nav').removeClass('open');
  });

  // スムーススクロール
  $(".prf").on("click", function () {
    $("html,body").animate({ scrollTop: $('#prf').offset().top }, 650);
  });

  $(".skills").on("click", function () {
    $("html,body").animate({ scrollTop: $('.skill-ctn').offset().top }, 650);
  });

  $(".works").on("click", function () {
    $("html,body").animate({ scrollTop: $('#works').offset().top }, 650);
  });

  $(".top").on("click", function () {
    $("html,body").animate({ scrollTop: $('#top').offset().top }, 650);
  });

  // スワイパー
  var swiper = new Swiper('.swiper-container', {
    autoplay: { delay: 5000 },
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


  // Works パネル
  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
  }

  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));

  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


});