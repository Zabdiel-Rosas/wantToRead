export class BookNotFound extends Error {
  constructor(id: string) {
    super(`Book with id ${id} wasn't found!`);
  }
}
