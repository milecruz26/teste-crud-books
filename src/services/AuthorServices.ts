import { Author } from "../models/Author";

const AUTHOR_KEY = "authors";

export const getAuthors = (): Author[] => {
  const authors = localStorage.getItem(AUTHOR_KEY);
  return authors ? JSON.parse(authors) : [];
};

export const saveAuthor = (author: Author): void => {
  const authors = getAuthors();
  authors.push(author);
  localStorage.setItem(AUTHOR_KEY, JSON.stringify(authors));
};

export const deleteAuthor = (id: string): void => {
  const authors = getAuthors().filter((author) => author.id.toString() !== id);
  localStorage.setItem(AUTHOR_KEY, JSON.stringify(authors));
};

export const getAuthor = (id: number): Author | undefined => {
  return getAuthors().find((author) => author.id === id);
};
