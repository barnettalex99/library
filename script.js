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
  if (myLibrary.length > 1) {
    myLibrary.splice(i, 1);
  } else {
    myLibrary.pop();
  }
}

function changeRead(inputId) {
  let activeDiv = document.getElementById(inputId);
  let activeRead = activeDiv.getElementsByClassName('read');
  let html = activeRead[0].innerHTML;
  console.log(activeDiv);
  console.log(activeRead);
  console.log(html);
  if (html === 'read') {
    console.log('enters the for loop');
    activeRead[0].innerHTML = 'unread';
  }
  else {
    console.log('enters else');
    activeRead[0].innerHTML = 'read';
  }
}

function displayBooks() {
  const parent = document.getElementById('books-container');
  parent.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    console.log(myLibrary[i]);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', i);
    newDiv.setAttribute ('class','bookDiv');
    let newTitle = document.createElement('p');
    newTitle.setAttribute('class', 'title');
    let newAuthor = document.createElement('p');
    newTitle.setAttribute('class', 'author');
    let newPages = document.createElement('p');
    newPages.setAttribute('class', 'pages');
    let read = document.createElement('p');
    read.setAttribute('class', 'read');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button');
    let readButton = document.createElement('button');
    readButton.setAttribute('id', 'read-button');

    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    read.innerHTML = myLibrary[i].read;
    deleteButton.textContent = 'Delete Book';
    deleteButton.addEventListener('click', () => { deleteBook(newDiv, i); });
    readButton.textContent = 'Change Read Status';
    readButton.addEventListener('click', () => { changeRead(i); });

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
