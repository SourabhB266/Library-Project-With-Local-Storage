let username = document.querySelector('#username');
let password = document.querySelector('#password');

document.addEventListener("submit", (e) => {
    e.preventDefault()
    login();
});

function login() {
    let admin = localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")) : [];
    let condition = false;

    for (let check of admin) {
        if (username.value === check.username && password.value === check.password) {
            condition = true;
            sessionStorage.setItem("username", username.value);
            sessionStorage.setItem("password", password.value);
            break;
        }
    }

    if (condition) {
        document.querySelector(".success").innerHTML = "Logged In Successfully..!";
        setTimeout(() => document.querySelector(".success").innerHTML = "", 2000);
        setTimeout(() => location.href = "/html/adminHome.html",2000);
    }
    else {

        document.querySelector("#e").innerHTML = "Please Enter Valid Password ..!";
        setTimeout(() => document.querySelector("#e").innerHTML = "", 2000);
        document.querySelector(".form-input").innerHTML = "";
        setTimeout(() => location.href = "/html/adminlogin.html", 2000);
        return false;
    }
}



