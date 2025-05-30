const toaster = document.querySelector(".toaster__wrapper");
const buttonSubmit = document.querySelector(".submit-btn");

function submitForm(e) {
  e.preventDefault();

  showToaster();
}

function showToaster() {
  toaster.style.display = "grid";
  toaster.style.transform = "translateY(0%)";
  toaster.style.opacity = "100%";
}
