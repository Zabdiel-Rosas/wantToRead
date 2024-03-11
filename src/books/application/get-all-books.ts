import { Book } from '../domain/book';
import { BookRepository } from '../domain/book-repository';

export class GetAllBooks {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(): Promise<Book[]> {
    const books = await this.bookRepository.getAllBooks();

    if (!books) {
      throw new Error('Something went wrong!');
    }
    return books;
  }
}
