import { useState } from "react";
import { Author } from "../models/Author";
import {
  getAuthors,
  getAuthor,
  saveAuthor,
  deleteAuthor,
} from "../services/AuthorServices";

export const useAuthorViewModel = () => {
  const [authors, setAuthors] = useState<Author[]>(getAuthors());
  const [author, setAuthor] = useState<Author>();
  const [openModalAddAuthor, setOpenModalAddAuthor] = useState(false);
  const [openModalDeleteAuthor, setOpenModalDeleteAuthor] = useState(false);

  const addAuthor = (author: Author) => {
    saveAuthor(author);
    setAuthors([...authors, author]);
  };

  const removeAuthor = (id: number) => {
    deleteAuthor(id.toString());
    setAuthors(authors.filter((author) => author.id !== id));
  };

  const getAuthorById = (id: number) => {
    const author = getAuthor(id);
    setAuthor(author);
    console.log(author);
  };

  const handleOpenModalAddAuthor = (openModalAddAuthor: boolean) => {
    setOpenModalAddAuthor(openModalAddAuthor);
  };

  const handleOpenModalDeleteAuthor = (openModalDeleteAuthor: boolean) => {
    setOpenModalDeleteAuthor(openModalDeleteAuthor);
  };

  return {
    authors,
    addAuthor,
    removeAuthor,
    openModalAddAuthor,
    handleOpenModalAddAuthor,
    openModalDeleteAuthor,
    handleOpenModalDeleteAuthor,
    author,
    getAuthorById,
  };
};
