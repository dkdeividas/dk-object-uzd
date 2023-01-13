class Book {
    constructor(isbn, author, date, name, description, pagenumber) {
        this.isbn = isbn;
        this.author = author;
        this.date = date;
        this.name = name;
        this.description = description;
        this.pagenumber = pagenumber;
    }

    getBookinfo() {
        
        console.log(`
ISBN: ${this.isbn},
Autorius: ${this.author}, 
Leidimo metai: ${this.date}, 
Pavadinimas: ${this.name},
Aprasymas: ${this.description}, 
Puslapiu skaicius: ${this.pagenumber}`);

    }
   
}


export default Book;