import { Request, Response, json } from "express";
import { ConnectUtils } from "../utils/connect.js";
import { Answer } from "../utils/types.js";
import createQuestion from "./utils/createQuestion.js";
import { ResultSetHeader } from "mysql2/promise";

export default async (req: Request, res: Response) => {
  let questionId = Number(req.params.questionId);
  const db = await ConnectUtils.DBConnect();
  console.log("questionId: " + questionId);
  if (`${questionId}` === "NaN") {
    console.log("questionId is NaN");
    questionId = await createQuestion(db, req.body);
    console.log(questionId);
  }

  console.log("creating answers");

  const insertStmt = `REPLACE INTO Answers (orderBy, question_id, answer_title, correct_answer) VALUES ?`;
  const values = req.body.answer.map((answer: Answer) => [
    answer.order,
    questionId,
    answer.title,
    answer.correct,
  ]);

  console.log("answers mapped, inserting");
  try {
    const [result] = await db.query<ResultSetHeader>(insertStmt, [values]);
    console.log("success", result);
    res.json(result);
  } catch (error) {
    throw error;
  }
};
