import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Reservation } from "../entities/Reservation";

const reservationRepository = AppDataSource.getRepository(Reservation);

export const getReservations = async (req: Request, res: Response) => {
  const reservations = await reservationRepository.find({
    where: { user: { id: req.user } },
  });
  res.json(reservations);
};

export const createReservation = async (req: Request, res: Response) => {
  const reservation = reservationRepository.create({
    ...req.body,
    user: { id: req.user },
  });
  await reservationRepository.save(reservation);
  res.status(201).json(reservation);
};
