let category = document.querySelector('#category');
let bookId = document.querySelector('#bookid');
let bookTitle = document.querySelector('#booktitle');
let author = document.querySelector('#author');
let edition = document.querySelector('#edition');
let no_of_books = document.querySelector('#no_of_books');

let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
let flag = true;

document.addEventListener("submit", (e) => {
    e.preventDefault();
    add();
});

function add() {
    for (let book of books) {
        if (book.bookId == bookId.value) {
            document.querySelector('#msg').innerHTML = "Book Id Already Exist..";
            setTimeout(() => document.querySelector("#msg").innerHTML = "", 2000);
            setTimeout(() => location.reload(), 2000);
            flag = false;
            break;
        }
    }

    if (flag) {
        books.push(
            {
                catagory: category.value,
                bookId: bookId.value,
                bookTitle: bookTitle.value,
                author: author.value,
                edition: edition.value,
                no_of_books: no_of_books.value,
            }
        );
        localStorage.setItem("books", JSON.stringify(books));
        document.querySelector('#msg').innerHTML = "Book Added Successfully..";
        setTimeout(() => document.querySelector("#msg").innerHTML = "", 2000);
        setTimeout(() => location.reload(), 2000);
    }

}

