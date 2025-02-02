import React from "react";
import styles from "./TableBase.module.css";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface TableBaseProps<T> {
  data: T[];
  columns: Column<T>[];
  onDelete?: (id: number) => void;
  onItemDetails?: (id: number) => void;
  onEdit?: (id: number) => void;
}

export const TableBase = <T extends { id: number }>({
  data,
  columns,
  onDelete,
  onItemDetails,
  onEdit,
}: TableBaseProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
          {onDelete && <th className={styles.action}>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column, index) => (
              <td
                key={index}
                onClick={() => onItemDetails && onItemDetails(row.id)}
              >
                {typeof column.accessor === "function"
                  ? column.accessor(row)
                  : (row[column.accessor] as React.ReactNode)}
              </td>
            ))}
            {(onDelete || onEdit) && (
              <td className={styles.itensActions}>
                {onEdit && (
                  <button
                    onClick={() => onEdit(row.id)}
                    className={styles.editButton}
                  >
                    <Pencil1Icon />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(row.id)}
                    className={styles.deleteButton}
                  >
                    <TrashIcon />
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
