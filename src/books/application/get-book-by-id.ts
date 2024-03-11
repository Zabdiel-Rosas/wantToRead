import { Book } from '../domain/book';
import { BookNotFound } from '../domain/book-not-found';
import { BookRepository } from '../domain/book-repository';

export class GetBookById {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(id: string): Promise<Book | null> {
    const book = await this.bookRepository.getBookById(id);

    if (!book) {
      throw new BookNotFound(id);
    }
    return book;
  }
}
