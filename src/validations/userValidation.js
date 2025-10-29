import z from "zod";

export const createUserSchema = z.object({
  fullname: z.string().min(3, "fullname minimal 3 karakter"),
  username: z.string().min(3, "fullname minimal 3 karakter"),
  email: z.email("email tidak valid"),
  password: z.string().min(8, "password minimal 8 karakter"),
  role: z.enum(["admin", "user"], "role harus 'admin' atau 'user'"),
});

export const updateUserSchema = z.object({
  fullname: z.string().min(3, "fullname minimal 3 karakter").optional,
  username: z.string().min(3, "fullname minimal 3 karakter").optional,
  email: z.email("email tidak valid").optional,
  password: z.string().min(8, "password minimal 8 karakter").optional,
  role: z.enum(["admin", "user"], "role harus 'admin' atau 'user'").optional,
  address: z.string("address tidak vaild").optional,
  phone_number: z.string("phone_number tidak valid").optional,
  age: z.string("umur tidak valid").optional,
});

