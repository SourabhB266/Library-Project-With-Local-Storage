let count = 0;
let books = JSON.parse(localStorage.getItem("books"));
let dispbooks = document.querySelector("#disp-books");

let users = JSON.parse(localStorage.getItem("users"));

let requests = localStorage.getItem("requests")
    ? JSON.parse(localStorage.getItem("requests"))
    : [];

let issuebooks = localStorage.getItem("issuebooks")
    ? JSON.parse(localStorage.getItem("issuebooks"))
    : [];

let tm = new Date().toISOString().substring(0,10);
// let tm = dt.toDateString();

let uid = sessionStorage.getItem("uid");
let password = sessionStorage.getItem("password");
let list = "";

function displaying() {
    for (let book of books) {
        let row = document.createElement('tr');
        let slno = document.createElement('td');
        slno.innerText = String(++count);
        row.appendChild(slno);
        let catagory = document.createElement('td');
        catagory.innerText = book.catagory;
        row.appendChild(catagory);
        let bookId = document.createElement('td');
        bookId.innerText = book.bookId;
        row.appendChild(bookId);
        let bookTitle = document.createElement('td');
        bookTitle.innerText = book.bookTitle;
        row.appendChild(bookTitle);
        let author = document.createElement('td');
        author.innerText = book.author;
        row.appendChild(author);
        let edition = document.createElement('td');
        edition.innerText = book.edition;
        row.appendChild(edition);
        let no_of_books = document.createElement('td');
        no_of_books.innerText = book.no_of_books;
        row.appendChild(no_of_books);
    
        let req = document.createElement('td');
        let button = document.createElement('button');
        button.setAttribute("value","Request");
        button.innerText="Request";
        for(let r of requests){
          if(r.bookId == book.bookId){
            button.disabled= true;
            break;
          }
        }
        for(let i of issuebooks){
          if(i.bookId == book.bookId){
            button.disabled= true;
            break;
          }
        }
        button.addEventListener('click', () => {
          request(book.bookId);
        });
        req.appendChild(button);
        row.appendChild(req);
        dispbooks.appendChild(row);
      }
}

function request(bookId) {
    for (let user of users) {
        if (uid == user.uid) {
            for (let book of books) {
                if (bookId == book.bookId) {
                    requests.push({
                        bookId: book.bookId,
                        bookTitle: book.bookTitle,
                        uid: user.uid,
                        uname: user.fname + " " +user.lname,
                        td: tm,
                    });
                    localStorage.setItem("requests", JSON.stringify(requests));
                    document.querySelector(".msg").innerHTML = "Request Sent Successfully..!";
                    setTimeout(() => document.querySelector(".msg").innerHTML = "", 2000);
                    location.reload();
                }
            }

        }
    }
}