import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authorSchema, AuthorFormData } from "../../../schemas/authorSchema";
import styles from "./AuthorForm.module.css";

interface AuthorFormProps {
  onSubmit: (data: AuthorFormData) => void;
  defaultValues?: { name: string; email?: string };
}

export const AuthorForm: React.FC<AuthorFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthorFormData>({
    resolver: zodResolver(authorSchema),
    defaultValues,
  });

  const handleFormSubmit: SubmitHandler<AuthorFormData> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={errors.email ? styles.error : ""}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Editar Autor
      </button>
    </form>
  );
};
