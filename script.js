class Book {
    constructor(isbn, author, date, name, description, pagenumber) {
        this.isbn = isbn;
        this.author = author;
        this.date = date;
        this.name = name;
        this.description = description;
        this.pagenumber = pagenumber;
        this.lentyna = [];
    }

    getBookinfo() {
        console.log(this.isbn, this.author, this.date, this.name, this.description, this.pagenumber);
        
        for(let i = 0; i < this.lentyna.length; i++ ){
            console.log(this.lentyna[i]);
    }
}



class Ebook extends Book {
    constructor(isbn, author, date, name, description, pagenumber, format){
        super(isbn, author, date, name, description, pagenumber);
        this.format = format;
    }

    printEbookInfo() {
        super.getBookinfo();
        console.log(this.format);
    }
}

const knyga1 = new Book(1, "Jonas", 1900-01-01, "knygaa", "knygos1 aprasymas", 200);
const knyga2 = new Book(2, "Petras", 1950-01-01, "knygab", "knygos2 aprasymas", 300);
const knyga3 = new Book(3, "Antanas", 1970-01-01, "knygac", "knygos3 aprasymas", 400);

knyga1.getBookinfo();
