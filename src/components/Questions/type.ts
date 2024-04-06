export type AnswerValueType = "A" | "B" | "C" | "D" | "E";

export interface Answer {
  text: string;
  value: AnswerValueType;
}

export interface QuestionModel {
  id: number;
  order: number;
  question: string;
  answers: Answer[];
  realAnswerValue: AnswerValueType;
}
