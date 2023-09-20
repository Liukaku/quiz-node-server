import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";
import getAllQuizes from "./routes/getAllQuizes.js";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/getAll", (req, res) => {
  getAllQuizes(req, res);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
