import React from "react";
import { Author } from "../../models/Author";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

interface AuthorListProps {
  authors: Author[];
  onDelete: (id: number) => void;
}

export const AuthorList: React.FC<AuthorListProps> = ({
  authors,
  onDelete,
}) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>
            <VisuallyHidden>Ícone</VisuallyHidden>
          </th>
          <th>Nome</th>
          <th>Email</th>
          <th>
            <VisuallyHidden>Ações</VisuallyHidden>
          </th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id} style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ textAlign: "center" }}>
              <CheckIcon color="green" />
            </td>
            <td style={{ padding: "10px" }}>{author.name}</td>
            <td style={{ padding: "10px" }}>{author.email || "N/A"}</td>
            <td style={{ textAlign: "center" }}>
              <button
                onClick={() => onDelete(author.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Cross2Icon color="red" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
