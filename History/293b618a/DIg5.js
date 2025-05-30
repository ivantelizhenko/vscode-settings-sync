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
  toaster.style.transition = "opacity .4s";
  toaster.style.transform = "translateY(0%)";

  void toaster.offsetHeight;

  setTimeout(() => {
    toaster.style.transition = "opacity .4s";
    toaster.style.opacity = "0";
  }, 2000);

  setTimeout(closeToaster, 3000);
}

form.addEventListener("submit", submitForm);
buttonCloseToaster.addEventListener("click", closeToaster);
