import express from "express";
import {
  getSeancesByFilmId,
  createSeance,
} from "../controllers/seance.controller";
import { validate } from "../middlewares/validate.middleware";
import { seanceSchema } from "../validation/seance.validation";

const router = express.Router();
router.get("/:id", getSeancesByFilmId);
router.post("/", validate(seanceSchema), createSeance);

export default router;
