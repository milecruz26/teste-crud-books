import React from "react";
import { Author } from "../../models/Author";
import { TableBase } from "../../components/ui/TableBase/TableBase";

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
  return <TableBase data={authors} columns={columns} onDelete={onDelete} />;
};
