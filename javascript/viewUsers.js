let search = document.querySelector("#search");
let users = JSON.parse(localStorage.getItem("users"));
let dispUsers = document.getElementById("disp-users");
let list = "";
let count = 0;

function displaying() {
    for (let user of users) {
        list += `<tr>
        <td> ${++count} </td>
        <td> ${user.uid} </td>
        <td> ${user.fname + " " + user.lname} </td>
        <td> ${user.email} </td>
        <td> ${user.mobilenumber} </td>
        <td> ${user.no_of_books_taken} </td>
        </tr>`;
    }
    dispUsers.innerHTML = list;
}

//Fetching User Data
function searching() {
    list = "";
    for (let user of users) {
        if (search.value == user.uid || search.value == user.email || search.value == user.fname) {
            list += `<tr> 
            <td>${++count}</td> 
            <td> ${++count} </td>
            <td> ${user.uid} </td>
            <td> ${user.fname + " " + user.lname} </td>
            <td> ${user.email} </td>
            <td> ${user.mobilenumber} </td>
            <td> ${user.no_of_books_taken} </td>
            </tr>`;
        }
    }
    dispUsers.innerHTML = list;
}