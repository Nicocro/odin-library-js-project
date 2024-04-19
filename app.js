const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;  
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages`;  
    }
}

// here's what I need to do: have a button that trigger a modal dialog to enter a new boook. Listen to the button to trigger the modal.
// show up form for the user to complete
// register the completion into a book object
// add the book object to the book array
// show the entire array on the page (adding cards HTML divs)

function addBookToLibrary(event) {
//function to add a book to the library array and display it // 
    event.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = parseInt(document.getElementById('numberOfPages').value);
    const read = document.getElementById('readCheckbox').checked;

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    displayBooks()
}

function displayBooks() {
    // traverse the library array and display all the books on the page //
    const library = document.querySelector('.library');

    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        // function to create and display cards for every book in the myLibrary array //
        const bookCard  = document.createElement('div');
        bookCard.className = 'book-card';
        const isChecked = book.read ? 'checked' : ''; 
        bookCard.innerHTML = 
        `
        <h3 class="book-title">${book.title}</h3>
        <h3 class="book-author">${book.author}</h3>
        <h3 class="book-pages">${book.pages} pages</h3>
        <div class="book-actions">
            <input type="checkbox" id="read-check-${index}" ${isChecked} onclick="toggleReadStatus(${index})">
            <label for="read-check-${index}">Read</label>
            <button onclick="deleteBook(${index})" class="delete-btn">Delete</button>
        </div>
        `;
        library.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    const book = myLibrary[index]
    book.read = !book.read;
    displayBooks();
    console.log('Book read statu changes ad index:', index);
}

function deleteBook(index) {
// function to delete a book, triggered by eventlistener // 
    myLibrary.splice(index, 1)
    displayBooks();
    console.log('Book deleted at index:', index);
}

// Get the DOM elements I need
const dialog = document.querySelector('dialog');
const buttonDialog= document.querySelector('#add-book');
const buttonClose = document.querySelector('#close');
const bookForm = document.querySelector('#bookForm');
const submitButton = document.querySelector('#submitButton');

// Open the modal on click of button //
buttonDialog.addEventListener('click', () => {
    dialog.showModal();
});

//close modal on close button click // 
buttonClose.addEventListener('click', () => {
    dialog.close();
})

// close modal on submission // 
submitButton.addEventListener('click', () => {
    dialog.close();
})

// add book to library on form submission // 
bookForm.addEventListener('submit', addBookToLibrary);

