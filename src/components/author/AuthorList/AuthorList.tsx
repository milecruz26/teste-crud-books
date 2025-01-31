import React from "react";
import { Author } from "../../../models/Author";
import { TableBase } from "../../ui/TableBase/TableBase";
import Toast from "../../ui/Toast/Toast";
import Alert from "../../ui/Alert/Alert";

interface AuthorListProps {
  authors: Author[];
  onDelete: (id: number) => void;
  onAuthorDetails: (id: number) => void;
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: (open: boolean) => void;
  onConfirmDelete: () => void;
  toast: { type: "success" | "error"; message: string } | null;
  setToast: (
    alert: { type: "success" | "error"; message: string } | null
  ) => void;
}

export const AuthorList: React.FC<AuthorListProps> = ({
  authors,
  onDelete,
  onAuthorDetails,
  toast,
  setToast,
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
  onConfirmDelete,
}) => {
  const columns = [{ header: "Nome", accessor: (row: Author) => row.name }];

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
        data={authors}
        columns={columns}
        onDelete={onDelete}
        onAuthorDatails={onAuthorDetails}
      />
      <Alert
        isOpen={isConfirmationModalOpen}
        onOpenChange={setIsConfirmationModalOpen}
        onConfirm={onConfirmDelete}
        title="Excluir Autor"
        message="Tem certeza que deseja excluir este autor?"
      />
    </>
  );
};
