let books = JSON.parse(localStorage.getItem("books"));
let users = JSON.parse(localStorage.getItem("users"));
let requests = JSON.parse(localStorage.getItem("requests"));

let issuebooks = localStorage.getItem("issuebooks")
  ? JSON.parse(localStorage.getItem("issuebooks"))
  : [];

let uid = sessionStorage.getItem("uid");
let password = sessionStorage.getItem("password");

let dispstatus = document.getElementById("disp-status");
let count = 0;

function displaying() {
  for (let book of issuebooks) {
    if (uid == book.uid && book.issuestatus) {
      let row = document.createElement("tr");
      let slno = document.createElement("td");
      slno.innerText = String(++count);
      row.appendChild(slno);
      let bookId = document.createElement("td");
      bookId.innerText = book.bookId;
      row.appendChild(bookId);
      let bookTitle = document.createElement("td");
      bookTitle.innerText = book.bookTitle;
      row.appendChild(bookTitle);
      let issuestatus = document.createElement("td");
      issuestatus.innerText = "Approved";
      row.appendChild(issuestatus);
      let issuedate = document.createElement("td");
      issuedate.innerText = book.issuedate;
      row.appendChild(issuedate);
      let actualreturndate = document.createElement("td");
      actualreturndate.innerText = book.actualreturndate;
      row.appendChild(actualreturndate);

      let ret = document.createElement("td");
      let button = document.createElement("button");
      button.setAttribute("value", "Return");
      button.innerText = "Return";
      button.addEventListener("click", () => {
        retn(
          book.bookId,
          uid,
          book.actualreturndate,
          new Date().toISOString().substring(0, 10)
        );
        console.log(book.issueId + " " +book.actualreturndate );
        console.log(new Date().toISOString().substring(0, 10)) 
      });
      ret.appendChild(button);
      row.appendChild(ret);

      let fine = document.createElement("td");
      fine.setAttribute("id", "fine");
      row.appendChild(fine);
      dispstatus.appendChild(row);
    }
  }

  for (let r of requests) {
    if (uid == r.uid) {
      let row = document.createElement("tr");
      let slno = document.createElement("td");
      slno.innerText = String(++count);
      row.appendChild(slno);
      let bookId = document.createElement("td");
      bookId.innerText = r.bookId;
      row.appendChild(bookId);
      let bookTitle = document.createElement("td");
      bookTitle.innerText = r.bookTitle;
      row.appendChild(bookTitle);
      let issuestatus = document.createElement("td");
      issuestatus.innerText = "Pending";
      row.appendChild(issuestatus);
      let issuedate = document.createElement("td");
      issuedate.innerText = "--------";
      row.appendChild(issuedate);
      let actualreturndate = document.createElement("td");
      actualreturndate.innerText = "--------";
      row.appendChild(actualreturndate);
      let re = document.createElement("td");
      re.innerText = "--------";
      row.appendChild(re);
      let fine = document.createElement("td");
      fine.setAttribute("id", "fine");
      row.appendChild(fine);
      dispstatus.appendChild(row);
    }
  }
}

function retn(bookId, uid, actualreturndate, returndate) {
  console.log(actualreturndate + " " +actualreturndate +"a");
  let fine = 10;
  if (new Date(actualreturndate) < new Date(returndate)) {
    let diff =
      (new Date(returndate) - new Date(actualreturndate)) /
      (1000 * 60 * 60 * 24);
      console.log(diff);
    fine = fine * diff;
    document.getElementById("fine").innerHTML = fine;
    document.querySelector(
      ".msg"
    ).innerHTML = `Late Submission You Need To Pay ${fine} Rupees Fine..!`;
  } else {
    for (let book of issuebooks) {
      if (book.bookId == bookId) {
        issuebooks.returnbook = true;
      }
    }
    document.getElementsByClassName("f").innerHTML = 0;
    document.querySelector(".msg").innerHTML = "Book Returned Successfully..!";
    setTimeout(() => (document.querySelector(".msg").innerHTML = ""), 2000);
    issuebooks = issuebooks.filter((a) => {
      return Number(a.bookId) != bookId;
    });
    localStorage.setItem("issuebooks", JSON.stringify(issuebooks));
    location.reload();
    userDetailsUpdate(uid, bookId);
  }
}

function userDetailsUpdate(uid, bookId) {
  for (let user of users) {
    if (uid == user.uid) {
      user.no_of_books_taken = --user.no_of_books_taken;
    }
  }
  for (let book of books) {
    if (bookId == book.bookId) {
      book.no_of_books = ++book.no_of_books;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("books", JSON.stringify(books));
}
