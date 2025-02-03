import React from "react";
import { Modal } from "../../ui/Modal/Modal";
import { BooksForm } from "../BookForm/BooksForm";
import { Book } from "../../../models/Book";
import { BookFormData } from "../../../schemas/bookSchema";

interface BookEditModalProps {
  book: Book | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: BookFormData) => void;
  // onSubmit: (data: { name: string; author_id: number; pages?: number }) => void;
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
                author_id: book.author_id,
                pages: book.pages,
              }
            : undefined
        }
      />
    </Modal>
  );
};
