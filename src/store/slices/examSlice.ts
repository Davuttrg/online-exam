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
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  isDone: boolean;
  isDisplayAnswer: boolean;
}

const initialState: ExamState = {
  questions,
  activeQuestion: questions[0],
  userAnswers: [],
  isFirstQuestion: true,
  isLastQuestion: false,
  isDone: false,
  isDisplayAnswer: false,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    moveNextQuestion: (state) => {
      if (state.isLastQuestion) {
        state.isDone = true;
        return state;
      }

      const currentQuestionIndex = questions.findIndex(
        (item) => item.id === state.activeQuestion.id
      );

      const isLastQuestion = currentQuestionIndex === questions.length - 1;

      if (!isLastQuestion) {
        state.activeQuestion = questions[currentQuestionIndex + 1];
      }
      state.isFirstQuestion = false;
      state.isLastQuestion = currentQuestionIndex === questions.length - 2;
    },
    moveBackQuestion: (state) => {
      const currentQuestionIndex = questions.findIndex(
        (item) => item.id === state.activeQuestion.id
      );

      const isFirstQuestion = currentQuestionIndex === 0;

      if (!isFirstQuestion) {
        state.activeQuestion = questions[currentQuestionIndex - 1];
      }
      state.isFirstQuestion = currentQuestionIndex === 1;
      state.isLastQuestion = false;
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
      } else {
        answers.push({
          answer: action.payload,
          question: state.activeQuestion,
        });
      }

      state.userAnswers = answers;
    },
    switchDisplayAnswer: (state) => {
      state.isDisplayAnswer = !state.isDisplayAnswer;
    },

    adjustActiveQuestion: (state, action: PayloadAction<QuestionModel>) => {
      state.activeQuestion = action.payload;
      const questionIndex = state.questions.findIndex(
        (item) => item.id === action.payload.id
      );

      state.isLastQuestion = questionIndex === state.questions.length - 1;

      state.isFirstQuestion = questionIndex === 0;
    },
  },
});

export const {
  moveNextQuestion,
  moveBackQuestion,
  answerToQuestion,
  switchDisplayAnswer,
  adjustActiveQuestion,
} = examSlice.actions;

export default examSlice.reducer;
