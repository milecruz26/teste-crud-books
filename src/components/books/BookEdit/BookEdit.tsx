import React from "react";
import { Modal } from "../../ui/Modal/Modal";
import { BooksForm } from "../BookForm/BooksForm";
import { Book } from "../../../models/Book";

interface BookEditModalProps {
  book: Book | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: {
    name: string;
    authorId: number;
    pages?: number | undefined;
  }) => void;
}

export const BookEdit: React.FC<BookEditModalProps> = ({
  book,
  isOpen,
  onOpenChange,
  onSubmit,
}) => {
  return (
    <Modal title="Editar Livro" isOpen={isOpen} onOpenChange={onOpenChange}>
      <BooksForm
        button="Editar Livro"
        onSubmit={onSubmit}
        defaultValues={
          book
            ? {
                name: book.name,
                authorId: book.author_id,
                pages: book.pages,
              }
            : undefined
        }
      />
    </Modal>
  );
};
