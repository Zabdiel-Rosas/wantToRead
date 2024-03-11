import { Book } from '../../domain/book';
import { BookRepository } from '../../domain/book-repository';

// Mock database or database access methods can be implemented here
const database: Book[] = [
  { id: '1', name: 'The Importance of Being Ernest' },
  { id: '2', name: 'The Subtle Art of Not Giving a Fuck' },
  { id: '3', name: 'Harry Potter and the Goblet of Fire' }
];

export class MongoBookRepository implements BookRepository {
  async getAllBooks() {
    const books = await database;
    return books;
  }

  async getBookById(id: string): Promise<Book | null> {
    const rawBook = await database.find((book) => book.id === id);

    return rawBook ? new Book(rawBook.id, rawBook.name) : null;
  }
}
