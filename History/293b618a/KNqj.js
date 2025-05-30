const toaster = document.querySelector(".toaster__wrapper");
const form = document.querySelector(".contact-form");

function submitForm(e) {
  e.preventDefault();
  showToaster();
  form.reset();
}

function showToaster() {
  setTimeout(() => {
    toaster.style.transform = "translateY(100%)";
  }, 2000);
  setTimeout(() => {
    toaster.style.opacity = "0";
    toaster.style.display = "none";
  }, 3000);
}

form.addEventListener("submit", submitForm);
