import { Router } from 'express';
import { bookGetController } from '../dependencies';

const bookRouter = Router();

bookRouter.get('/', bookGetController.readAll.bind(bookGetController));
bookRouter.get('/:id', bookGetController.readById.bind(bookGetController));
bookRouter.post('/', bookGetController.createNewBook.bind(bookGetController));

export { bookRouter };
