const toaster = document.querySelector(".toaster__wrapper");
const buttonSubmit = document.querySelector(".submit-btn");
const form = document.querySelector(".contact-form");

function submitForm(e) {
  e.preventDefault();
  console.log("hey");
  showToaster();
}

function showToaster() {
  console.log("hey");
  toaster.style.display = "grid";
  toaster.style.opacity = "100%";
  toaster.style.transition = "transform .5s";

  setTimeout(() => {
    toaster.style.transform = "translateY(100%)";
  }, 2000);
  setTimeout(() => {
    toaster.style.opacity = "0";
    toaster.style.display = "none";
  }, 3000);
}

form.addEventListener("submit", submitForm);
