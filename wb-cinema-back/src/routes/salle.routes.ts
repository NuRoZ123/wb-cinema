import express from "express";
import { getSalles, createSalle } from "../controllers/salle.controller";
import { validate } from "../middlewares/validate.middleware";
import { salleSchema } from "../validation/salle.validation";

const router = express.Router();
router.get("/", getSalles);
router.get("/:id", getSalles);
router.post("/", validate(salleSchema), createSalle);

export default router;
