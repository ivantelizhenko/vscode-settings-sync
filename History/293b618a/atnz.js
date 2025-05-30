const toaster = document.querySelector(".toaster__wrapper");
const form = document.querySelector(".contact-form");

function submitForm(e) {
  e.preventDefault();
  showToaster();
  form.reset();
}

function showToaster() {
  toaster.classList.add("active");
}

form.addEventListener("submit", submitForm);
