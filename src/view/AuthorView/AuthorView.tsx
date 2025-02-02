import React from "react";
import { AuthorForm } from "../../components/author/AuthorForm/AuthorForm";
import { AuthorList } from "../../components/author/AuthorList/AuthorList";
import { Modal } from "../../components/ui/Modal/Modal";
import { useAuthorViewModel } from "../../viewmodels/AuthorViewModel";
import styles from "./AuthorView.module.css";
import AuthorDetails from "../../components/author/AuthorDetails/AuthorDetails";

const AuthorView: React.FC = () => {
  const {
    addAuthor,
    authors,
    isConfirmationModalOpen,
    setIsConfirmationModalOpen,
    handleDelete,
    handleConfirmDelete,
    toast,
    setToast,
    openModalAddAuthor,
    handleOpenModalAddAuthor,
    getAuthorById,
    authorDetails,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
  } = useAuthorViewModel();

  const handleAddAuthor = (data: { name: string; email?: string }) => {
    addAuthor({ ...data, id: Date.now(), email: data.email || "" });
  };

  return (
    <div className={styles.authorView}>
      <h1>Autores</h1>
      <Modal
        title="Adicionar Autor"
        isOpen={openModalAddAuthor}
        onOpenChange={() => handleOpenModalAddAuthor(!openModalAddAuthor)}
        hasButton={true}
        trigger={<button>Adicionar Autor</button>}
      >
        <AuthorForm onSubmit={handleAddAuthor} />
      </Modal>
      <AuthorList
        authors={authors}
        onDelete={handleDelete}
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        onConfirmDelete={handleConfirmDelete}
        toast={toast}
        setToast={setToast}
        onAuthorDetails={getAuthorById}
      />
      <Modal
        title="Detalhes do Autor"
        isOpen={isDetailsModalOpen}
        onOpenChange={setIsDetailsModalOpen}
      >
        {authorDetails && <AuthorDetails author={authorDetails} />}
      </Modal>
    </div>
  );
};

export default AuthorView;
