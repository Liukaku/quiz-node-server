import { Quiz } from "./types.js";

export class Question {
  question_id: number;
  questionTitle: string;
  question_bg: string;
  type: string;
  from_section_id: number;
  order: number;
  constructor(question: Quiz) {
    this.question_id = question.id;
    this.questionTitle = question.question_title;
    this.question_bg = question.question_background;
    this.type = question.question_type;
    this.from_section_id = question.section_id;
    this.order = question.orderBy;
  }

  getQuestion() {
    return {
      question_id: this.question_id,
      questionTitle: this.questionTitle,
      question_bg: this.question_bg,
      type: this.type,
      from_section_id: this.from_section_id,
      order: this.order,
      answers: [
        {
          id: 0,
          answerType: "SINGLE_CHOICE",
          correct: true,
          order: 0,
          title: "answer 1212",
        },
      ],
    };
  }
}
