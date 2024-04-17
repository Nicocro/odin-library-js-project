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

// const ciccio = new Book("Ciccio Pasticcio", "Luigi Scurrile", 543);
// console.log(ciccio.info());

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
    displayBook()
}

function displayBook() {
    // traverse the library array and display all the books on the page //
    const library = document.querySelector('.library');

    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        // function to create and display cards for every book in the myLibrary array //
        const bookCard  = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.setAttribute('id',index);

        const title = document.createElement('h3');
        title.className = 'book-titile';
        title.textContent = book.title;
        bookCard.appendChild(title); 

        const author = document.createElement('h3');
        author.className = 'book-author';
        author.textContent = book.author;
        bookCard.appendChild(author);

        const pages = document.createElement('h3');
        pages.className = 'book-pages';
        pages.textContent = book.pages;
        bookCard.appendChild(pages);

        const bookActions = document.createElement('div');
        bookActions.className = "book-actions";

        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.className = "delete-btn";
        btnDelete.setAttribute('id', 'delete-' + index);  // Setting ID with index
        

        bookActions.appendChild(btnDelete);
        bookCard.appendChild(bookActions);

        library.appendChild(bookCard);
    })

}

function deleteBook(index) {
// function to delete a book, triggered by eventlistener // 
}


// Get the DOM elements I need
const modal = document.querySelector('#bookModal');
const btn = document.querySelector('#add-book');
const xmodal = document.querySelector('.close');

// here I need to grab all the delete buttons and then add an eventlistener to all those buttons that applies the delete function. //

// Open the modal on click of button //
btn.addEventListener('click', function() {
    modal.style.display = "flex";
});

//close the modal by clicking the x //
xmodal.addEventListener('click', function() {
    modal.style.display = "none";
});

//close the modal by clicking outside of it // 
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

const bookForm = document.querySelector('#bookForm');

bookForm.addEventListener('submit', addBookToLibrary);