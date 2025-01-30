import React, { useState } from "react";
import { Author } from "../../models/Author";

interface AuthorFormProps {
  onSubmit: (author: Author) => void;
}

export const AuthorForm: React.FC<AuthorFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do autor"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email do autor"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Adicionar Autor</button>
    </form>
  );
};
