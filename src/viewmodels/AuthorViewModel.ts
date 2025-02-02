import { useState } from "react";
import { Author } from "../models/Author";
import {
  getAuthors,
  getAuthor,
  saveAuthor,
  deleteAuthor,
  updateAuthor,
} from "../services/AuthorServices";

export const useAuthorViewModel = () => {
  const [authors, setAuthors] = useState<Author[]>(getAuthors());
  const [authorDetails, setAuthorDetails] = useState<Author | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [openModalAddAuthor, setOpenModalAddAuthor] = useState(false);
  const [openModalDeleteAuthor, setOpenModalDeleteAuthor] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [authorToDelete, setAuthorToDelete] = useState<number | null>(null);
  const [authorToEdit, setAuthorToEdit] = useState<Author | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const addAuthor = (author: Author) => {
    saveAuthor(author);
    setAuthors([...authors, author]);
  };

  const getAuthorById = (id: number) => {
    const author = getAuthor(id);
    if (author) {
      setAuthorDetails(author);
      console.log(author);
    } else {
      setAuthorDetails(null);
    }
    setIsDetailsModalOpen(true);
  };
  const handleEditAuthor = (id: number) => {
    const author = getAuthor(id);
    if (author) {
      setAuthorToEdit(author);
      setIsEditModalOpen(true);
    }
  };
  const handleUpdateAuthor = (data: { name: string; email?: string }) => {
    if (authorToEdit) {
      const updatedAuthor = { ...authorToEdit, ...data };
      updateAuthor(updatedAuthor);
      setAuthors(
        authors.map((a) => (a.id === updatedAuthor.id ? updatedAuthor : a))
      );
      setIsEditModalOpen(false);
    }
  };

  const handleDelete = (id: number) => {
    setAuthorToDelete(id);
    setIsConfirmationModalOpen(true);
  };
  const handleConfirmDelete = () => {
    if (authorToDelete) {
      try {
        deleteAuthor(authorToDelete.toString());
        setAuthors(authors.filter((author) => author.id !== authorToDelete));
        setToast({ type: "success", message: "Autor excluído com sucesso!" });
      } catch (error) {
        setToast({ type: "error", message: "Erro ao excluir autor." });
      }
      setIsConfirmationModalOpen(false);
      setAuthorToDelete(null);
    }
  };

  const handleOpenModalAddAuthor = (openModalAddAuthor: boolean) => {
    setOpenModalAddAuthor(openModalAddAuthor);
  };

  const handleOpenModalDeleteAuthor = (openModalDeleteAuthor: boolean) => {
    setOpenModalDeleteAuthor(openModalDeleteAuthor);
  };

  return {
    authors,
    addAuthor,
    openModalAddAuthor,
    handleOpenModalAddAuthor,
    handleDelete,
    handleConfirmDelete,
    openModalDeleteAuthor,
    handleOpenModalDeleteAuthor,
    authorDetails,
    getAuthorById,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    toast,
    setToast,
    isConfirmationModalOpen,
    setIsConfirmationModalOpen,
    authorToEdit,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditAuthor,
    handleUpdateAuthor,
  };
};
