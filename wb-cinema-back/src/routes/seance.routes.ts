import express from "express";
import {
  getSeancesByFilmId,
  createSeance,
} from "../controllers/seance.controller";

const router = express.Router();
router.get("/:id", getSeancesByFilmId);
router.post("/", createSeance);

export default router;
