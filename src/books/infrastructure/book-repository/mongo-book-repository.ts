import { Book } from '../../domain/book';
import { BookRepository } from '../../domain/book-repository';
import db from './db.json';

// Mock database or database access methods can be implemented here
const database: Book[] = db.books;

export class MongoBookRepository implements BookRepository {
  async getAllBooks() {
    const books = await database;
    return books;
  }

  async getBookById(id: string): Promise<Book | null> {
    const rawBook = await database.find((book) => book.id === id);

    return rawBook ? new Book(rawBook.id, rawBook.name) : null;
  }

  async createBook(name: string): Promise<Book | null> {
    function generateId() {
      const idsArr = database.map((book) => Number(book.id));
      const newId = Math.max(...idsArr) + 1;

      return newId.toString();
    }

    const id = generateId();
    const newBook: Book = { id, name };
    await database.push(newBook);

    return newBook;
  }

  async updateBook(id: string, name: string): Promise<Book | null> {
    const bookIndex = await database.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return null;
    }

    const updatedBook = { ...database[bookIndex], name };
    database[bookIndex] = updatedBook;
    return updatedBook;
  }
}
