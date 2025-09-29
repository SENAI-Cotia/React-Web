import z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type LoginData = z.infer<typeof LoginSchema>;

export const RegisterSchema = LoginSchema.extend({
  name: z.string().min(2),
  email: z.email({ error: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
});

export type RegisterData = z.infer<typeof RegisterSchema>;
