const email = document.querySelector("#email").value;
const button = document.querySelector("#sendEmail");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email);
});

function sendEmail() {
  let params = {
    from_name: "telizenkoo@gmail.com",
    email,
  };

  emailjs.send("service_oshxk2r", "template_u0day42");
}
