import React from "react";
import { AuthorForm } from "../../components/author/AuthorForm/AuthorForm";
import { AuthorList } from "../../components/author/AuthorList/AuthorList";
import { Modal } from "../../components/ui/Modal/Modal";
import { useAuthorViewModel } from "../../viewmodels/AuthorViewModel";
import styles from "./AuthorView.module.css";

const AuthorView: React.FC = () => {
  const {
    addAuthor,
    authors,
    removeAuthor,
    openModalAddAuthor,
    handleOpenModalAddAuthor,
    getAuthorById,
  } = useAuthorViewModel();

  const handleAddAuthor = (data: { name: string; email?: string }) => {
    addAuthor({ ...data, id: Date.now(), email: data.email || "" });
  };

  return (
    <div className={styles.autorView}>
      <h1>Autores</h1>
      <Modal
        title="Adicionar Autor"
        isOpen={openModalAddAuthor}
        onOpenChange={() => handleOpenModalAddAuthor(!openModalAddAuthor)}
        trigger={<button>Adicionar Autor</button>}
      >
        <AuthorForm onSubmit={handleAddAuthor} />
      </Modal>
      <AuthorList
        authors={authors}
        onDelete={removeAuthor}
        onAuthorDatails={getAuthorById}
      />
    </div>
  );
};

export default AuthorView;
