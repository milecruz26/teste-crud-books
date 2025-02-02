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
      <Modal
        title="Adicionar Livro"
        isOpen={openModalAddBook}
        onOpenChange={() => handleOpenModalAddBook(!openModalAddBook)}
        hasButton={true}
        trigger={<button>Adicionar Livro</button>}
      >
        <BooksForm onSubmit={handleAddBook} />
      </Modal>
      <BooksList
        books={books}
        onDelete={handleDelete}
        onBookDetails={getBookById}
        onConfirmDelete={handleConfirmDelete}
        toast={toast}
        setToast={setToast}
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
      />
      <Modal
        title="Detalhes do Livro"
        isOpen={isDetailsModalOpen}
        onOpenChange={setIsDetailsModalOpen}
      >
        {bookDetails && <BooksDetails book={bookDetails} />}
      </Modal>
    </div>
  );
};
