import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  AnswerValueType,
  QuestionModel,
} from "../../components/Questions/type";
import mockQuestions from "../../mock/questions.json";

const questions = mockQuestions as QuestionModel[];

interface ExamState {
  questions: QuestionModel[];
  activeQuestion: QuestionModel;
  userAnswers: {
    question: QuestionModel;
    answer: AnswerValueType;
  }[];
  isDone: boolean;
  isDisplayAnswer: boolean;
}

const initialState: ExamState = {
  questions,
  activeQuestion: questions[0],
  userAnswers: [],
  isDone: false,
  isDisplayAnswer: false,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    finishExam: (state) => {
      state.isDone = true;
    },
    answerToQuestion: (state, action: PayloadAction<AnswerValueType>) => {
      const answers = [...state.userAnswers];
      const foundAnswerIndex = answers.findIndex(
        (item) => item.question.id === state.activeQuestion.id
      );

      if (foundAnswerIndex > -1) {
        answers[foundAnswerIndex] = {
          ...answers[foundAnswerIndex],
          answer: action.payload,
        };
      } else
        answers.push({
          answer: action.payload,
          question: state.activeQuestion,
        });

      state.userAnswers = answers;
    },
    switchDisplayAnswer: (state) => {
      state.isDisplayAnswer = !state.isDisplayAnswer;
    },
    adjustActiveQuestion: (state, action: PayloadAction<QuestionModel>) => {
      state.activeQuestion = action.payload;
    },
  },
});

export const {
  finishExam,
  answerToQuestion,
  switchDisplayAnswer,
  adjustActiveQuestion,
} = examSlice.actions;

export default examSlice.reducer;
