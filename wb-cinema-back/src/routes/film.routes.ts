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
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", getFilms);
router.get("/:id", getFilmById);
router.post("/", validate(filmSchema), authMiddleware, createFilm);
router.put("/:id", validate(filmSchema), authMiddleware, updateFilm);
router.delete("/:id", authMiddleware, deleteFilm);

export default router;
