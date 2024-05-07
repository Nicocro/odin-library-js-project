class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor (books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book)
    }

    deleteBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
            console.log('Book deleted at index:', index);
        }
    }

    toggleReadStatus(index) {
        if (index >= 0 && index < this.books.length) {
            this.books[index].toggleReadStatus();
            console.log('Book read status changes ad index:', index);
        }  
    }

    getAllBooks() {
        return this.books;
    }
}

class UIController {
    constructor(library) {
        this.library = library;
        this.libraryContainer = document.querySelector('.library');
    }

    displayBooks() {
        // display all books in the library as cards in the HTML//
        this.libraryContainer.innerHTML = '';
    
        this.library.getAllBooks().forEach((book, index) => {
            const bookCard  = document.createElement('div');
            bookCard.className = 'book-card';
            const isChecked = book.read ? 'checked' : ''; 
            bookCard.innerHTML = 
            `
            <h3 class="book-title">${book.title}</h3>
            <h3 class="book-author">${book.author}</h3>
            <h3 class="book-pages">${book.pages} pages</h3>
            <div class="book-actions">
            <input type="checkbox" class="read-check" data-index="${index}" ${isChecked}>
                <label for="read-check-${index}">Read</label>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
            `;
            this.libraryContainer.appendChild(bookCard);
        });
    }

    addBook(event) {
        //add book to library and update the display//
        event.preventDefault();

        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const pages = parseInt(document.getElementById('numberOfPages').value);
        const read = document.getElementById('readCheckbox').checked;

        const newBook = new Book(title, author, pages, read);
        this.library.addBook(newBook);
        this.displayBooks();
    }
    
    deleteBook(index) {
        this.library.deleteBook(index);
        this.displayBooks();
    }

    toggleReadStatus(index) {
        this.library.toggleReadStatus(index);
        this.displayBooks();
    }

    initializeEventListeners() {
        // Initialize event listeners for modal controls and form submission //
        const dialog = document.querySelector('dialog');
        const buttonDialog= document.querySelector('#add-book');
        const buttonClose = document.querySelector('#close');
        const bookForm = document.querySelector('#bookForm');
        const submitButton = document.querySelector('#submitButton');

        this.libraryContainer.addEventListener('click', event => {
            const target = event.target;
            const index = target.dataset.index; // Extract index from dataset

            // Toggle read status
            if (target.classList.contains('read-check')) {
                this.toggleReadStatus(index);
            }

            // Delete book
            else if (target.classList.contains('delete-btn')) {
                this.deleteBook(index);
            }
        });

        // Open the modal on click of button //
        buttonDialog.addEventListener('click', () => dialog.showModal());
        //close modal on close button click // 
        buttonClose.addEventListener('click', () => dialog.close());
        // close modal on submission // 
        submitButton.addEventListener('click', () => dialog.close());
        // add book to library on form submission // 
        bookForm.addEventListener('submit', (event) => {
            this.addBook(event);
            dialog.close();
        })
    }
}

// instantiate the library and UI classes /
const myLibrary = new Library();
const libraryUI = new UIController(myLibrary);

libraryUI.initializeEventListeners();
