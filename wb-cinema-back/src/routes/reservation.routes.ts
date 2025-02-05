import express from "express";
import {
  getReservations,
  createReservation,
} from "../controllers/reservation.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();
router.get("/", authMiddleware, getReservations);
router.post("/", authMiddleware, createReservation);

export default router;
