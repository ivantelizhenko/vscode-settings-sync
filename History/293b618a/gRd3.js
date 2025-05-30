const toaster = document.querySelector(".toaster__wrapper");
const form = document.querySelector(".contact-form");
const buttonCloseToaster = document.querySelector(".toaster__button--close");

function submitForm(e) {
  e.preventDefault();
  showToaster();
  form.reset();
}

function closeToaster() {
  toaster.classList.remove("active");
}

function showToaster() {
  toaster.classList.add("active");
  toaster.style.transition = "";
  toaster.style.transform = "translateY(0%)";

  setTimeout(() => {
    toaster.style.transform = "translateY(100%)";
  }, 2000);

  setTimeout(closeToaster, 3000);
}

form.addEventListener("submit", submitForm);
buttonCloseToaster.addEventListener("click", closeToaster);
