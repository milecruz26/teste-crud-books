import React from "react";
import { BooksList } from "../../components/books/BookList/BooksList";
import { Modal } from "../../components/ui/Modal/Modal";
import { useBookViewModel } from "../../viewmodels/BookViewModel";
import { BooksDetails } from "../../components/books/BookDetails/BooksDetails";
import styles from "./BookView.module.css";
import { BooksForm } from "../../components/books/BookForm/BooksForm";

export const BookView = () => {
  const {
    addBook,
    books,
    // isConfirmationModalOpen,
    // setIsConfirmationModalOpen,
    // handleDelete,
    // handleConfirmDelete,
    // toast,
    // setToast,
    // openModalAddBook,
    // handleOpenModalAddBook,
    // getBookById,
    // bookDetails,
    // isDetailsModalOpen,
    // setIsDetailsModalOpen,
  } = useBookViewModel();

  const handleAddBook = (data: {
    title: string;
    authorId: number;
    pages: string;
  }) => {
    addBook({
      id: Date.now(),
      name: data.title,
      author_id: data.authorId,
      pages: data.pages,
    });
  };
  return (
    <div className={styles.bookView}>
      <h1>Livros</h1>
      <BooksForm onSubmit={handleAddBook} />
      <BooksList
        books={books}
        onDelete={() => {}}
        onBookDetails={() => {}}
        isConfirmationModalOpen={false}
        setIsConfirmationModalOpen={() => {}}
        onConfirmDelete={() => {}}
        toast={null}
        setToast={() => {}}
      />
    </div>
  );
};
