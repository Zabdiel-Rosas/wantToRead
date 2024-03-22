import { Request, Response } from 'express';
import { GetAllBooks } from '../../application/get-all-books';
import { GetBookById } from '../../application/get-book-by-id';
import { BookNotFound } from '../../domain/book-not-found';
import { CreateBook } from '../../application/create-book';
import { UpdateBook } from '../../application/update-book';

export class BookController {
  constructor(
    private readonly getAllBooks: GetAllBooks,
    private readonly getBookById: GetBookById,
    private readonly createBook: CreateBook,
    private readonly updateBook: UpdateBook
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

  async createNewBook(req: Request, res: Response) {
    try {
      const { id, name } = req.body;
      const newBook = await this.createBook.run(id, name);
      return res.status(201).send(newBook);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send(err.message);
      }
    }
  }

  async updateById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const updatedBook = await this.updateBook.run(id, name);
      return res.status(200).send(updatedBook);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send(err.message);
      }
    }
  }
}
