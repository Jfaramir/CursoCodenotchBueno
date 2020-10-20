"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, issn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    Object.defineProperty(Book.prototype, "gTitle", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "gNPages", {
        get: function () {
            return this.nPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "gIssn", {
        get: function () {
            return this.issn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "gAuthor", {
        get: function () {
            return this.author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "gEditorial", {
        get: function () {
            return this.editorial;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.setNPages = function (newNPages) {
        this.nPages = newNPages;
    };
    Book.prototype.setIssn = function (newIssn) {
        this.issn = newIssn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        this.author = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    /**
     * toString
     */
    Book.prototype.toString = function () {
        return "Title - " + this.gTitle + "\n" + "Number of pages - " + this.gNPages + "\n" +
            "ISSN - " + this.gIssn + "\n" + "Author - " + this.gAuthor + "\n" +
            "Editorial - " + this.gEditorial;
    };
    Book.prototype.arrayAtributos = function () {
        var book1 = [];
        book1.push(this.title, this.nPages, this.issn, this.author, this.editorial);
        return book1;
    };
    return Book;
}());
exports.Book = Book;
