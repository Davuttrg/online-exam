import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { AnswerValueType, QuestionModel } from "../../Questions/type";
import cx from "classnames";
import styles from "./style.module.scss";

interface AnswerKeyRowItemProps {
  question: QuestionModel;
  onClick: (question: QuestionModel) => void;
}

const AnswerKeyRowItem = ({ question, onClick }: AnswerKeyRowItemProps) => {
  const examState = useAppSelector((state) => state.exam);

  const getIsAnsweredOption = useCallback(
    (answer: AnswerValueType) => {
      const userAnswer = examState.userAnswers.find(
        (item) => item.question.id === question.id
      );
      return userAnswer?.answer === answer;
    },
    [examState.userAnswers, question.id]
  );

  const isCurrentQuestion = useMemo(
    () => examState.activeQuestion.id === question.id,
    [examState.activeQuestion.id, question.id]
  );

  return (
    <div
      onClick={() => onClick(question)}
      key={question.id}
      className={cx(styles.answerKeyRowItem, {
        [styles["answerKeyRowItem--active"]!]: isCurrentQuestion,
      })}
    >
      <h5 className={styles.answerKeyRowItem__question}>
        {`${question.order}. Soru`}{" "}
      </h5>

      <ul className={styles.answerKeyRowItem__options}>
        {question.answers.map((answer, i) => (
          <li
            key={answer.value + i}
            className={cx(styles.answerKeyRowItem__optionsItem, {
              [styles["answerKeyRowItem__optionsItem--answered"]!]:
                getIsAnsweredOption(answer.value),
            })}
          >
            {answer.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AnswerKeyRowItem;
