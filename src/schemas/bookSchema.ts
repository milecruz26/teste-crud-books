import { z } from "zod";
export const bookSchema = z.object({
  name: z.string().min(1, "O título é obrigatório"),
  authorId: z.number({ message: "O autor é obrigatório" }).min(1),
  pages: z.number().min(1, "O número de páginas deve ser positivo").optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
