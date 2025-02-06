import type { Genre } from './genre';

export interface Movie {
    id: number;
    description: string;
    titre: string;
    image: string;
    genres: Genre;
    duree: number;
    }
