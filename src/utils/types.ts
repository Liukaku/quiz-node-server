export interface Quiz {
  id: number;
  quiz_title: string;
  owner_id: number;
  section_title: string;
  section_background: string;
  quiz_id: number;
  question_title: string;
  question_background: string;
  question_type: string;
  section_id: number;
  orderBy: number;
}

export type Question = {
  questionTitle: string;
  order: number;
  type: QuestionType;
  answer: Array<Answer>;
  id: number | "null" | null;
};

export type Answer = {
  title: string;
  order: number;
  correct: boolean;
  id: string | null;
  answerType: QuestionType;
};

export type QuestionType = "SINGLE_CHOICE" | "MULTI_CHOICE" | "ORDER";
