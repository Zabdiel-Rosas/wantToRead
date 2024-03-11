import { Book } from '../../domain/book';
import { BookRepository } from '../../domain/book-repository';

// Mock database or database access methods can be implemented here
const books: Book[] = [
  { id: '1', name: 'The Importance of Being Ernest' },
  { id: '2', name: 'The Subtle Art of Not Giving a Fuck' },
  { id: '3', name: 'Harry Potter and the Goblet of Fire' }
];

export class MongoBookRepository implements BookRepository {
  async getAllBooks() {
    console.log('Using Mongo Implementation');

    return books;
  }
}
