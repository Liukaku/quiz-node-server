import { Request, Response, json } from "express";
import { ConnectUtils } from "../utils/connect.js";

export default async (req: Request, res: Response) => {
  const db = await ConnectUtils.DBConnect();
  try {
    await db.connect();
    const result = await db.query("SELECT * FROM Quiz");
    console.log("Result: " + result);
    res.json(result);
  } catch (error) {
    throw error;
  }
};
