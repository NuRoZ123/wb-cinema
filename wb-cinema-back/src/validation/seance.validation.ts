import { z } from "zod";

export const seanceSchema = z.object({
  film: z.number().positive("L'ID du film doit être un nombre valide"),
  salle: z.number().positive("L'ID de la salle doit être un nombre valide"),
  dateHeure: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "La date doit être au format ISO 8601",
  }),
});
