import express from "express";
import type { Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";

import { logger } from "./utils/logger.js";

import mainRoutes from "./routes/main.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// // 1. GET Main Data
// app.get("/api/main", async (req: Request, res: Response) => {
//   const { data, error } = await supabase.from("main").select("*");

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }
//   res.status(200).json(data);
// });

// --- API Routes ---
app.use("/api/main", mainRoutes);

// Test routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Health Check: API is running!" });
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from the ACCESS Leaderboard Express API!" });
});

// --- Start Server ---
app.listen(PORT, () => {
  logger.info("Server started successfully", {
    port: PORT,
    environment: process.env.NODE_ENV || "development",
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
  });
  // Keep console.log for immediate visibility during development
  console.log(`\nServer is running on http://localhost:${PORT}/api`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
