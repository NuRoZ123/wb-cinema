import e, { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Salle } from "../entities/Salle";

const salleRepository = AppDataSource.getRepository(Salle);

export const getSalles = async (_req: Request, res: Response) => {
  const salles = await salleRepository.find();
  res.json(salles);
};
export const getSalleById = async (req: Request, res: Response) => {
  const salle = await salleRepository.findOne({
    where: { id: parseInt(req.params.id) },
  });
  if (!salle) {
    res.status(404).json({ message: "Salle not found" });
    return;
  }
  res.json(salle);
};

export const createSalle = async (req: Request, res: Response) => {
  const salle = salleRepository.create(req.body);
  await salleRepository.save(salle);
  res.status(201).json(salle);
};
