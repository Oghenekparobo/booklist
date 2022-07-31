// book class: represents a book
class Book {
  // method that runs when we instantiate a book
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ui class: handle ui tasks
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "book one",
        author: "john doe",
        isbn: "3434434",
      },
      {
        title: "book two",
        author: "john doe",
        isbn: "45545",
      },
    ];
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
    `;

    list.appendChild(row);
  }
  static clearFields() {
    const title = (document.querySelector("#title").value = "");
    const author = (document.querySelector("#author").value = "");
    const isbn = (document.querySelector("#isbn").value = "");
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
      UI.showAlert("book removed", "primary");
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    const alert = document.querySelector(".alert");
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

// store class: handles  local storage
class Store {
    static getBooks(){

    }

    static addBook(book){

    }

    static removeBook(isbn){

    }
}

// event to display books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//  event to add a book
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("fill all fields", "danger");
  } else {
    // instatiate book
    const book = new Book(title, author, isbn);

    // add book to ui
    UI.addBookToList(book);
    UI.showAlert("book added sucessfully", "success");
    UI.clearFields();
  }
});

// event to remove a book
const bookList = document.querySelector("#book-list");
bookList.addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
