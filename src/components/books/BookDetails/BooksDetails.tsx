import React from "react";
import { Book } from "../../../models/Book";
import { PersonIcon, FileIcon, ReaderIcon } from "@radix-ui/react-icons";
import styles from "./BooksDetails.module.css";
import { getAuthors } from "../../../services/AuthorServices";
import { Modal } from "../../ui/Modal/Modal";

interface BooksDetailsProps {
  book: Book;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BooksDetails: React.FC<BooksDetailsProps> = ({
  book,
  isOpen,
  onOpenChange,
}) => {
  const authors = getAuthors();
  const author = authors.find((a) => a.id === book.author_id);
  return (
    <Modal
      title="Detalhes do Livro"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <div className={styles.detailsContainer}>
        <p>
          <ReaderIcon className={styles.icon} /> <strong>Nome do livro:</strong>
          {book.name}
        </p>
        <p>
          <PersonIcon className={styles.icon} /> <strong>Author:</strong>
          {author?.name}
        </p>
        <p>
          <FileIcon className={styles.icon} /> <strong>Páginas:</strong>
          {book.pages || 0}
        </p>
      </div>
    </Modal>
  );
};
