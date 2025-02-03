import { Book } from "../models/Book";

const BOOK_KEY = "books";

export const getBooks = (): Book[] => {
  const books = localStorage.getItem(BOOK_KEY);
  return books ? JSON.parse(books) : [];
};

export const saveBook = (book: Book): void => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem(BOOK_KEY, JSON.stringify(books));
};

export const updateBook = (updatedBook: Book): void => {
  const books = getBooks();
  const updatedBooks = books.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );
  console.log("updateBook service:", updatedBooks);
  localStorage.setItem(BOOK_KEY, JSON.stringify(updatedBooks));
};

export const deleteBook = (id: string): void => {
  const books = getBooks().filter((book) => book.id.toString() !== id);
  localStorage.setItem(BOOK_KEY, JSON.stringify(books));
};

export const getBook = (id: number): Book | undefined => {
  return getBooks().find((book) => book.id === id);
};
