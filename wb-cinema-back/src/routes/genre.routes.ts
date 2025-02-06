import express from "express";
import { getGenres, createGenre } from "../controllers/genre.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", getGenres);
router.post("/", authMiddleware, createGenre);

export default router;
