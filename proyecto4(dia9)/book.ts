export class Book {
    private title:string;
    private nPages:number;
    private issn:string;
    private author:string;
    private editorial:string;
    constructor(title:string,nPages:number,issn:string,author:string,editorial:string) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }

    
    public get gTitle() : string {
        return this.title;
    }

    
    public get gNPages() : number {
        return this.nPages;
    }
    
    public get gIssn() : string {
        return this.issn;
    }
    
    public get gAuthor() : string {
        return this.author;
    }
    
    public get gEditorial() : string {
        return this.editorial;
    }
    
    public setTitle(newTitle : string) {
        this.title = newTitle;
    }
    
    public setNPages(newNPages : number) {
        this.nPages = newNPages;
    }
    
    public setIssn(newIssn : string) {
        this.issn = newIssn;
    }
    
    public setAuthor(newAuthor : string) {
        this.author = newAuthor;
    }
    
    public setEditorial(newEditorial : string) {
        this.editorial = newEditorial;
    }

    /**
     * toString
     */ 
    public toString() {
        return "Title - " + this.gTitle + "\n" + "Number of pages - " + this.gNPages + "\n" +
            "ISSN - " + this.gIssn + "\n" + "Author - " + this.gAuthor + "\n" +
            "Editorial - " + this.gEditorial;
    }
    
    public arrayAtributos() {
        var book1 = [];

        book1.push(this.title,this.nPages,this.issn,this.author,this.editorial);
        return book1;
    }

}