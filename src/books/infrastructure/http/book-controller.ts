import { Request, Response } from 'express';
import { GetAllBooks } from '../../application/get-all-books';
import { GetBookById } from '../../application/get-book-by-id';
import { BookNotFound } from '../../domain/book-not-found';

export class BookController {
  constructor(
    private readonly getAllBooks: GetAllBooks,
    private readonly getBookById: GetBookById
  ) {}

  async readAll(_: Request, res: Response) {
    try {
      const books = await this.getAllBooks.run();
      return res.status(200).send(books);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send(err.message);
      }
    }
  }

  async readById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const book = await this.getBookById.run(id);
      return res.status(200).send(book);
    } catch (err) {
      if (err instanceof BookNotFound) {
        return res.status(404).send(err.message);
      }

      return res.status(500).send('Something went wrong!');
    }
  }
}
