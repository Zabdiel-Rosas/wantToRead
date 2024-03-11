import { Book } from './book';

export interface BookRepository {
  getAllBooks(): Promise<Book[] | null>;
}
