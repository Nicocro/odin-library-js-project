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

function addBookToLibrary() {
//function to 
}

function displayBook() {
    
    const library = document.querySelector('.library');

    library.innerHTML = '';

    myLibrary.foreach(book => {
        // function to create and display cards for every book in the myLibrary array //
        const bookCard  = document.createElement('div');
        bookCard.className = 'book-card';

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

        library.appendChild(bookCard);
    })

}

// Get the modal
let modal = document.querySelector('#bookModal');

// Get the button that opens the modal
let btn = document.querySelector('#add-book');

// Get the <span> element that closes the modal
let xmodal = document.querySelector('.close');

// When the user clicks the button, open the modal 
btn.addEventListener('click', function() {
    modal.style.display = "flex";
});

xmodal.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});