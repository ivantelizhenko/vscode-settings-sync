const email = document.querySelector("#email").value;
const button = document.querySelector("#sendEmail");

button.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
});

function sendEmail() {
  let params = {
    email: document.querySelector("#email").value,
  };

  emailjs.send("service_oshxk2r", "template_u0day42", params).then(function () {
    console.log("success");
  });
}
