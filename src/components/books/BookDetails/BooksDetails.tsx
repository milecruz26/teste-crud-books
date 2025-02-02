import React from "react";
import { Book } from "../../../models/Book";
import { PersonIcon, FileIcon, ReaderIcon } from "@radix-ui/react-icons";
import styles from "./BooksDetails.module.css";
import { getAuthors } from "../../../services/AuthorServices";

interface BooksDetailsProps {
  book: Book;
}

export const BooksDetails: React.FC<BooksDetailsProps> = ({ book }) => {
  const authors = getAuthors();
  const author = authors.find((a) => a.id === book.author_id);
  return (
    <div className={styles.detailsContainer}>
      <p>
        <ReaderIcon className={styles.icon} /> <strong>Nome do livro:</strong>
        {book.name}
      </p>
      <p>
        <PersonIcon className={styles.icon} /> <strong>Author:</strong>
        {author?.name || "N/A"}
      </p>
      <p>
        <FileIcon className={styles.icon} /> <strong>Páginas:</strong>
        {book.pages || "N/A"}
      </p>
    </div>
  );
};
