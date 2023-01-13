import Book from './book.js';
import Ebook from './ebook.js';

const knyga1 = new Book(1, "Jonas", 1900_01_01, "knygaA", "knygosA aprasymas", 200);
const knyga2 = new Book(2, "Petras", 1950_01_01, "knygaB", "knygosB aprasymas", 300);
const knyga3 = new Book(3, "Antanas", 1970_01_01, "knygaC", "knygosC aprasymas", 400);
knyga1.getBookinfo();
knyga2.getBookinfo();
knyga3.getBookinfo();

let lentyna = [];
        lentyna.push(knyga1, knyga2, knyga3);
        console.log(lentyna);


        
const ebook = new Ebook(1, "Ona", 1990_01_01, "knygaD", "knygosD aprasymas", 100, "pdf");
ebook.printEbookInfo("knygaD");

let array = [];
array.push(ebook);
console.log(array);