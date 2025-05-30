const toaster = document.querySelector(".toaster__wrapper");
const form = document.querySelector(".contact-form");

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
  setTimeout(closeToaster, 2000);
}

form.addEventListener("submit", submitForm);
