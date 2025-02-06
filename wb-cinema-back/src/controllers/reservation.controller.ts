import { Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { Reservation } from "../entities/Reservation";
import { User } from "../entities/User";
import { Seance } from "../entities/Seance";
import { sendConfirmationEmail } from "../services/email.service";

const reservationRepository = AppDataSource.getRepository(Reservation);
const userRepository = AppDataSource.getRepository(User);
const seanceRepository = AppDataSource.getRepository(Seance);

export const getReservations = async (req: Request, res: Response) => {
  const reservations = await reservationRepository
    .createQueryBuilder("reservation")
    .leftJoinAndSelect("reservation.seance", "seance")
    .leftJoinAndSelect("seance.film", "film")
    .leftJoinAndSelect("seance.salle", "salle")
    .where("reservation.userId = :userId", { userId: req.user })
    .select([
      "reservation.id",
      "reservation.nbPlaces",
      "seance.id",
      "seance.dateHeure",
      "film.id",
      "film.titre",
      "film.description",
      "film.duree",
      "film.image",
      "salle.id",
      "salle.nom",
      "salle.capacite",
    ])
    .getMany();

  res.json(reservations);
};

export const createReservation = async (req: Request, res: Response) => {
  try {
    const { seance, nbPlaces } = req.body;
    const user = await userRepository.findOne({ where: { id: req.user } });

    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const seanceData = await seanceRepository.findOne({
      where: { id: seance },
      relations: ["film"],
    });

    if (!seanceData) {
      res.status(404).json({ message: "Séance non trouvée" });
      return;
    }

    const reservation = reservationRepository.create({
      seance: seanceData,
      user,
      nbPlaces,
    });
    await reservationRepository.save(reservation);

    await sendConfirmationEmail(
      user.email,
      seanceData.film.titre,
      seanceData.dateHeure.toISOString(),
      nbPlaces
    );

    res
      .status(201)
      .json({ message: "Un mail récapitulatif vous a été envoyé !" });
  } catch (error) {
    console.error("Erreur lors de la réservation :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
