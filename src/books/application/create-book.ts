import { Book } from '../domain/book';
import { BookRepository } from '../domain/book-repository';

export class CreateBook {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(name: string): Promise<Book | null> {
    const book = await this.bookRepository.createBook(name);

    if (!book) {
      throw new Error('Something went wrong!');
    }
    return book;
  }
}
