import { Request, Response } from 'express';
import { GetAllBooks } from '../../application/get-all-books';

export class BookController {
  constructor(private readonly getAllBooks: GetAllBooks) {}

  async run(_: Request, res: Response) {
    try {
      const books = await this.getAllBooks.run();
      return res.status(200).send(books);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send(err.message);
      }
    }
  }
}
