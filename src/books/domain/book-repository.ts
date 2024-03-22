import { Book } from './book';

export interface BookRepository {
  getAllBooks(): Promise<Book[] | null>;
  getBookById(id: string): Promise<Book | null>;
  createBook(name: string): Promise<Book | null>;
  updateBook(id: string, name: string): Promise<Book | null>;
}
