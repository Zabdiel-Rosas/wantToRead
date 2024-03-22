import { CreateBook } from '../application/create-book';
import { DeleteBook } from '../application/delete-book';
import { GetAllBooks } from '../application/get-all-books';
import { GetBookById } from '../application/get-book-by-id';
import { UpdateBook } from '../application/update-book';
import { MongoBookRepository } from './book-repository/mongo-book-repository';
import { BookController } from './http/book-controller';

const getBookRepository = new MongoBookRepository();
const getAllBooks = new GetAllBooks(getBookRepository);
const getBookById = new GetBookById(getBookRepository);
const createBook = new CreateBook(getBookRepository);
const updateBook = new UpdateBook(getBookRepository);
const deleteBook = new DeleteBook(getBookRepository);

export const bookGetController = new BookController(
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
);
