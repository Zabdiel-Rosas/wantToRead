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

  async createBook(id: string, name: string): Promise<Book | null> {
    const newBook: Book = { id, name };
    await database.push(newBook);

    return newBook;
  }
}
