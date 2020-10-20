"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Object.defineProperty(Library.prototype, "gAddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "gManager", {
        get: function () {
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    Library.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    /**
     * toString
     */
    Library.prototype.toString = function () {
        var infoLibros;
        infoLibros = "";
        for (var i = 0; i < this.books.length; i++) {
            infoLibros = infoLibros + "Libro" + (i + 1) + ": \n" + "Title - " + this.books[i].gTitle + "\n" + "Number of pages - " + this.books[i].gNPages + "\n" +
                "ISSN - " + this.books[i].gIssn + "\n" + "Author - " + this.books[i].gAuthor + "\n" +
                "Editorial - " + this.books[i].gEditorial + "\n\n";
        }
        return infoLibros;
    };
    /**
     * getNumberOfBooks
     */
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    /**
     * findByAuthor
     */
    Library.prototype.findByAuthor = function (author) {
        var infoLibroAutor;
        infoLibroAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].gAuthor == author) {
                infoLibroAutor.push(this.books[i]);
            }
        }
        return infoLibroAutor;
    };
    return Library;
}());
exports.Library = Library;
