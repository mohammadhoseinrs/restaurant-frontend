import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(2).max(50),
    email:z.string().email().min(3),
    password:z.string().min(5).max(30)
  });