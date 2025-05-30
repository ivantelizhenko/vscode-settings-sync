const email = document.querySelector("#email").value;
const button = document.querySelector("#sendEmail");

button.addEventListener("click", () => {
  console.log(email);
});
