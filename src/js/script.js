function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

let mySwiper = new Swiper('.gallery-slider', {
  loop: true,
  navigation: {
    nextEl: '.gallery-nav__arrow-next',
    prevEl: '.gallery-nav__arrow-prev',
  }
})
$(document).ready(function () {
  $(".header-burger,.header-list__link").click(function () {
    $(".header-burger,.header-menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".main-text").toggleClass("visible")
  });
});