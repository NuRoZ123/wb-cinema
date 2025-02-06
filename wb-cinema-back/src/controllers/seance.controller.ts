import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Seance } from "../entities/Seance";
import { Film } from "../entities/Film";
import { Salle } from "../entities/Salle";
import { Reservation } from "../entities/Reservation";

const seanceRepository = AppDataSource.getRepository(Seance);
const filmRepository = AppDataSource.getRepository(Film);
const salleRepository = AppDataSource.getRepository(Salle);
const reservationRepository = AppDataSource.getRepository(Reservation);

export const getSeancesByFilmId = async (req: Request, res: Response) => {
  const seances = await seanceRepository.find({
    where: { film: { id: parseInt(req.params.id) } },
  });
  res.status(200).json(seances);
};

export const createSeance = async (req: Request, res: Response) => {
  const { film, salle, dateHeure } = req.body;
  if (!film || !salle || !dateHeure) {
    res.status(400).json({ message: "Informations manquantes" });
    return;
  }
  const filmObj = await filmRepository.findOne({ where: { id: film } });
  if (!filmObj) {
    res.status(400).json({ message: "Film introuvable" });
    return;
  }
  const salleObj = await salleRepository.findOne({ where: { id: salle } });
  if (!salleObj) {
    res.status(400).json({ message: "Salle introuvable" });
    return;
  }

  const seance = seanceRepository.create({
    film: filmObj,
    salle: salleObj,
    dateHeure,
  });
  await seanceRepository.save(seance);
  res.status(201).json(seance);
};

export const deleteSeance = async (req: Request, res: Response) => {
  const seance = await seanceRepository.findOne({
    where: { id: parseInt(req.params.id) },
  });
  if (!seance) {
    res.status(404).json({ message: "Séance introuvable" });
    return;
  }
  const reservations = await reservationRepository.find({
    where: { seance: { id: seance.id } },
  });
  if (reservations.length > 0) {
    await reservationRepository.remove(reservations);
  }

  await seanceRepository.remove(seance);
  res.status(204);
};
