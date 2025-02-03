import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, BookFormData } from "../../../schemas/bookSchema";
import styles from "./BooksForm.module.css";
import { getAuthors } from "../../../services/AuthorServices";

interface BooksFormProps {
  onSubmit: (data: BookFormData) => void;
  defaultValues?: { name: string; authorId: number; pages?: number };
  button: string;
}

export const BooksForm: React.FC<BooksFormProps> = ({
  onSubmit,
  defaultValues,
  button,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues,
  });

  const authorsList = getAuthors();
  const handleFormSubmit: SubmitHandler<BookFormData> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Título</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={errors.name ? styles.error : ""}
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="authorId">Autor</label>
        <select
          id="authorId"
          {...register("authorId", {
            setValueAs: (value) => (value ? Number(value) : undefined),
          })}
          className={errors.authorId ? styles.error : ""}
        >
          <option value="" disabled selected>
            Selecione o autor
          </option>
          {authorsList.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        {errors.authorId && (
          <span className={styles.errorMessage}>{errors.authorId.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pages">Páginas</label>
        <input
          id="pages"
          type="number"
          {...register("pages", {
            setValueAs: (value) => (value === "" ? undefined : Number(value)),
          })}
          className={errors.pages ? styles.error : ""}
        />
        {errors.pages && (
          <span className={styles.errorMessage}>{errors.pages.message}</span>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        {button}
      </button>
    </form>
  );
};
