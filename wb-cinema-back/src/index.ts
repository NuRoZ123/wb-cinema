import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import authRoutes from "./routes/auth.routes";
import filmRoutes from "./routes/film.routes";
import genreRoutes from "./routes/genre.routes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/film", filmRoutes);
app.use("/genre", genreRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));
