import bodyParser from 'body-parser';
import express from 'express';
import { bookRouter } from './books/infrastructure/http/book-router';

function bootstrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use('/api/books', bookRouter);

  const port = 3000;

  app.listen(port, () => {
    console.log(`[APP] - Starting Application on port ${port}`);
  });
}

bootstrap();
