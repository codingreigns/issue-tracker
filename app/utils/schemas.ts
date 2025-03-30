import { z } from "zod";

export const validateIssue = z.object({
  title: z.string().min(3, "Title must have atleast 3 character(s)").max(191),
  description: z
    .string()
    .min(3, "Description must have atleast 3 character(s)")
    .max(1000),
});
