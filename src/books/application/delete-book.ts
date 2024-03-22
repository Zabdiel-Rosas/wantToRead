import { Book } from '../domain/book';
import { BookNotFound } from '../domain/book-not-found';
import { BookRepository } from '../domain/book-repository';

export class DeleteBook {
  constructor(private readonly bookRepository: BookRepository) {}

  async run(id: string): Promise<Book | null> {
    const book = await this.bookRepository.getBookById(id);

    if (!book) {
      throw new BookNotFound(id);
    }

    const deletedBook = await this.bookRepository.deleteBook(id);

    if (!deletedBook) {
      throw new Error("The Book couldn't be deleteded!");
    }

    return deletedBook;
  }
}
