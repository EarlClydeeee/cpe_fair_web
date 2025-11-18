import type { Request, Response } from "express";
import { supabase } from "../lib/supabaseClient.js";
import { logger } from "../utils/logger.js";

export const getMainData = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from("main").select("*");
    if (error) {
      logger.error("Failed to fetch main data", error);
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } catch (err: any) {
    logger.error("Unexpected error in getMainData", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
