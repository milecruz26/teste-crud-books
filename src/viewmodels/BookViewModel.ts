import { useState } from "react";
import { Book } from "../models/Book";
import {
  getBooks,
  saveBook,
  getBook,
  deleteBook,
  updateBook,
} from "../services/BookServices";
import { useAuthorViewModel } from "./AuthorViewModel";

export const useBookViewModel = () => {
  const [books, setBooks] = useState<Book[]>(getBooks());
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [openModalAddBook, setOpenModalAddBook] = useState(false);
  const [openModalDeleteBook, setOpenModalDeleteBook] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const { authors } = useAuthorViewModel();

  const addBook = (book: Book) => {
    saveBook(book);
    setBooks([...books, book]);
  };

  const handleAddBook = (data: {
    name: string;
    author_id: number;
    pages?: number;
  }) => {
    addBook({
      ...data,
      id: Date.now(),
      name: data.name,
      author_id: data.author_id,
      pages: data.pages,
    });
  };

  const getBookById = (id: number) => {
    const book = getBook(id);
    if (book) {
      setBookDetails(book);
    } else {
      setBookDetails(null);
    }
    setIsDetailsModalOpen(true);
  };

  const handleEditBook = (id: number) => {
    const book = getBook(id);
    if (book) {
      setBookToEdit(book);
      setIsEditModalOpen(true);
    }
  };

  const handleUpdateBook = (data: {
    name: string;
    author_id: number;
    pages?: number;
  }) => {
    if (bookToEdit) {
      const updatedBook = {
        ...bookToEdit,
        name: data.name,
        author_id: data.author_id,
        pages: data.pages,
      };
      updateBook(updatedBook);
      setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
      setIsEditModalOpen(false);
    }
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
  const handleOpenModalDeleteBook = (openModalDeleteBook: boolean) => {
    setOpenModalDeleteBook(openModalDeleteBook);
  };

  const handleOpenModalAddBook = (openModalAddBook: boolean) => {
    if (authors.length === 0) {
      alert("Você precisa adicionar um autor primeiro!");
    } else {
      setOpenModalAddBook(openModalAddBook);
    }
  };

  return {
    books,
    addBook,
    openModalAddBook,
    handleOpenModalAddBook,
    handleDelete,
    handleConfirmDelete,
    openModalDeleteBook,
    handleOpenModalDeleteBook,
    bookDetails,
    getBookById,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    toast,
    setToast,
    isConfirmationModalOpen,
    setIsConfirmationModalOpen,
    bookToEdit,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditBook,
    handleUpdateBook,
    handleAddBook,
  };
};
