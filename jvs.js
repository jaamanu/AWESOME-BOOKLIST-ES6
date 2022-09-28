import Store from './modules/store.js';
import UI from './modules/ui.js';

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000000000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

document.addEventListener('DOMContentLoaded', UI.showBooks);
document.querySelector('#book-card').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    UI.addBookToList(book);
    UI.clearFields();
    Store.addBooks(book);
  }
});

document.querySelector('.bookDisplay').addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const id = e.target.previousElementSibling.innerText;
    Store.deleteBookStorage(id);
    UI.deleteBook(e.target);
  }
});
