export type AnswerValueType = "A" | "B" | "C" | "D" | "E";

export interface Answer {
  text: string;
  value: AnswerValueType;
}
