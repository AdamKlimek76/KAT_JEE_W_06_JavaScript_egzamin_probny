
///////////////////////////////////////////////////
class Product {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    printInfo() {
        console.log(`${this.constructor.name} - title: ${this.title}, author: ${this.author}`);
    }
}

class Ebook extends Product {
    constructor(title, author) {
        super(title, author);
        this.type = "ebook";

    }

    download() {
        console.log("Ściąganie " + this.title);
    }
};

class Book extends Product {
    constructor(title, author) {
        super(title, author);
        this.type = "book";

    }

    order() {
        const text = "Podaj adres dostawy!"
        console.log(text);
        return text;
    }

};

