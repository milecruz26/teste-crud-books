import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, BookFormData } from "../../../schemas/bookSchema";
import styles from "./BooksForm.module.css";

interface BooksFormProps {
  onSubmit: (data: BookFormData) => void;
}

export const BooksForm: React.FC<BooksFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });
  const handleFormSubmit: SubmitHandler<BookFormData> = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          {...register("title")}
          className={errors.title ? styles.error : ""}
        />
        {errors.title && (
          <span className={styles.errorMessage}>{errors.title.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="authorId">Autor</label>
        <input
          id="authorId"
          type="text"
          {...register("authorId")}
          className={errors.authorId ? styles.error : ""}
        />
        {errors.authorId && (
          <span className={styles.errorMessage}>{errors.authorId.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pages">Páginas</label>
        <input
          id="pages"
          type="number"
          {...register("pages")}
          className={errors.pages ? styles.error : ""}
        />
        {errors.pages && (
          <span className={styles.errorMessage}>{errors.pages.message}</span>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Adicionar Livro
      </button>
    </form>
  );
};
