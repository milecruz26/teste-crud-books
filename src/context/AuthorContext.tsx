import React, { createContext, useContext, useState } from "react";
import { Author } from "../models/Author";
import {
  getAuthors,
  saveAuthor,
  deleteAuthor,
} from "../services/AuthorServices";

interface AuthorContextType {
  authors: Author[];
  addAuthor: (author: Author) => void;
  removeAuthor: (id: number) => void;
}

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authors, setAuthors] = useState<Author[]>(getAuthors());

  const addAuthor = (author: Author) => {
    saveAuthor(author);
    setAuthors([...authors, author]);
  };

  const removeAuthor = (id: number) => {
    deleteAuthor(id.toString());
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, removeAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthorContext must be used within an AuthorProvider");
  }
  return context;
};
