import dotenv from "dotenv";

dotenv.config({
  path: "./secret/.env",
});

export const backendPort = process.env.PORT;

export const databaseUrl = process.env.MONGO_URI;
