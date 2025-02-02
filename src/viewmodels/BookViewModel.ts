import { useState } from "react";
import { Book } from "../models/Book";
import {
  getBooks,
  saveBook,
  getBook,
  deleteBook,
} from "../services/BookServices";

export const useBookViewModel = () => {
  const [books, setBooks] = useState<Book[]>(getBooks());
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [openModalAddBook, setOpenModalAddBook] = useState(false);
  const [openModalDeleteBook, setOpenModalDeleteBook] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const addBook = (book: Book) => {
    saveBook(book);
    setBooks([...books, book]);
  };

  const getBookById = (id: number) => {
    const book = getBook(id);
    if (book) {
      setBookDetails(book);
      console.log(book);
    } else {
      setBookDetails(null);
    }
    setIsDetailsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setBookToDelete(id);
    setIsConfirmationModalOpen(true);
  };
  const handleConfirmDelete = () => {
    if (bookToDelete) {
      try {
        deleteBook(bookToDelete.toString());
        setBooks(books.filter((book) => book.id !== bookToDelete));
        setToast({ type: "success", message: "Livro excluído com sucesso!" });
      } catch (error) {
        setToast({ type: "error", message: "Erro ao excluir livro." });
      }
      setIsConfirmationModalOpen(false);
      setBookToDelete(null);
    }
  };

  const handleOpenModalAddBook = (openModalAddBook: boolean) => {
    setOpenModalAddBook(openModalAddBook);
  };

  const handleOpenModalDeleteBook = (openModalDeleteBook: boolean) => {
    setOpenModalDeleteBook(openModalDeleteBook);
  };

  return {
    books,
    addBook,
    openModalAddBook,
    getBookById,
    handleOpenModalAddBook,
    handleDelete,
    handleConfirmDelete,
    openModalDeleteBook,
    handleOpenModalDeleteBook,
    bookDetails,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    isConfirmationModalOpen,
    toast,
  };
};
