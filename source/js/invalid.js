var form = document.querySelector(".prog-selection");
var input = document.querySelectorAll(".prog-selection__input");
var submitBtn = document.querySelector(".prog-selection__submit");

form.addEventListener("input", function (e) {
  var classes = e.target.classList;
  var invalid = !e.target.validity.valid;

  e.target.addEventListener("blur", function () {
    if (invalid) {
      classes.add("prog-selection__input--invalid");
    } else {
      classes.remove("prog-selection__input--invalid");
    }
  });
});

submitBtn.addEventListener("click", function (e) {

  for(var el of input) {
    if(!el.validity.valid || el.validity.valueMissing) {
      el.classList.add("prog-selection__input--invalid");
    }
  }

});
