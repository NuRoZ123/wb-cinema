import { z } from "zod";

export const filmSchema = z.object({
  titre: z.string().min(1, "Le titre est obligatoire"),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères"),
  duree: z.number().positive("La durée doit être un nombre positif"),
  image: z.string().url("L'affiche doit être une URL valide"),
  genres: z.number().positive("Au moins un genre est requis"),
});
