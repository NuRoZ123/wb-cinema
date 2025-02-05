import express from "express";
import {
  getReservations,
  createReservation,
} from "../controllers/reservation.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { reservationSchema } from "../validation/reservation.validation";

const router = express.Router();
router.get("/", authMiddleware, getReservations);
router.post(
  "/",
  authMiddleware,
  validate(reservationSchema),
  createReservation
);

export default router;
