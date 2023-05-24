let count = 0;
let books = JSON.parse(localStorage.getItem("books"));
let dispbooks = document.querySelector("#disp-books");

function deleteBooks(bookId) {
    books = books.filter((a) => {
        return Number(a.bookId) !== (bookId);
    });
    localStorage.setItem("books", JSON.stringify(books));
    displaying();
}

function displaying() {
    let list = "";
    for (let i = 0; i < books.length; i++) {
        list += `<tr>  <td>${++count}</td> 
        <td>${books[i].catagory}</td> 
        <td>${books[i].bookId}</td> 
        <td>${books[i].bookTitle}</td>
        <td>${books[i].author}</td>
        <td>${books[i].edition}</td>
        <td>${books[i].no_of_books}</td> 
        <td> <a > <img src="/img/edit.png" alt="Logo" height="30px" width="30px" onclick = "editBook(${books[i].bookId})" > </a> </td> 
        <td> <img src="/img/delete.jpg" alt="Logo" height="30px" width="30px" style = "cursor :pointer;" onclick = "deleteBooks(${books[i].bookId})" ></td></tr>`
    }
    dispbooks.innerHTML = list;
}

function editBook(bookId) {
    localStorage.setItem("bid", bookId);
    location.href = "/html/editBook.html";
}

let catagory = document.querySelector("#category");
let bookId = document.querySelector("#bookid");
let bookTitle = document.querySelector("#booktitle");
let author = document.querySelector("#author");
let edition = document.querySelector("#edition");
let no_of_books = document.querySelector("#no_of_books");

function upd() {
    for (let book of books) {
        if (book.bookId == bookId.value) {
            book.catagory = catagory.value;
            book.bookTitle = bookTitle.value;
            book.author = author.value;
            book.edition = edition.value;
            book.no_of_books = no_of_books.value;
            localStorage.setItem("books", JSON.stringify(books));
            document.querySelector(".msg").innerHTML = "Book Updated Successfully..!";
            location.href = "/html/Home.html";
            break;
        }
    }
    return;
}
