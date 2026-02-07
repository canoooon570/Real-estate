import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing. Check .env formatting.");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ MongoDB Connection Error:", err.message);
  }
};

// GLOBAL MIDDLEWARE
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json()); // Allows the server to read JSON from the frontend
app.use(cookieParser()); // Allows the server to read the JWT token from cookies

// ROUTES
app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server is running on port ${PORT}`);
});