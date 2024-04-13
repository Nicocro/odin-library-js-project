const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;  
    this.pages = pages;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages`;  
    }
}

// const ciccio = new Book("Ciccio Pasticcio", "Luigi Scurrile", 543);
// console.log(ciccio.info());

function addBookToLibrary() {

}