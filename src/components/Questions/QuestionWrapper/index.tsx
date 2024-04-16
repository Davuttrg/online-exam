import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { answerToQuestion } from "../../../store/slices/examSlice";
import QuestionAnswerItem from "../QuestionAnswerItem";
import { AnswerValueType } from "../type";
import styles from "./style.module.scss";

const QuestionWrapper = () => {
  const examState = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();

  const selectedAnswer = useMemo(
    () =>
      examState.userAnswers.find(
        (item) => item.question.id === examState.activeQuestion.id
      ),
    [examState.activeQuestion.id, examState.userAnswers]
  );

  const handleAnswerChange = (answer: AnswerValueType) => {
    dispatch(answerToQuestion(answer));
  };

  const isSuccessAnswer = useCallback(
    (answer: AnswerValueType) =>
      selectedAnswer &&
      examState.isDisplayAnswer &&
      answer === examState.activeQuestion.realAnswerValue,
    [
      examState.activeQuestion.realAnswerValue,
      examState.isDisplayAnswer,
      selectedAnswer,
    ]
  );

  const isWrongAnswer = useCallback(
    (answer: AnswerValueType) =>
      selectedAnswer &&
      selectedAnswer.answer === answer &&
      examState.isDisplayAnswer &&
      selectedAnswer.answer !== examState.activeQuestion.realAnswerValue,
    [
      examState.activeQuestion.realAnswerValue,
      examState.isDisplayAnswer,
      selectedAnswer,
    ]
  );

  const displayAnswerVideo = useCallback(
    (ansver: AnswerValueType) =>
      selectedAnswer &&
      examState.isDisplayAnswer &&
      ansver === examState.activeQuestion.realAnswerValue,
    [
      examState.activeQuestion.realAnswerValue,
      examState.isDisplayAnswer,
      selectedAnswer,
    ]
  );

  return (
    <div className={styles.questionWrapper} key={examState.activeQuestion.id}>
      <p
        dangerouslySetInnerHTML={{ __html: examState.activeQuestion.question }}
      />
      <div className={styles.questionWrapper__answers}>
        {examState.activeQuestion.answers.map((answer) => (
          <QuestionAnswerItem
            readOnly={!!selectedAnswer}
            key={answer.value}
            displayAnswerVideo={displayAnswerVideo(answer.value)}
            isSelected={selectedAnswer?.answer === answer.value}
            onChange={handleAnswerChange}
            answer={answer}
            isError={isWrongAnswer(answer.value)}
            isSuccess={isSuccessAnswer(answer.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionWrapper;
