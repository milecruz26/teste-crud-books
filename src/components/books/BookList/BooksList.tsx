import React from "react";
import { Book } from "../../../models/Book";
import Toast from "../../ui/Toast/Toast";
import Alert from "../../ui/Alert/Alert";
import { TableBase } from "../../ui/TableBase/TableBase";

interface BooksListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onBookDetails: (id: number) => void;
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: (open: boolean) => void;
  onConfirmDelete: () => void;
  toast: { type: "success" | "error"; message: string } | null;
  setToast: (
    alert: { type: "success" | "error"; message: string } | null
  ) => void;
}

export const BooksList: React.FC<BooksListProps> = ({
  books,
  onDelete,
  onBookDetails,
  toast,
  setToast,
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
  onConfirmDelete,
}) => {
  const columns = [{ header: "Nome", accessor: (row: Book) => row.name }];
  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <TableBase
        data={books}
        columns={columns}
        onDelete={onDelete}
        onBookDetails={onBookDetails}
      />
      <Alert
        isOpen={isConfirmationModalOpen}
        onOpenChange={setIsConfirmationModalOpen}
        onConfirm={onConfirmDelete}
        title="Excluir Livro"
        message="Tem certeza que deseja excluir este livro?"
      />
    </>
  );
};
