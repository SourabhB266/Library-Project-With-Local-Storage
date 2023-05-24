let uid = document.querySelector("#uid");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let mobilenumber = document.querySelector("#mbnumber");
let email = document.querySelector("#email");
let dob = document.querySelector("#dob");
let gender = document.querySelector("#gender");
let password = document.querySelector("#password");
let con_password = document.querySelector("#conpassword");

let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

let nbk = 0;

let phoneno = /^[6-9]\d{9}$/;
let emailPattern = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


document.addEventListener("submit", (e) => {
  e.preventDefault()
  signUp();
});

function signUp() {
  if (signUpValidation()) {
    users.push({
      uid: uid.value,
      fname: fname.value,
      lname: lname.value,
      mobilenumber: mobilenumber.value,
      email: email.value,
      dob: dob.value,
      gender: gender.value,
      password: password.value,
      con_password: con_password.value,
      no_of_books_taken: nbk,
    });
    localStorage.setItem("users", JSON.stringify(users));
    document.querySelector(".error-message").innerHTML = "You've signed up successfully..!";
    setTimeout(() => document.querySelector(".error-message").innerHTML = "", 2000);
    location.href = ("/html/userlogin.html");

  }
}

function signUpValidation() {
  if (!mobilenumber.value.match(phoneno)) {
    document.querySelector(".error-message").innerHTML = "Please enter valid mobile number..!";
    setTimeout(() => document.querySelector(".error-message").innerHTML = "", 2000);
    return false;
  }
  else if (!email.value.match(emailPattern)) {
    document.querySelector(".error-message").innerHTML = "Please enter valid Email Address..!";
    setTimeout(() => document.querySelector(".error-message").innerHTML = "", 2000);
    return false;
  } else if ((password.value).length < 8) {
    document.querySelector(".error-message").innerHTML = "Password should be atleast 8 characters long..!";
    setTimeout(() => document.querySelector(".error-message").innerHTML = "", 2000);
    return false;
  } else if (!password.value.match(passPattern)) {
    document.querySelector(".error-message").innerHTML = "Please Should be Strong..!";
    setTimeout(() => document.querySelector(".error-message").innerHTML = "", 2000);
    return false;
  } else if (con_password.value.match(password.value)) {
    for (let data of users) {
      if (uid.value === data.uid ) {
        document.querySelector("#error").innerHTML = "User Id Already Exist Please LogIn..!";
        setTimeout(() => document.querySelector("#error").innerHTML = "", 2000);
        setTimeout(() => location.href = "/html/userSignup.html", 2000);
        return false;
      }
    }
  }
  else {
    document.querySelector("#e").innerHTML = "Password should me matched..!";
    setTimeout(() => document.querySelector("#e").innerHTML = "", 2000);
    setTimeout(() => location.href = "/html/userSignup.html", 2000);
    return false;
  }
  return true;
}
