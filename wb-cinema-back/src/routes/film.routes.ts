import express from "express";
import {
  getFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
} from "../controllers/film.controller";
import { validate } from "../middlewares/validate.middleware";
import { filmSchema } from "../validation/film.validation";

const router = express.Router();

router.get("/", getFilms);
router.get("/:id", getFilmById);
router.post("/", validate(filmSchema), createFilm);
router.put("/:id", validate(filmSchema), updateFilm);
router.delete("/:id", deleteFilm);

export default router;
