const toaster = document.querySelector(".toaster__wrapper");
const form = document.querySelector(".contact-form");
const buttonCloseToaster = document.querySelector(".toaster__button--close");

function submitForm(e) {
  e.preventDefault();
  showToaster();
  form.reset();
}

function closeToaster() {
  toaster.classList.remove("toaster--active");
}

function showToaster() {
  toaster.classList.add("toaster--active");

  setTimeout(closeToaster, 3100);
}

form.addEventListener("submit", submitForm);
buttonCloseToaster.addEventListener("click", closeToaster);
