import mongoose from "mongoose";
import { databaseUrl } from "../secret/secret.js";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(databaseUrl)
      .then(() => {
        console.log("Database is connect at: " + mongoose.connection.host);
      })
      .catch((error) => {
        console.log("[DATA BASE CONNECTION ERROR]", error);
      });
  } catch (error) {
    console.log("Database connection error");
    process.exit(1);
  }
};
