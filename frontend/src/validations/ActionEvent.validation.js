import { z } from "zod";

const CreateEventObject = z.object({
  nombre: z
    .string()
    .min(5, { message: "El nombre debe de tener como minimo 5 caracteres" }),
  descripcion: z.string().min(1, { message: "La descripcion es requerida" }),
  aforo: z.coerce.number().min(1, { message: "Ingrese un aforo valido" }),
  // datetime: z.coerce.date({ invalid_type_error: "La fecha no es valida" }),
  datetime: z.string({ invalid_type_error: "La fecha no es valida" }).min(15),
  image: z.string().min(1, { message: "La imagen es requerida" }),
  idDoctor: z.string(),
});

const UpdateEventObject = CreateEventObject.omit({ image: true }).catchall(
  z.string()
);

export function validateUpdateEvent(data = {}) {
  return UpdateEventObject.safeParse(data);
}

export function validateCreateEvent(data = {}) {
  return CreateEventObject.safeParse(data);
}
