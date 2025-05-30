"use strict";

// Toask component
const toast = document.querySelector(".toast-subscribe--success");

function showToast() {
  toast.style.display = "block";
  toast.style.animationName = "liftUp";
}

function closeToast() {
  toast.style.transition = "opacity .2s";
  toast.style.opacity = "0";

  setTimeout(() => {
    toast.style.display = "none";
    toast.style.opacity = "1";
  }, 1000);
}

// Show Dialog Menu
const dialogMenu = document.querySelector(".dialog-menu");
const openDialogMenuButton = document.querySelector("#open-dialog-menu");
const closeDialogMenuButton = document.querySelector("#close-dialog-menu");

openDialogMenuButton.addEventListener("click", () => {
  dialogMenu.showModal();
  dialogMenu.style.display = "grid";
});

closeDialogMenuButton.addEventListener("click", () => {
  dialogMenu.close();
  dialogMenu.style.display = "none";
});

// Show Dialog Subscribe
const dialogSubscribe = document.querySelector(".dialog-subscribe");
const openDialogSubscribeButton = document.querySelectorAll(
  ".open-dialog-subscribe"
);
const closeDialogSubscribeButton = document.querySelector(
  "#close-dialog-subscribe"
);

openDialogSubscribeButton.forEach((button) =>
  button.addEventListener("click", openSubscribeDialog)
);
closeDialogSubscribeButton.addEventListener("click", closeSubscribeDialog);

function openSubscribeDialog() {
  if (dialogMenu.open) {
    setTimeout(() => dialogMenu.close(), 0);
    dialogMenu.style.display = "none";
  }
  dialogSubscribe.showModal();
  dialogSubscribe.style.display = "grid";
}

function closeSubscribeDialog() {
  dialogSubscribe.close();
  dialogSubscribe.style.display = "none";
}

// Handle submit subcribe form
const subscribeForm = document.querySelector(".dialog-subscribe__form");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeSubscribeDialog();
  showToast();

  setTimeout(closeToast, 3000);
});
