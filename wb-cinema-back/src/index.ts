import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));
