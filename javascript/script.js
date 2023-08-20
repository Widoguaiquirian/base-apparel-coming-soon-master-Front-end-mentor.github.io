"use strict";
const inputBtn = document.querySelector(".wrapp-hero-block-form-btn");
const emailCheck = document.querySelector(".wrapp-hero-block-form-email");
const errorMessage = document.querySelector(".wrapp-hero-block-form-error");
const errorIcon = document.querySelector(".wrapp-hero-block-form-icon");

inputBtn.addEventListener("click", function () {
   if (emailCheck.checkValidity() == false) {
      emailCheck.setCustomValidity(" ");
      emailCheck.style.border = "1px solid red";
      errorMessage.style.visibility = "visible";
      errorIcon.style.visibility = "visible";
   }
});
