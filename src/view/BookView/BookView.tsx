import { BooksList } from "../../components/books/BookList/BooksList";
import { useBookViewModel } from "../../viewmodels/BookViewModel";
import { BooksDetails } from "../../components/books/BookDetails/BooksDetails";
import styles from "./BookView.module.css";
import { BookEdit } from "../../components/books/BookEdit/BookEdit";
import { BookCreate } from "../../components/books/BookCreate/BookCreate";

export const BookView = () => {
  const {
    addBook,
    books,
    isConfirmationModalOpen,
    handleDelete,
    handleConfirmDelete,
    toast,
    openModalAddBook,
    handleOpenModalAddBook,
    getBookById,
    bookDetails,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    setToast,
    setIsConfirmationModalOpen,
    bookToEdit,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditBook,
    handleUpdateBook,
  } = useBookViewModel();

  const handleAddBook = (data: {
    name: string;
    authorId: number;
    pages?: number;
  }) => {
    addBook({
      id: Date.now(),
      name: data.name,
      author_id: data.authorId,
      pages: data.pages,
    });
  };
  return (
    <div className={styles.bookView}>
      <h1>Livros</h1>
      <BookCreate
        isOpen={openModalAddBook}
        onOpenChange={() => handleOpenModalAddBook(!openModalAddBook)}
        onSubmit={handleAddBook}
      />

      <BooksList
        books={books}
        onDelete={handleDelete}
        onBookDetails={getBookById}
        onConfirmDelete={handleConfirmDelete}
        toast={toast}
        setToast={setToast}
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        onEdit={handleEditBook}
      />
      <BookEdit
        book={bookToEdit}
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSubmit={handleUpdateBook}
      />

      {bookDetails && (
        <BooksDetails
          book={bookDetails}
          isOpen={isDetailsModalOpen}
          onOpenChange={setIsDetailsModalOpen}
        />
      )}
    </div>
  );
};
