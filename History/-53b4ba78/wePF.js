const email = document.querySelector("#email").value;
const button = document.querySelector("#sendEmail");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email);
});
