import { Book } from './book';

export interface BookRepository {
  getAllBooks(): Promise<Book[] | null>;
  getBookById(id: string): Promise<Book | null>;
}
