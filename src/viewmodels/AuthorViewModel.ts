import { useState } from "react";
import { Author } from "../models/Author";
import {
  getAuthors,
  saveAuthor,
  deleteAuthor,
} from "../services/AuthorServices";

export const useAuthorViewModel = () => {
  const [authors, setAuthors] = useState<Author[]>(getAuthors());
  const [openModalAuthor, setOpenModalAuthor] = useState(false);

  const addAuthor = (author: Author) => {
    saveAuthor(author);
    setAuthors([...authors, author]);
  };

  const removeAuthor = (id: number) => {
    deleteAuthor(id.toString());
    setAuthors(authors.filter((author) => author.id !== id));
  };
  const handleOpenModalAuthor = (openModalAuthor: boolean) => {
    setOpenModalAuthor(openModalAuthor);
  };

  return {
    authors,
    addAuthor,
    removeAuthor,
    openModalAuthor,
    handleOpenModalAuthor,
  };
};
