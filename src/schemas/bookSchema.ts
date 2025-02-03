import { z } from "zod";
export const bookSchema = z.object({
  name: z.string().min(1, "O título é obrigatório"),
  author_id: z.number({ message: "O autor é obrigatório" }).min(1),
  pages: z.number().optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
