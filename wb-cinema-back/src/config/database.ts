import "reflect-metadata";
import {DataSource} from "typeorm";
import dotenv from "dotenv";

dotenv.config();

console.log("Database config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: true,
});
