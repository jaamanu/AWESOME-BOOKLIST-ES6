import Store from "./modules/store.js";
import UI from "./modules/ui.js";
class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000000000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

document.addEventListener('DOMContentLoaded', UI.showBooks);
document.querySelector('#book-card').addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hey')
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
if(title !== '' && author !== '') {
  const book = new Book(title, author)
  UI.addBookToList(book)
  UI.clearFields()
  Store.addBooks(book)
}
})

document.querySelector('.bookDisplay').addEventListener('click', (e) => {
  if(e.target.className === 'remove') {
    const id = e.target.previousElementSibling.innerText;
    Store.deleteBookStorage(id)
    UI.deleteBook(e.target)
  }
})


































// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const form = document.getElementById('book-card');
// const library = document.getElementById('library');
// let book;
// let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
// function addBook() {
//   book = {
//     title: title.value,
//     author: author.value,
//     id: Math.floor(Math.random() * 1000000),
//   };
//   bookList.push(book);
//   localStorage.setItem('bookList', JSON.stringify(bookList));
// }
// function removeBook(id) {
//   bookList = bookList.filter((books) => books.id !== id);
//   localStorage.setItem('bookList', JSON.stringify(bookList));
// }
// function populate(book) {
//   const row = document.createElement('tr');
//   const bookTitle = document.createElement('td');
//   const bookAuthor = document.createElement('td');
//   const removeBtn = document.createElement('button');
//   bookTitle.innerText = book.title;
//   bookAuthor.innerText = book.author;
//   removeBtn.innerText = 'Remove';
//   row.append(bookTitle, bookAuthor, removeBtn);
//   library.append(row);
//   removeBtn.addEventListener('click', () => {
//     removeBtn.parentElement.remove();
//     removeBook(book.id);
//   });
// }
// bookList.forEach(populate);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (title.value !== '' && author.value !== '') {
//     addBook();
//     populate(book);
//     form.reset();
//   } else {
//     alert('Please enter a title and author');
//   }
// });