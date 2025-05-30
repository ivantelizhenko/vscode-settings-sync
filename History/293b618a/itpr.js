const toaster = document.querySelector(".toaster__wrapper");
const buttonSubmit = document.querySelector(".submit-btn");
const form = document.querySelector(".contact-form");

function submitForm(e) {
  e.preventDefault();
  console.log("hey");
  // showToaster();
}

function showToaster() {
  toaster.style.display = "grid";
  toaster.style.transform = "translateY(0%)";
  toaster.style.opacity = "100%";
}

form.addEventListener("submit", submitForm);
