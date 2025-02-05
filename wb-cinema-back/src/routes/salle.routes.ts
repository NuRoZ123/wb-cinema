import express from "express";
import { getSalles, createSalle } from "../controllers/Salle.controller";

const router = express.Router();
router.get("/", getSalles);
router.get("/:id", getSalles);
router.post("/", createSalle);

export default router;
