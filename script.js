const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(aBook) {
  myLibrary.push(aBook);
}

function displayNewBook(newBook) {
  const parent = document.getElementById('books-container');
  let newDiv = document.createElement('div');
  let newTitle = document.createElement('p');
  let newAuthor = document.createElement('p');
  newTitle.textContent = newBook.title;
  newAuthor.textContent = newBook.author;
  parent.appendChild(newDiv);
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
}

function deleteBook(el, i) {
  el.remove();
  myLibrary.splice(i, 1);
}

// function setReadValue(newRead, inputBook) {
//   inputBook.read = newRead;
// }

function changeRead(readDiv, readBut, boo) {
  if (boo.read === 'read') {
    readBut.textContent = 'Change to read';
    boo.read = 'unread';
    readDiv.textContent = 'unread';
  }
  else if (boo.read === 'unread') {
    readBut.textContent = 'Change to unread';
    boo.read = 'read';
    readDiv.textContent = 'read';
  }
}

function displayBooks() {
  const parent = document.getElementById('books-container');
  parent.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'book-div');
    let newTitle = document.createElement('p');
    let newAuthor = document.createElement('p');
    let newPages = document.createElement('p');
    let read = document.createElement('p');
    let deleteButton = document.createElement('button');
    let readButton = document.createElement('button');
    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;
    deleteButton.textContent = 'Delete Book';
    deleteButton.addEventListener('click', () => { deleteBook(newDiv, i); });
    readButton.textContent = 'Change Read Status';
    // eslint-disable-next-line no-loop-func, no-undef
    readButton.addEventListener('click', () => { changeRead(read, readButton, myLibrary[i]); });

    parent.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newPages);
    newDiv.appendChild(read);
    newDiv.appendChild(readButton);
    newDiv.appendChild(deleteButton);
  }
}

function submitForm() {
  let titleValue = document.getElementById('title-id').value;
  let authorValue = document.getElementById('author-id').value;
  let pagesValue = document.getElementById('pages-id').value;
  let readValue;
  if (document.getElementById('read-id').checked) {
    readValue = 'read';
  } else {
    readValue = 'unread';
  }

  let book = new Book (titleValue, authorValue, pagesValue, readValue);
  addBookToLibrary(book);
  displayBooks();
}
