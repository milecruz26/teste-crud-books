import React, { useState } from "react";
import { Author } from "../../models/Author";
import { TableBase } from "../../components/ui/TableBase/TableBase";
import Alert from "../ui/Alert/Alert";

interface AuthorListProps {
  authors: Author[];
  onDelete: (id: number) => void;
}

export const AuthorList: React.FC<AuthorListProps> = ({
  authors,
  onDelete,
}) => {
  const columns = [
    { header: "Nome", accessor: (row: Author) => row.name },
    { header: "Email", accessor: (row: Author) => row.email },
  ];
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleDelete = (id: number) => {
    try {
      onDelete(id);
      setAlert({ type: "success", message: "Autor excluído com sucesso!" });
    } catch (error) {
      setAlert({ type: "error", message: "Erro ao excluir autor." });
    }
  };
  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}{" "}
      <TableBase data={authors} columns={columns} onDelete={handleDelete} />
    </>
  );
};
