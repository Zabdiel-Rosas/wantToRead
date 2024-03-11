import { CreateBook } from '../application/create-book';
import { GetAllBooks } from '../application/get-all-books';
import { GetBookById } from '../application/get-book-by-id';
import { MongoBookRepository } from './book-repository/mongo-book-repository';
import { BookController } from './http/book-controller';

const getBookRepository = new MongoBookRepository();
const getAllBooks = new GetAllBooks(getBookRepository);
const getBookById = new GetBookById(getBookRepository);
const createBook = new CreateBook(getBookRepository);

export const bookGetController = new BookController(
  getAllBooks,
  getBookById,
  createBook
);
