import React from "react";
import { Modal } from "../../ui/Modal/Modal";
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { Author } from "../../../models/Author";

interface AuthorEditModalProps {
  author: Author | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { name: string; email?: string }) => void;
}

export const AuthorEdit: React.FC<AuthorEditModalProps> = ({
  author,
  isOpen,
  onOpenChange,
  onSubmit,
}) => {
  return (
    <Modal title="Editar Autor" isOpen={isOpen} onOpenChange={onOpenChange}>
      <AuthorForm
        onSubmit={onSubmit}
        defaultValues={
          author ? { name: author.name, email: author.email } : undefined
        }
      />
    </Modal>
  );
};
