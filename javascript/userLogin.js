let uid = document.querySelector("#uid");
let password = document.querySelector("#password");

document.addEventListener("submit", (e) => {
    e.preventDefault()
    logIn();
});

function logIn() {
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    let condition = false;
    for (let check of users) {
        if (uid.value == check.uid && password.value == check.password) {
            sessionStorage.setItem("uid", uid.value);
            sessionStorage.setItem("password", password.value);
            condition = true;
            break;
        }
    }
    if (condition) {
        document.querySelector(".success").innerHTML = "Logged In Successfully..!";
        setTimeout(() => document.querySelector(".success").innerHTML = "", 2000);
        setTimeout(() => location.href = "/html/userHome.html", 2000);
    } else {
        document.querySelector("#e").innerHTML = "Invalid User ..!";
        setTimeout(() => document.querySelector("#e").innerHTML = "", 2000);
        document.querySelector(".form-input").innerHTML = "";
        setTimeout(() => location.href = "/html/userLogin.html", 2000);
    }
}

