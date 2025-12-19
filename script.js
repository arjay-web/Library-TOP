let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');
let newBookCancel = document.querySelector('#new-book-cancel');
const libraryContainer = document.querySelector('#library');

const myLibrary = [];

function Book(title, author, pages, isRead){
    if (!new.target) {
        throw new Error("Use 'new' to call Book constructor.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    renderLibrary();
    newBookForm.reset();
}

function renderLibrary(){
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book, index)=>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML =`
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>`;

        libraryContainer.appendChild(bookDiv);
    })
}
myLibrary.push(
    new Book('Harry Potter', 'J.k Rowling', 272, true),
    new Book('The Hobbit', 'J.R.R. Tolkien', 310, true),
    new Book('Clean Code', 'Robert C. Martin', 464, false)
)

renderLibrary()

newBookForm.addEventListener('submit', ()=>{
    event.preventDefault();
    addBookToLibrary();
})

newBookBtn.addEventListener('click', ()=>{
   newBookForm.style.display = "block";
})

newBookCancel.addEventListener('click', ()=>{
    newBookForm.style.display = "none";
})