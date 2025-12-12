let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');
let newBookCancel = document.querySelector('#new-book-cancel');

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
    console.log(myLibrary)
}

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