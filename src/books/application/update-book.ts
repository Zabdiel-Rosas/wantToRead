import { Book } from '../domain/book';
import { BookNotFound } from '../domain/book-not-found';
import { BookRepository } from '../domain/book-repository';

export class UpdateBook {
  constructor(private bookRepository: BookRepository) {}

  async run(id: string, name: string): Promise<Book | null> {
    const book = await this.bookRepository.getBookById(id);

    if (!book) {
      throw new BookNotFound(id);
    }

    const updatedBook = await this.bookRepository.updateBook(id, name);

    if (!updatedBook) {
      throw new Error("Book couldn't be updated!");
    }

    return updatedBook;
  }
}
