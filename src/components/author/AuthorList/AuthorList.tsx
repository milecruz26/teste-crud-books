import React from "react";
import { Author } from "../../../models/Author";
import { TableBase } from "../../ui/TableBase/TableBase";
import Toast from "../../ui/Toast/Toast";
import Alert from "../../ui/Alert/Alert";
import styles from "./AuthorList.module.css";

interface AuthorListProps {
  authors: Author[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
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
  onEdit,
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
      {authors.length === 0 ? (
        <div className={styles.emptyMessage}>Xiii! Não tem nenhum autor!</div>
      ) : (
        <TableBase
          data={authors}
          columns={columns}
          onDelete={onDelete}
          onItemDetails={onAuthorDetails}
          onEdit={onEdit}
        />
      )}
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
