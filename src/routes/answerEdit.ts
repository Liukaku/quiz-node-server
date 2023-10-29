import { Request, Response, json } from "express";
import { ConnectUtils } from "../utils/connect.js";
import { Answer } from "../utils/types.js";
import createQuestion from "./utils/createQuestion.js";

export default async (req: Request, res: Response) => {
  let questionId = req.params.questionId;
  const db = await ConnectUtils.DBConnect();
  console.log("questionId: " + questionId);
  if (questionId == null || `${questionId}` === "null") {
    console.log("questionId is null");
    const qid = await createQuestion(db, req.body);
    console.log(qid);
  }

  // const insertStmt = `REPLACE INTO Answers (id, orderBy, question_id, answer_title, correct_answer) VALUES ?`;
  // const values = req.body.map((answer: Answer) => [
  //   answer.id,
  //   answer.order,
  //   questionId,
  //   answer.title,
  //   answer.correct,
  // ]);

  // db.connect((err) => {
  //   if (err) throw err;
  //   console.log("Connected for answer edit!");
  //   db.query(insertStmt, [values], (err, result) => {
  //     if (err) throw err;
  //     console.log("Result: " + result);
  //     res.json(result);
  //   });
  // });
};
