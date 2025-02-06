import type {Salle} from "@/model/salle.ts";
import type {Movie} from "@/model/movie.ts";

export interface Seance {
    id: number;
    dateHeure: string
    film: Movie;
    salle: Salle;
}