const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const errorImg = document.querySelector(".error-img");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value === "" || !validateEmail(input.value)) {
    input.classList.add("error-msg");
    error.classList.add("display");
    errorImg.classList.add("display");

    setTimeout(function () {
      input.classList.remove("error-msg");
      error.classList.remove("display");
      errorImg.classList.remove("display");
    }, 3000);

    input.value = " ";
  } else {
    console.log(input.value);
    input.value = " ";
  }
});

function validateEmail(email) {
  const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValid.test(String(email).toLowerCase());
}
