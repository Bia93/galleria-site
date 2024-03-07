let loginForm = document.getElementById("form-example");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email1");
  let password = document.getElementById("password1");

  if (email.value == "" || password.value == "") {
    alert("Put the info right");
  } else {
    alert("You got it right!");
    console.log(`email of ${email.value} and password ${password.value}`);

    email.value = "";
    password.value = "";
  }
});
