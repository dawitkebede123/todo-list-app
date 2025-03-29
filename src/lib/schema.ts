// lib/schema.ts
import { z } from "zod";

export const todoSchema = z.object({
  myInput: z.string().min(3, "Todo must be at least 3 characters long"),
});

export type TodoInput = z.infer<typeof todoSchema>;
