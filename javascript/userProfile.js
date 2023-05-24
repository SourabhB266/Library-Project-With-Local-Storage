
let tbl = document.querySelector(".profile");
let data = "";

let container = document.querySelector(".container");
let uid1 = document.querySelector("#uid");
let psd = document.querySelector("#password");
let newpsd = document.querySelector("#password1");
let newcpsd = document.querySelector("#conpassword1");

let container1 = document.querySelector(".container1");
let uid2 = document.querySelector("#uid1")
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let gender = document.querySelector("#gender");
let dob = document.querySelector("#dob");
let mbnumber = document.querySelector("#mbnumber");
let email = document.querySelector("#email");

let phoneno = /^[6-9]\d{9}$/;
let emailPattern = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;
let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
container.style.display = "none";
container1.style.display = "none";

let users = JSON.parse(localStorage.getItem("users"));
let uid = sessionStorage.getItem("uid");
let password = sessionStorage.getItem("password");

function profile1() {
    console.log("hi");
    data = "";
    for (let user of users) {
        if (uid === user.uid) {
            data += ` <table>
        <tbody>
            <tr>
                <th>Reg No</th>
                <td>${user.uid}</td>
            </tr>
            <tr>
                <th>Full Name</th>
                <td>${user.fname + " " + user.lname}</td>
            </tr>
            <tr>
                <th>Email Adress</th>
                <td>${user.email}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>${user.gender}</td>
            </tr>
            <tr>
                <th>DOB</th>
                <td>${user.dob}</td>
            </tr>
            <tr>
                <th>Mobile Number</th>
                <td>${user.mobilenumber}</td>
            </tr>
            <tr>
            <th>No.of books taken</th>
            <td>${user.no_of_books_taken}</td>
            </tr>
          </tbody>
       </table>`;
            break;
        }
    }
    tbl.innerHTML = data;
}


//Updating user details


function update() {
    tbl.style.display = "none";
    container.style.display = "none";
    container1.style.display = "block";
}

document.getElementById("upd").addEventListener("click", (e) => {
    e.preventDefault();
    upd();
});


function upd() {
    if (validation1()) {
        for (let user of users) {
            user.uid = uid,
                user.fname = fname.value,
                user.lname = lname.value,
                user.gender = gender.value,
                user.dob = dob.value,
                user.mobilenumber = mbnumber.value,
                user.email = email.value;
            break;
        }

        localStorage.setItem("users", JSON.stringify(users));
        // alert("Profile is updated successfully!");
        document.querySelector(".msg").innerHTML = "Profile is updated successfully..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        location.reload();
    }


}


function validation1() {
    if (uid2.value != uid) {
        // alert("Invalid user Id");
        document.querySelector(".msg").innerHTML = "Invalid user Id..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    } else if (!mbnumber.value.match(phoneno)) {
        // alert("Please enter valid mobile number");
        document.querySelector(".msg").innerHTML = "Please enter valid mobile number..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    }
    else if (!email.value.match(emailPattern)) {
        // alert("Please enter valid email address");
        document.querySelector(".msg").innerHTML = "Please enter valid email address..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    }
    else {
        return true;
    }

}


//Changing user Password

function changePassword() {
    tbl.style.display = "none";
    container1.style.display = "none";
    container.style.display = "block";
}

document.getElementById("change").addEventListener("click", (e) => {
    e.preventDefault();
    change();
});


function change() {
    if (validation()) {
        for (let user of users) {
            user.uid = uid,
                user.password = newpsd.value,
                user.con_password = newcpsd.value;
            break;
        }

        localStorage.setItem("users", JSON.stringify(users));
        // alert("Password is changed successfully");
        document.querySelector(".msg").innerHTML = "Password is changed successfully..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        location.reload();
    }

}


function validation() {
    if ((uid1.value !== uid)) {
        // alert("Invalid user Id");
        document.querySelector(".msg").innerHTML = "Invalid user Id..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    } else if (!(psd.value == password)) {
        // alert("Please enter valid password");
        document.querySelector(".msg").innerHTML = "Please enter valid password..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    } else if ((psd.value).length < 8) {
        // alert("Password should be atleast 8 characters long");
        document.querySelector(".msg").innerHTML = "Password should be atleast 8 characters long..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    } else if (!psd.value.match(passPattern)) {
        // alert("password should be strong ");
        document.querySelector(".msg").innerHTML = "password should be strong..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    }
    else if (!(newpsd.value == newcpsd.value)) {
        // alert("Password should be matched");
        document.querySelector(".msg").innerHTML = "Password should be matched..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    } else if (newcpsd.value == password) {
        // alert("You should not use previous last 3 passwordsas new password");
        document.querySelector(".msg").innerHTML = "You should not use previous last 3 passwords as new password..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        return false;
    }
    else {
        return true;
    }
}


function cancel() {
    tbl.style.display = "block";
    container1.style.display = "none";
    container.style.display = "none";
}




