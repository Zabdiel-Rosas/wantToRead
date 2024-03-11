import { Book } from './book';

export interface BookRepository {
  getAllBooks(): Promise<Book[] | null>;
  getBookById(id: string): Promise<Book | null>;
  createBook(id: string, name: string): Promise<Book | null>;
}
