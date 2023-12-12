import { z } from "zod";

const LoginObject = z.object({
  email: z.string().email({ message: "El email no es valido" }),
  password: z.string().min(1, { message: "La contraseña  es requerida" }),
});

const RegisterObject = z
  .object({
    nombre: z
      .string()
      .min(3, { message: "El nombre debe de tener como minmo 3 caracteres" }),
    email: z.string().email({ message: "El email no es valido" }),
    password: z.string().min(7, {
      message: "La contraseña debe de tener como minimo 7 caracteres",
    }),
    confirm_password: z.string(),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Las contraseñas no coinciden!",
  });

export function validateLogin(data = {}) {
  return LoginObject.safeParse(data);
}

export function validateRegister(data = {}) {
  return RegisterObject.safeParse(data);
}
