var range = document.querySelector('#slider__bar')
var before = document.querySelector('.slider__item--before');

range.addEventListener("input", function () {
  before.style.width = 100 - range.value + "%";
})
