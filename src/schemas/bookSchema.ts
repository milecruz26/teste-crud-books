import { z } from "zod";
export const bookSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  authorId: z.number().min(1, "O autor é obrigatório"),
  pages: z.string().min(1, "O número de páginas deve ser positivo"),
});

export type BookFormData = z.infer<typeof bookSchema>;
