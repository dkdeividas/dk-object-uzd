import Book from './book.js';

class Ebook extends Book {
    constructor(isbn, author, date, name, description, pagenumber, format){
        super(isbn, author, date, name, description, pagenumber);
        this.format = format;
    }

    printEbookInfo() {
        super.getBookinfo();
        console.log(`Formatas: ${this.format}`)
    }
}

export default Ebook;