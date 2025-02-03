import React from "react";
import { Modal } from "../../ui/Modal/Modal";
import { BooksForm } from "../BookForm/BooksForm";
import { BookFormData } from "../../../schemas/bookSchema";

interface BookCreateProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: BookFormData) => void;
}

export const BookCreate: React.FC<BookCreateProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
}) => {
  return (
    <Modal
      title="Adicionar Livro"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hasButton={true}
      trigger={<button>Adicionar Livro</button>}
    >
      <BooksForm onSubmit={onSubmit} button="Adicionar Livro" />
    </Modal>
  );
};
