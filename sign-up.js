let loginForm2 = document.getElementById("form-example2");
loginForm2.addEventListener("submit", function (e) {
  e.preventDefault();
  let name2 = document.getElementById("text2");
  let email2 = document.getElementById("email2");
  let password2 = document.getElementById("password");
  let confirm2 = document.getElementById("psw-repeat");

  if (
    name2.value == "" ||
    email2.value == "" ||
    password2.value == "" ||
    confirm2.value == ""
  ) {
    alert("Try again.");
  } else {
    alert("You got them right");
    console.log(
      `name of ${name2.value} , email ${email2.value}, password ${password2.value} and confirm ${confirm2.value}`
    );

    name2.value = "";
    email2.value = "";
    password2.value = "";
    confirm2.value = "";
  }
});
