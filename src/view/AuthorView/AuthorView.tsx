import React from "react";
import { AuthorList } from "../../components/author/AuthorList/AuthorList";
import { useAuthorViewModel } from "../../viewmodels/AuthorViewModel";
import styles from "./AuthorView.module.css";
import AuthorDetails from "../../components/author/AuthorDetails/AuthorDetails";
import { AuthorEdit } from "../../components/author/AuthorEdit/AuthorEdit";
import { AuthorCreate } from "../../components/author/AuthorCreate/AuthorCreate";

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
    authorToEdit,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditAuthor,
    handleUpdateAuthor,
  } = useAuthorViewModel();

  const handleAddAuthor = (data: { name: string; email?: string }) => {
    addAuthor({ ...data, id: Date.now(), email: data.email || "" });
  };

  return (
    <div className={styles.authorView}>
      <h1>Autores</h1>
      <AuthorCreate
        isOpen={openModalAddAuthor}
        onOpenChange={() => handleOpenModalAddAuthor(!openModalAddAuthor)}
        onSubmit={handleAddAuthor}
      />
      <AuthorList
        authors={authors}
        onDelete={handleDelete}
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        onConfirmDelete={handleConfirmDelete}
        toast={toast}
        setToast={setToast}
        onAuthorDetails={getAuthorById}
        onEdit={handleEditAuthor}
      />

      <AuthorEdit
        author={authorToEdit}
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSubmit={handleUpdateAuthor}
      />

      {authorDetails && (
        <AuthorDetails
          isOpen={isDetailsModalOpen}
          onOpenChange={setIsDetailsModalOpen}
          author={authorDetails}
        />
      )}
    </div>
  );
};

export default AuthorView;
