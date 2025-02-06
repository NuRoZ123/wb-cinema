import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import authRoutes from "./routes/auth.routes";
import salleRoutes from "./routes/salle.routes";
import filmRoutes from "./routes/film.routes";
import genreRoutes from "./routes/genre.routes";
import seanceRoutes from "./routes/seance.routes";
import reservationRoutes from "./routes/reservation.routes";
import oas from "express-oas-generator";

import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const doc = {
  info: {
    title: "API de Gestion de Cinéma",
    description: "Documentation générée automatiquement avec swagger-autogen",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:" + process.env.PORT,
      description: "Serveur local",
    },
  ],
};
app.use(express.json());

oas.init(app, doc);

app.use(cors({ origin: process.env.corsOrigin }));
app.use("/auth", authRoutes);
app.use("/film", filmRoutes);
app.use("/genre", genreRoutes);
app.use("/seance", seanceRoutes);
app.use("/salles", salleRoutes);
app.use("/reservation", reservationRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));
