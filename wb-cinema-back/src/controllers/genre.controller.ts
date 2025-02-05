import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Genre } from "../entities/Genre";

const genreRepository = AppDataSource.getRepository(Genre);

export const getGenres = async (_req: Request, res: Response) => {
  const genres = await genreRepository.find();
  res.json(genres);
};

export const createGenre = async (req: Request, res: Response) => {
  const genre = genreRepository.create(req.body);
  await genreRepository.save(genre);
  res.status(201).json(genre);
};
