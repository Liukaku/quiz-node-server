import { Request, Response, json } from "express";
import { ConnectUtils } from "../utils/connect.js";
import { RowDataPacket } from "mysql2";
import { Quiz } from "../utils/types.js";
import { Question } from "../utils/question.js";

export default async (req: Request, res: Response) => {
  const db = await ConnectUtils.DBConnect();
  const reqQuizId = req.params.id;

  try {
    await db.connect();
    const rows = await db.execute<RowDataPacket[]>(
      "SELECT * FROM Quiz LEFT OUTER JOIN Sections ON Sections.quiz_id = Quiz.id LEFT OUTER JOIN Questions ON Questions.section_id = Sections.id WHERE Quiz.id = ?",
      [reqQuizId]
    );
    const result: Quiz[] = JSON.parse(JSON.stringify(rows))[0];
    console.log(result[0].owner_id);
    let quiz = {
      Owner: {
        ownerName: result[0].owner_id,
        quizName: result[0].quiz_title,
        id: result[0].quiz_id,
      },
      Sections: {},
      Questions: {},
    };

    result.forEach((res) => {
      if (quiz[`${res.section_id}`] == null) {
        quiz["Sections"][`${res.section_id}`] = {
          name: res.section_id,
          section_id: res.section_id,
          background: res.section_background,
        };
      }

      if (quiz["Questions"][`${res.section_id}`] == null) {
        quiz["Questions"][`${res.section_id}`] = [];
      }
      const question = new Question(res);
      quiz["Questions"][`${res.section_id}`].push(question.getQuestion());
    });
    res.json(quiz);
  } catch (error) {
    throw error;
  }
};
