import type { Movie } from './movie';
import type { Salle } from './salle';
import type { Seance } from './seance';

export interface Reservation {
    id: number;
    nbPlaces: string;
    seance: Seance;
    }
