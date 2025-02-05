import { z } from "zod";

export const reservationSchema = z.object({
  seance: z.number().positive("L'ID de la séance doit être valide"),
  nbPlaces: z.number().min(1, "Le nombre de places doit être au moins 1"),
});
