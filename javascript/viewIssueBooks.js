let issuebooks = JSON.parse(localStorage.getItem("issuebooks"));
let dispissuebooks = document.getElementById("disp-issuebooks");
let list = "";
let count = 0;

let uid = sessionStorage.getItem("uid");


function displaying() {
  for (let i of issuebooks) {
    list += `<tr>
     <td>${++count}</td>
     <td>${i.bookId}</td>
     <td>${i.bookTitle}</td>
     <td>${i.uid}</td>
     <td>${i.uname}</td>
     <td>${i.issuedate}</td>
     <td>${i.actualreturndate}</td>
     </tr>`;
  }
  dispissuebooks.innerHTML = list;
}

