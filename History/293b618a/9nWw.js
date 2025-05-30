const toaster = document.querySelector(".toaster__wrapper");

function submitForm(e) {
  e.preventDefault();

  showToaster();
}

function showToaster() {
  toaster.style.display = "grid";
}
