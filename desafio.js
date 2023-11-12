class Book { 

    constructor(id = String, title = String, description = String, author = String) {
        this.id = id
        this.title = title;
        this.description = description;
        this.author = author;
    }
    
}

const generateId = () => {
    const time = new Date().getTime().toString(32)
    return `${time}`
}

class Library {
    
    constructor() {
        this.books = []
    }


    addBook(title = String, description = String, author = String) {

        const id = this.generateId();
        const book = new Book(id, title, description, author);
        this.books.push(book);
        return book;

    }

    getBooks() {
        return this.books
    }

    removeById(id) {
        this.books = this.books.filter((book) => book.id !== id)
    }

    getBookById(id) {
        return this.books.find((book) => book.id == id)
    }

    updateBookById(id, title = undefined, description = undefined, author = undefined ){

        const book = this.getBookById(id)
        if (book) {
            if (title) {
                book.title == title
            }
            if (description) {
                book.description = description
            }
            if (author) {
                book.author = author
            }
        }
    }


}
