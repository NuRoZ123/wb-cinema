import { z } from "zod";

export const salleSchema = z.object({
  nom: z.string().min(1, "Le nom de la salle est requis"),
  capacite: z.number().positive("La capacité doit être un nombre positif"),
});
