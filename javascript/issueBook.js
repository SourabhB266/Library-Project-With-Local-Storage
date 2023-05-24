let users = JSON.parse(localStorage.getItem("users"));
let books = JSON.parse(localStorage.getItem("books"));
let requests = JSON.parse(localStorage.getItem("requests"));
let dispRequest = document.getElementById("disp-requests");
let count = 0;

function displaying() {
    let list = "";
    for (let r of requests) {
        list += `<tr><td>${++count}</td>
        <td>${r.bookId}</td>
        <td>${r.bookTitle}</td>
        <td>${r.uid}</td>
        <td>${r.uname}</td>
        <td>${r.td}</td>
        <td><button onclick="approve(${r.bookId},${r.uid})">Approve</button></td>
        </tr>`;
    }
    dispRequest.innerHTML = list;
}

let issuebooks = localStorage.getItem("issuebooks")
    ? JSON.parse(localStorage.getItem("issuebooks"))
    : [];

let dt = new Date().toISOString().substring(0,10);
// let dt = dt1.toDateString();
let rt = addWeeks(2);
// let rt = rt1.toDateString();
let issuestatus = false;
let returnbook ;

function approve(bookId, uid) {
    if (validation(uid)) {
        for (let r of requests) {
            if (uid == r.uid && r.bookId == bookId) {
                issuebooks.push({
                    bookId: r.bookId,
                    bookTitle: r.bookTitle,
                    uid: r.uid,
                    uname: r.uname,
                    issuedate: dt,
                    actualreturndate: rt,
                    issuestatus: true,
                    returnbook:false,
                });
                break;
            }

        }
        localStorage.setItem("issuebooks", JSON.stringify(issuebooks));
        // alert("Issued book successfully!");
        document.querySelector(".msg").innerHTML = "Book Issued Successfully..!";
        setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
        userDetailsUpdate(uid, bookId);
        location.reload();
    }
}

function userDetailsUpdate(uid, bookId) {
    let a = requests.filter((user) => {
        return !(user.bookId == bookId && user.uid == uid);
    });

    for (let user of users) {
        if (uid == user.uid) {
            user.no_of_books_taken = ++user.no_of_books_taken;

        }
    }
    for (let book of books) {
        if (bookId == book.bookId) {
            book.no_of_books = --book.no_of_books;
        }
    }
    localStorage.setItem("requests",JSON.stringify(a));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("books", JSON.stringify(books));
}



function validation(uid) {
    for (let user of users) {
        if (uid == user.uid) {
            if (user.no_of_books_taken >= 3) {
                // alert("Exceeding maximum limit! can't approve book");
                document.querySelector(".msg").innerHTML = "Exceeding maximum limit! can't approve book..!";
                setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
                return false;
            }

            else {
                return true;
            }
        }

    }
}

function addWeeks(numOfWeeks, date = new Date()) {
    date.setDate(date.getDate() + numOfWeeks * 7);
    return date.toISOString().substring(0,10);
}


