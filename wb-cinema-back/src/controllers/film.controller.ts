import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Film } from "../entities/Film";
import { Genre } from "../entities/Genre";

const filmRepository = AppDataSource.getRepository(Film);
const genreRepository = AppDataSource.getRepository(Genre);

export const getFilms = async (_req: Request, res: Response) => {
  const films = await filmRepository.find({ relations: ["genres"] });
  res.json(films);
};

export const getFilmById = async (req: Request, res: Response) => {
  const film = await filmRepository.findOne({
    where: { id: parseInt(req.params.id) },
    relations: ["genres"],
  });
  if (!film) {
    res.status(404).json({ message: "Film non trouvé" });
    return;
  }
  res.json(film);
};

export const createFilm = async (req: Request, res: Response) => {
  const { titre, description, image, duree, genres } = req.body;

  const genreEntities = await genreRepository.findBy({ id: genres });

  const film = filmRepository.create({
    titre: titre,
    description: description,
    duree: duree,
    image: image,
    genres: genreEntities,
  });
  await filmRepository.save(film);
  res.status(201).json(film);
};

export const updateFilm = async (req: Request, res: Response) => {
  const film = await filmRepository.findOne({
    where: { id: parseInt(req.params.id) },
    relations: ["genres"],
  });
  if (!film) {
    res.status(404).json({ message: "Film non trouvé" });
    return;
  }
  const genreEntities = await genreRepository.findBy({ id: req.body.genres });
  if (!film) {
    res.status(404).json({ message: "Genre non trouvé" });
    return;
  }

  film.genres = genreEntities;
  filmRepository.merge(film, req.body);
  await filmRepository.save(film);
  res.json(film);
};

export const deleteFilm = async (req: Request, res: Response) => {
  await filmRepository.delete(req.params.id);
  res.status(200).json({ message: "Film supprimé" });
};
