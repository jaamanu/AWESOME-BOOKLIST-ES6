import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

const store = new Store();
const ui = new UI();

let dt = DateTime.now();
dt = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
const date = document.querySelector('.date');
date.innerHTML = dt;

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000000000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// EVENT TO DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', ui.showBooks);
// EVENT TO ADD A BOOK
document.querySelector('#book-card').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    // CALL THE OTHER CLASSES TO PASS AND DISPLAY THE BOOKS TO UI
    ui.addBookToList(book);
    ui.clearFields();
    store.addBooks(book);
  } else {
    alert('Please fill inputs');
  }
});
// EVENT DELETE
document.querySelector('.bookDisplay').addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const id = e.target.previousElementSibling.innerText;
    store.deleteBookStorage(id);
    ui.deleteBook(e.target);
  }
});

const form = document.querySelector('#book-card');
const awesome = document.querySelector('.awesomeBooks');
const bookDisplay = document.querySelector('.bookDisplay');
const list = document.querySelector('.lists');
const addNew = document.querySelector('.addNew');
const contact = document.querySelector('.contact');
const contactUs = document.querySelector('.contactUs');

list.addEventListener('click', () => {
  awesome.style.display = 'block';
  bookDisplay.style.display = 'block';
  form.style.display = 'none';
  contactUs.style.display = 'none';
});

addNew.addEventListener('click', () => {
  form.style.display = 'block';
  awesome.style.display = 'none';
  bookDisplay.style.display = 'none';
  contactUs.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactUs.innerHTML = `
  <h2 class="contactUsHeader">Contact Information</h2>
  <p class="contactUsParagraph">Do you have any question, or you just want to say "Hi"?
      <br>
      You can reach out to us!
  </p>
  <div class="contactDiv">
      <ul class="contactUsUl">
          <li>- &nbsp; Our email address jaamanu@gmail.com</li>
          <li>- &nbsp; Our email address famini@gmail.com </li>
          <li>- &nbsp; Our phone numbers +270730732316</li>
          <li>- &nbsp; Our house address 23 chicago ave capetown South Africa</li>
      </ul>
  </div>
  `;
  contactUs.style.display = 'block';
  form.style.display = 'none';
  awesome.style.display = 'none';
  bookDisplay.style.display = 'none';
});

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