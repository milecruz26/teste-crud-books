import React from "react";
import { useAuthorContext } from "../context/AuthorContext";
import { AuthorForm } from "../components/author/AuthorForm";
import { AuthorList } from "../components/author/AuthorList";

const AuthorView: React.FC = () => {
  const { authors, addAuthor, removeAuthor } = useAuthorContext();

  return (
    <div>
      <h1>Autores</h1>
      <AuthorForm onSubmit={addAuthor} />
      <AuthorList authors={authors} onDelete={removeAuthor} />
    </div>
  );
};

export default AuthorView;
