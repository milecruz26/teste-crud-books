import { z } from "zod";

export const authorSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido").optional(),
});

export type AuthorFormData = z.infer<typeof authorSchema>;
