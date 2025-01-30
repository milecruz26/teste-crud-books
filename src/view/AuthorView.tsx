import React from "react";
import { AuthorForm } from "../components/author/AuthorForm/AuthorForm";
import { AuthorList } from "../components/author/AuthorList";
import { Modal } from "../components/ui/Modal/Modal";
import { useAuthorViewModel } from "../viewmodels/AuthorViewModel";

const AuthorView: React.FC = () => {
  const {
    addAuthor,
    authors,
    removeAuthor,
    openModalAddAuthor,
    handleOpenModalAddAuthor,
  } = useAuthorViewModel();

  const handleAddAuthor = (data: { name: string; email?: string }) => {
    addAuthor({ ...data, id: Date.now(), email: data.email || "" });
  };

  return (
    <div>
      <h1>Autores</h1>
      <Modal
        title="Adicionar Autor"
        isOpen={openModalAddAuthor}
        onOpenChange={() => handleOpenModalAddAuthor(!openModalAddAuthor)}
        trigger={<button>Adicionar Autor</button>}
      >
        <AuthorForm onSubmit={handleAddAuthor} />
      </Modal>
      <AuthorList authors={authors} onDelete={removeAuthor} />
    </div>
  );
};

export default AuthorView;
