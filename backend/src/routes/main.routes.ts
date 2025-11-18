import { Router } from "express";
import { getMainData } from "../controllers/main.controller.js";

const router = Router();

// GET /api/main
router.get("/", getMainData);

export default router;
