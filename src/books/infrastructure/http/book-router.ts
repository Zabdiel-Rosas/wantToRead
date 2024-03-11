import { Router } from 'express';
import { bookGetController } from '../dependencies';

const bookRouter = Router();

bookRouter.get('/', bookGetController.run.bind(bookGetController));

export { bookRouter };
