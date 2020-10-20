import { Book } from "./book";

export class Library {
    private books:Book[];
    private address:string;
    private manager:string;

    constructor(books:Book[],address:string,manager:string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    
    public get gAddress() : string {
        return this.address;
    }
    
    public get gManager() : string {
        return this.manager
    }

    public setAddress(newAddress : string) {
        this.address = newAddress;
    }
    
    public setManager(newManager : string) {
        this.manager = newManager;
    }
    
    /**
     * toString
     */
    public toString():string {
        var infoLibros:string;
        infoLibros = "";
        for (let i = 0; i < this.books.length; i++) {
                infoLibros = infoLibros + "Libro" + (i+1) +": \n" + "Title - " + this.books[i].gTitle + "\n" + "Number of pages - " + this.books[i].gNPages + "\n" +
                    "ISSN - " + this.books[i].gIssn + "\n" + "Author - " + this.books[i].gAuthor + "\n" +
                    "Editorial - " + this.books[i].gEditorial + "\n\n";
        }
        return infoLibros;
    }

    /**
     * getNumberOfBooks
     */
    public getNumberOfBooks():number {
        return this.books.length;
    }
    /**
     * findByAuthor
     */
    public findByAuthor(author:string):Book[] {
        let infoLibroAutor:Book[];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].gAuthor == author) {
               infoLibroAutor.push(this.books[i]);
            }
        }
        return infoLibroAutor;
    }
}