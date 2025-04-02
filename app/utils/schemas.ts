import { z, ZodSchema } from "zod";

export const validateIssue = z.object({
  title: z.string().min(3, "Title must have atleast 3 character(s)").max(191),
  description: z
    .string()
    .min(3, "Description must have atleast 3 character(s)")
    .max(1000),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(3, "Title must have atleast 3 character(s)")
    .max(191)
    .optional(),
  description: z
    .string()
    .min(3, "Description must have atleast 3 character(s)")
    .max(1000)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned To User Id is required")
    .max(255)
    .optional()
    .nullable(),
});

export const UserSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must have atleast 3 character(s)")
    .max(191),
  lastName: z
    .string()
    .min(3, "Last name must have atleast 3 character(s)")
    .max(191),
  username: z
    .string()
    .min(3, "Username must have atleast 3 character(s)")
    .max(191),
  // age: z.number({ invalid_type_error: "Age is required" }).min(1).max(99),
  userDescription: z
    .string()
    .min(5, "Description must have atleast 5 character(s)")
    .max(1000),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const results = schema.safeParse(data);
  if (!results.success) {
    const errors = results.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return results.data;
}
