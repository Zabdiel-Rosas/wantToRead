import { GetAllBooks } from '../application/get-all-books';
import { MongoBookRepository } from './book-repository/mongo-book-repository';
import { BookController } from './http/book-controller';

const getBookRepository = new MongoBookRepository();
const getAllBooks = new GetAllBooks(getBookRepository);

export const bookGetController = new BookController(getAllBooks);
