import { Connection, ResultSetHeader } from "mysql2/promise";
import { Question } from "../../utils/types.js";

export default async (db: Connection, question: Question) => {
  const questionKeys = [
    "questionTitle",
    "question_background",
    "type",
    "from_section_id",
    "order",
  ];
  console.log("creating Question");
  console.log(question);
  const questionValues = [
    question["questionTitle"],
    question["question_background"] ?? "",
    question["type"],
    question["from_section_id"],
    question["order"],
  ];
  console.log(questionValues);
  const insertStmt = `INSERT INTO Questions (question_title, question_background, question_type, section_id, orderBy) VALUES (?, ?, ?, ?, ?)`;
  try {
    await db.connect();
    const [result] = await db.query<ResultSetHeader>(
      insertStmt,
      questionValues
    );
    return result.insertId;
  } catch (error) {
    throw error;
  }
  //   db.connect((err) => {
  //     if (err) throw err;
  //     console.log("Connected for question edit!");
  //     db.query(insertStmt, questionValues, (err, result: ResultSetHeader) => {
  //       if (err) throw err;
  //       return result.insertId;
  //     });
  //   });
};
