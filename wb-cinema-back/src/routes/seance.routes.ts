import express from "express";
import {
  getSeancesByFilmId,
  createSeance,
  deleteSeance,
} from "../controllers/seance.controller";
import { validate } from "../middlewares/validate.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { seanceSchema } from "../validation/seance.validation";

const router = express.Router();
router.get("/:id", getSeancesByFilmId);
router.post("/", validate(seanceSchema), authMiddleware, createSeance);
router.delete("/:id", authMiddleware, deleteSeance);

export default router;
