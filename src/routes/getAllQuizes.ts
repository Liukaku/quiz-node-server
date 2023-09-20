import { Request, Response, json } from "express";
import { ConnectUtils } from "../utils/connect.js";

export default async (req: Request, res: Response) => {
  const db = ConnectUtils.DBConnect();
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    db.query("SELECT * FROM Quiz", (err, result) => {
      if (err) throw err;
      console.log("Result: " + result);
      res.json(result);
    });
  });
};
