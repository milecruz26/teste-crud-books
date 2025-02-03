import React from "react";
import { Modal } from "../../ui/Modal/Modal";
import { AuthorForm } from "../AuthorForm/AuthorForm";
import { AuthorFormData } from "../../../schemas/authorSchema";

interface AuthorCreateProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: AuthorFormData) => void;
}
export const AuthorCreate: React.FC<AuthorCreateProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
}) => {
  return (
    <Modal
      title="Adicionar Autor"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hasButton={true}
      trigger={<button>Adicionar Autor</button>}
    >
      <AuthorForm onSubmit={onSubmit} button="Adicionar Autor" />
    </Modal>
  );
};
